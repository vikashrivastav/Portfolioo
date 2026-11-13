"use client";

import { useEffect, useRef } from "react";

const METERS = [
  { label: "Java & Spring Boot — APIs, JPA, MVC", value: 85 },
  { label: "React.js — components & state", value: 75 },
  { label: "MySQL & SQL — schema, queries, JPA", value: 80 },
  { label: "DSA & OOP — the C-DAC grind", value: 82 },
];

export default function Meters() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const fills = root.querySelectorAll<HTMLElement>(".meter-fill");
    const show = () => fills.forEach((el) => { el.style.width = `${el.dataset.width}%`; });
    if (!("IntersectionObserver" in window) || reduce) { show(); return; }
    const io = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) return;
        io.disconnect();
        show();
      },
      { threshold: 0.35 }
    );
    io.observe(root);
    return () => io.disconnect();
  }, []);

  return (
    <div className="meters" ref={rootRef} aria-label="Skill proficiency">
      {METERS.map((m) => (
        <div className="meter" key={m.label}>
          <label>
            <span>{m.label}</span>
            <output>{m.value}%</output>
          </label>
          <div className="meter-track" role="progressbar" aria-valuenow={m.value} aria-valuemin={0} aria-valuemax={100} aria-label={m.label}>
            <div className="meter-fill" data-width={m.value} />
          </div>
        </div>
      ))}
    </div>
  );
}
