"use client";

import { useEffect, useRef } from "react";

export default function NavigateCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if ("ontouchstart" in window) return;

    const cursor = cursorRef.current;
    if (!cursor) return;

    let mouseX = 0;
    let mouseY = 0;
    let posX = 0;
    let posY = 0;
    let lastX = 0;
    let lastY = 0;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animate = () => {
      posX += (mouseX - posX) * 0.2;
      posY += (mouseY - posY) * 0.2;

      const angle =
        Math.atan2(mouseY - lastY, mouseX - lastX) * (180 / Math.PI);

      cursor.style.transform = `
        translate(${posX}px, ${posY}px)
        rotate(${angle}deg)
      `;

      lastX = mouseX;
      lastY = mouseY;

      requestAnimationFrame(animate);
    };

    document.addEventListener("mousemove", onMouseMove);
    animate();

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="gt-navigate-cursor"
    />
  );
}