'use client';

import { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';

interface LiquidGlitchImageProps {
  src: string;
  alt: string;
  fill?: boolean;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
}

export default function LiquidGlitchImage({
  src,
  alt,
  fill = false,
  width = 400,
  height = 500,
  className = '',
  priority = false
}: LiquidGlitchImageProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sceneRef = useRef<{
    scene: THREE.Scene;
    camera: THREE.Camera;
    renderer: THREE.WebGLRenderer;
    mesh: THREE.Mesh;
    material: THREE.ShaderMaterial;
    mouse: THREE.Vector2;
    clock: THREE.Clock;
    isHovered: boolean;
  } | null>(null);
  
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
    const mouse = new THREE.Vector2();
    const clock = new THREE.Clock();

    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Load texture
    const textureLoader = new THREE.TextureLoader();
    const texture = textureLoader.load(src);
    texture.minFilter = THREE.LinearFilter;
    texture.magFilter = THREE.LinearFilter;

    // Custom shader material for liquid distortion
    const material = new THREE.ShaderMaterial({
      uniforms: {
        uTexture: { value: texture },
        uTime: { value: 0 },
        uMouse: { value: mouse },
        uHover: { value: 0.0 },
        uNoiseStrength: { value: 0.0 },
        uDistortStrength: { value: 0.0 }
      },
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform sampler2D uTexture;
        uniform float uTime;
        uniform vec2 uMouse;
        uniform float uHover;
        uniform float uNoiseStrength;
        uniform float uDistortStrength;
        varying vec2 vUv;

        // Noise function
        vec3 mod289(vec3 x) {
          return x - floor(x * (1.0 / 289.0)) * 289.0;
        }

        vec2 mod289(vec2 x) {
          return x - floor(x * (1.0 / 289.0)) * 289.0;
        }

        vec3 permute(vec3 x) {
          return mod289(((x*34.0)+1.0)*x);
        }

        float snoise(vec2 v) {
          const vec4 C = vec4(0.211324865405187,
                              0.366025403784439,
                             -0.577350269189626,
                              0.024390243902439);
          vec2 i  = floor(v + dot(v, C.yy) );
          vec2 x0 = v -   i + dot(i, C.xx);
          vec2 i1;
          i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
          vec4 x12 = x0.xyxy + C.xxzz;
          x12.xy -= i1;
          i = mod289(i);
          vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
                + i.x + vec3(0.0, i1.x, 1.0 ));

          vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
          m = m*m ;
          m = m*m ;
          vec3 x = 2.0 * fract(p * C.www) - 1.0;
          vec3 h = abs(x) - 0.5;
          vec3 ox = floor(x + 0.5);
          vec3 a0 = x - ox;
          m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
          vec3 g;
          g.x  = a0.x  * x0.x  + h.x  * x0.y;
          g.yz = a0.yz * x12.xz + h.yz * x12.yw;
          return 130.0 * dot(m, g);
        }

        void main() {
          vec2 uv = vUv;
          
          // Distance from mouse
          float mouseDistance = distance(uv, uMouse);
          float influence = 1.0 - smoothstep(0.0, 0.5, mouseDistance);
          
          // Time-based animation
          float timeOffset = uTime * 0.5;
          
          // Multiple layers of noise for organic distortion
          float noise1 = snoise(uv * 3.0 + timeOffset * 0.5) * 0.1;
          float noise2 = snoise(uv * 6.0 - timeOffset * 0.3) * 0.05;
          float noise3 = snoise(uv * 12.0 + timeOffset * 0.7) * 0.025;
          
          // Combine noises
          float totalNoise = (noise1 + noise2 + noise3) * uNoiseStrength;
          
          // Create liquid-like displacement
          vec2 displacement = vec2(
            sin(uv.y * 10.0 + uTime * 2.0) * 0.02,
            cos(uv.x * 8.0 + uTime * 1.5) * 0.015
          );
          
          // Mouse-based distortion (radial)
          if (uHover > 0.1) {
            vec2 toMouse = uv - uMouse;
            float dist = length(toMouse);
            float ripple = sin(dist * 20.0 - uTime * 8.0) * 0.03;
            displacement += normalize(toMouse) * ripple * influence * uDistortStrength;
          }
          
          // Apply displacement
          vec2 distortedUV = uv + displacement + totalNoise;
          
          // Sample texture
          vec4 color = texture2D(uTexture, distortedUV);
          
          // Hover effects
          if (uHover > 0.1) {
            // Desaturate and add red tint
            float gray = dot(color.rgb, vec3(0.299, 0.587, 0.114));
            color.rgb = mix(color.rgb, vec3(gray), 0.8);
            color.rgb = mix(color.rgb, vec3(1.0, 0.2, 0.2), influence * 0.3);
            
            // Add some contrast
            color.rgb = (color.rgb - 0.5) * 1.2 + 0.5;
          }
          
          gl_FragColor = color;
        }
      `
    });

    // Create plane geometry
    const geometry = new THREE.PlaneGeometry(2, 2);
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // Store references
    sceneRef.current = {
      scene,
      camera,
      renderer,
      mesh,
      material,
      mouse,
      clock,
      isHovered: false
    };

    // Animation loop
    const animate = () => {
      if (!sceneRef.current) return;
      
      const { material, clock, isHovered } = sceneRef.current;
      
      // Update uniforms
      material.uniforms.uTime.value = clock.getElapsedTime();
      material.uniforms.uHover.value = THREE.MathUtils.lerp(
        material.uniforms.uHover.value,
        isHovered ? 1.0 : 0.0,
        0.05
      );
      material.uniforms.uNoiseStrength.value = THREE.MathUtils.lerp(
        material.uniforms.uNoiseStrength.value,
        isHovered ? 1.0 : 0.2,
        0.03
      );
      material.uniforms.uDistortStrength.value = THREE.MathUtils.lerp(
        material.uniforms.uDistortStrength.value,
        isHovered ? 1.5 : 0.0,
        0.04
      );
      
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };
    
    animate();

    // Mouse move handler
    const handleMouseMove = (event: MouseEvent) => {
      if (!sceneRef.current || !canvasRef.current) return;
      
      const rect = canvasRef.current.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
      
      sceneRef.current.mouse.set(x * 0.5 + 0.5, y * 0.5 + 0.5);
    };

    canvas.addEventListener('mousemove', handleMouseMove);

    // Cleanup
    return () => {
      canvas.removeEventListener('mousemove', handleMouseMove);
      if (sceneRef.current) {
        sceneRef.current.renderer.dispose();
        sceneRef.current.material.dispose();
        sceneRef.current.mesh.geometry.dispose();
      }
    };
  }, [src, width, height]);

  // Update hover state
  useEffect(() => {
    if (sceneRef.current) {
      sceneRef.current.isHovered = isHovered;
    }
  }, [isHovered]);

  return (
    <div 
      className={`relative ${fill ? 'w-full h-full' : ''} ${className}`}
      style={!fill ? { width, height } : {}}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full object-cover cursor-pointer"
        style={{ display: 'block' }}
      />
    </div>
  );
}