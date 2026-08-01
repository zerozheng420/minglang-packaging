'use client';

import { useRef, useState, type ReactNode, type MouseEvent } from 'react';
import { clsx } from 'clsx';

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  maxTilt?: number;
}

/** Lightweight 3D tilt on hover (uiverse-style). Disabled on touch devices. */
export default function TiltCard({
  children,
  className,
  maxTilt = 5,
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState<React.CSSProperties>({});
  const [hovering, setHovering] = useState(false);

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setStyle({
      transform: `perspective(900px) rotateX(${(-py * maxTilt).toFixed(2)}deg) rotateY(${(px * maxTilt).toFixed(2)}deg) translateY(-4px)`,
    });
  };

  const onLeave = () => {
    setHovering(false);
    setStyle({ transform: 'perspective(900px) rotateX(0deg) rotateY(0deg)' });
  };

  return (
    <div
      ref={ref}
      onMouseMove={(e) => {
        setHovering(true);
        onMove(e);
      }}
      onMouseLeave={onLeave}
      style={style}
      className={clsx(
        'transition-transform duration-200 will-change-transform',
        hovering && 'shadow-2xl shadow-neutral-900/15',
        className,
      )}
    >
      {children}
    </div>
  );
}
