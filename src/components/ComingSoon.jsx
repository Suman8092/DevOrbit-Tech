// src/components/ComingSoon.jsx
import { useEffect, useState } from "react";

export default function ComingSoon() {
  const calculateTimeLeft = () => {
    const launchDate = new Date("2025-08-01"); // set your launch date
    const now = new Date();
    const difference = launchDate - now;

    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed inset-0 z-[9999] flex flex-col justify-center items-center bg-gradient-to-br from-[#1a1a1a] via-black to-[#1a1a1a] text-white text-center p-6">
      <div className="animate-pulse text-4xl sm:text-6xl font-bold mb-4 tracking-wide">
        🚀 DevOrbit Tech
      </div>
      <p className="text-gray-300 text-lg mb-8">We’re launching something amazing!</p>
      <div className="flex gap-6 text-xl sm:text-2xl font-mono">
        <div>
          <span className="block text-3xl sm:text-5xl font-bold">{timeLeft.days || 0}</span>
          Days
        </div>
        <div>
          <span className="block text-3xl sm:text-5xl font-bold">{timeLeft.hours || 0}</span>
          Hours
        </div>
        <div>
          <span className="block text-3xl sm:text-5xl font-bold">{timeLeft.minutes || 0}</span>
          Mins
        </div>
        <div>
          <span className="block text-3xl sm:text-5xl font-bold">{timeLeft.seconds || 0}</span>
          Secs
        </div>
      </div>
      <p className="mt-8 text-gray-400 text-sm">Contact: devorbit.technologies@gmail.com</p>
    </div>
  );
}
