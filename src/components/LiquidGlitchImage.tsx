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

export default function LiquidGlitchImage({ src, alt, fill = false, width = 925.83, height = 925.62, className = '', priority = false }: LiquidGlitchImageProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sceneRef = useRef<{
    scene: THREE.Scene;
    camera: THREE.Camera;
    renderer: THREE.WebGLRenderer;
    mesh: THREE.Mesh;
    material: THREE.ShaderMaterial;
    mouse: THREE.Vector2;
    clock: THREE.Clock;
    isActive: boolean;
  } | null>(null);

  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
    const mouse = new THREE.Vector2(-10, -10);
    const clock = new THREE.Clock();

    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Load texture
    const textureLoader = new THREE.TextureLoader();
    const texture = textureLoader.load(src);
    texture.minFilter = THREE.LinearFilter;
    texture.magFilter = THREE.LinearFilter;

    // EFFECT PARAMETERS - ADJUST THESE FOR STRONGER/WEAKER EFFECTS
    const EFFECT_RADIUS = 0.25; // Larger radius = bigger affected area
    const RIPPLE_STRENGTH = 0.2; // Stronger ripple distortion
    const WAVE_STRENGTH = 0.04; // Stronger wave distortion
    const NOISE_STRENGTH = 0.15; // Stronger noise
    const COLOR_INTENSITY = 0.0; // Stronger color effects

    // Custom shader material for liquid distortion
    const material = new THREE.ShaderMaterial({
      uniforms: {
        uTexture: { value: texture },
        uTime: { value: 0 },
        uMouse: { value: mouse },
        uActive: { value: 0.0 },
        uEffectRadius: { value: EFFECT_RADIUS },
        uRippleStrength: { value: RIPPLE_STRENGTH },
        uWaveStrength: { value: WAVE_STRENGTH },
        uNoiseStrength: { value: NOISE_STRENGTH },
        uColorIntensity: { value: COLOR_INTENSITY }
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
        uniform float uActive;
        uniform float uEffectRadius;
        uniform float uRippleStrength;
        uniform float uWaveStrength;
        uniform float uNoiseStrength;
        uniform float uColorIntensity;
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
          
          // Calculate distance from mouse position
          float distanceFromMouse = distance(uv, uMouse);
          
          // Only apply effects within the radius of the mouse
          if (distanceFromMouse < uEffectRadius && uActive > 0.5) {
            // Calculate intensity based on distance (stronger closer to mouse)
            float intensity = 1.0 - smoothstep(0.0, uEffectRadius, distanceFromMouse);
            intensity *= uActive;
            
            // Time-based animation
            float timeOffset = uTime * 2.0;
            
            // Multiple layers of noise for organic distortion
            float noise1 = snoise(uv * 8.0 + timeOffset) * 0.2;
            float noise2 = snoise(uv * 15.0 - timeOffset * 0.7) * 0.1;
            float noise3 = snoise(uv * 25.0 + timeOffset * 1.3) * 0.05;
            
            // Combine noises with intensity
            float totalNoise = (noise1 + noise2 + noise3) * uNoiseStrength * intensity;
            
            // Create liquid-like displacement that follows mouse
            vec2 toMouse = normalize(uv - uMouse);
            float ripple = sin(distanceFromMouse * 25.0 - uTime * 12.0) * uRippleStrength;
            
            // Mouse-based distortion (radial from mouse)
            vec2 displacement = toMouse * ripple * intensity;
            
            // Add wave distortion
            displacement.x += sin(uv.y * 15.0 + uTime * 2.5) * uWaveStrength * intensity;
            displacement.y += cos(uv.x * 12.0 + uTime * 2.0) * uWaveStrength * intensity;
            
            // Apply displacement with noise
            uv = uv + displacement + totalNoise;
            
            // Sample texture
            vec4 color = texture2D(uTexture, uv);
            
            // Add color effects only in the affected area
            float gray = dot(color.rgb, vec3(0.299, 0.587, 0.114));
            color.rgb = mix(color.rgb, vec3(gray), 0.4 * intensity * uColorIntensity);
            
            // Add red tint
            color.rgb = mix(color.rgb, vec3(1.0, 0.2, 0.2), 0.3 * intensity * uColorIntensity);
            
            // Enhance contrast in affected area
            color.rgb = (color.rgb - 0.5) * (1.0 + intensity * uColorIntensity * 0.5) + 0.5;
            
            gl_FragColor = color;
          } else {
            // When not in affected area, just display the normal texture
            gl_FragColor = texture2D(uTexture, uv);
          }
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
      isActive: false
    };

    // Animation loop
    const animate = () => {
      if (!sceneRef.current) return;

      const { material, clock, isActive } = sceneRef.current;

      // Update uniforms
      material.uniforms.uTime.value = clock.getElapsedTime();
      material.uniforms.uActive.value = THREE.MathUtils.lerp(material.uniforms.uActive.value, isActive ? 1.0 : 0.0, 0.1);

      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    animate();

    // Mouse move handler
    const handleMouseMove = (event: MouseEvent) => {
      if (!sceneRef.current || !canvasRef.current) return;

      const rect = canvasRef.current.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width;
      const y = 1.0 - (event.clientY - rect.top) / rect.height;

      sceneRef.current.mouse.set(x, y);
      sceneRef.current.isActive = true;
      setIsActive(true);
    };

    // Mouse leave handler
    const handleMouseLeave = () => {
      if (!sceneRef.current) return;

      sceneRef.current.mouse.set(-10, -10);
      sceneRef.current.isActive = false;
      setIsActive(false);
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    // Cleanup
    return () => {
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      if (sceneRef.current) {
        sceneRef.current.renderer.dispose();
        sceneRef.current.material.dispose();
        sceneRef.current.mesh.geometry.dispose();
      }
    };
  }, [src, width, height]);

  return (
    <div className={`relative  ${className}`}>
      <canvas ref={canvasRef} className="w-full h-full object-cover cursor-pointer" />
    </div>
  );
}
