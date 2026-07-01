import React, { useState, useEffect } from "react";

export default function CountdownTimer() {
  const targetDate = new Date("2026-07-09T20:00:00-03:00").getTime();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        // Fallback for demo display if target passes
        setTimeLeft({ days: 8, hours: 14, minutes: 23, seconds: 51 });
      }
    };

    calculateTimeLeft();
    const interval = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  const timeBlocks = [
    { value: timeLeft.days, label: "dias" },
    { value: timeLeft.hours, label: "horas" },
    { value: timeLeft.minutes, label: "minutos" },
    { value: timeLeft.seconds, label: "segundos" },
  ];

  return (
    <div className="flex flex-wrap gap-3 sm:gap-4 justify-center md:justify-start" id="countdown-timer">
      {timeBlocks.map((block, idx) => (
        <div
          key={idx}
          className="flex flex-col items-center justify-center w-16 sm:w-20 py-2.5 sm:py-3.5 rounded bg-card-theme shadow-inner"
        >
          <span className="font-mono text-xl sm:text-2xl font-bold text-brand glow tracking-tight">
            {String(block.value).padStart(2, "0")}
          </span>
          <span className="text-[9px] font-mono tracking-widest uppercase text-zinc-500 mt-1">
            {block.label}
          </span>
        </div>
      ))}
    </div>
  );
}
