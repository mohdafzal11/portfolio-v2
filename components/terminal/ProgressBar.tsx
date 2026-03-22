"use client";
import { useState, useEffect, useRef } from "react";

interface ProgressBarProps {
  message: string;
  duration?: number;
  onComplete?: () => void;
}

export default function ProgressBar({ message, duration = 1500, onComplete }: ProgressBarProps) {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<"loading" | "done" | "hidden">("loading");
  const onCompleteRef = useRef(onComplete);
  onCompleteRef.current = onComplete;

  useEffect(() => {
    const steps = 20;
    const interval = duration / steps;
    let current = 0;
    const timer = setInterval(() => {
      current++;
      setProgress(Math.round((current / steps) * 100));
      if (current >= steps) {
        clearInterval(timer);
        setPhase("done");
        setTimeout(() => {
          setPhase("hidden");
          onCompleteRef.current?.();
        }, 600);
      }
    }, interval);
    return () => clearInterval(timer);
  }, [duration]);

  if (phase === "hidden") return null;

  const filled = Math.round((progress / 100) * 30);
  const bar = "\u2588".repeat(filled) + "\u2591".repeat(30 - filled);

  return (
    <div className="my-2 font-mono text-xs sm:text-sm">
      {phase === "done" ? (
        <div><span className="text-[#27c93f]">{"\u2713"}</span> <span className="text-gray-500">Done</span></div>
      ) : (
        <>
          <div className="text-gray-500 mb-1"><span className="text-[#D2FF70]">{"\u2BFF"}</span> {message}</div>
          <div>
            <span className="text-[#D2FF70]">[</span>
            <span className="text-[#D2FF70]">{bar.slice(0, filled)}</span>
            <span className="text-gray-700">{bar.slice(filled)}</span>
            <span className="text-[#D2FF70]">]</span>
            <span className="text-gray-500 ml-2">{progress}%</span>
          </div>
        </>
      )}
    </div>
  );
}
