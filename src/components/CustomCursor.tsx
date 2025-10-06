'use client';

import { useEffect, useState, useRef } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const targetPosition = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      targetPosition.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener('mousemove', moveCursor);

    const render = () => {
      setPosition(pos => ({
        x: pos.x + (targetPosition.current.x - pos.x) * 0.2,
        y: pos.y + (targetPosition.current.y - pos.y) * 0.2
      }));
      requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  return (
    <div
      className="w-96 h-96 z-50 bg-emerald-400/20 rounded-full blur-[78.65px]"
      style={{
        position: 'fixed',
        top: position.y,
        left: position.x,
        pointerEvents: 'none',
        transform: 'translate(-50%, -50%)',
        mixBlendMode: 'difference'
      }}
    />
  );
}
