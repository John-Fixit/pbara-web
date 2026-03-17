"use client";

import { useEffect, useState } from "react";

interface CountdownTimerProps {
  /** ISO date string or Date of the target event */
  targetDate: string | Date;
  /** Optional label prefix, e.g. "Next Event In:" */
  label?: string;
  className?: string;
}

export function CountdownTimer({
  targetDate,
  label = "Next Event In:",
  className = "",
}: CountdownTimerProps) {
  const [diff, setDiff] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const target = typeof targetDate === "string" ? new Date(targetDate) : targetDate;
    const tick = () => {
      const now = new Date();
      const total = Math.max(0, target.getTime() - now.getTime());
      const days = Math.floor(total / (1000 * 60 * 60 * 24));
      const hours = Math.floor((total % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((total % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((total % (1000 * 60)) / 1000);
      setDiff({ days, hours, minutes, seconds });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [targetDate]);

  if (!mounted) {
    return (
      <div className={className}>
        <span className="text-white/90">{label}</span>{" "}
        <span className="font-heading font-bold text-gold">—</span>
      </div>
    );
  }

  return (
    <div className={`flex flex-wrap items-center gap-2 ${className}`}>
      <span className="text-white/90 text-sm md:text-base">{label}</span>
      <span className="font-heading font-bold text-gold tabular-nums">
        {diff.days} days {diff.hours} hrs {diff.minutes} min {diff.seconds} sec
      </span>
    </div>
  );
}
