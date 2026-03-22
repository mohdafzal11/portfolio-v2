"use client";
import { useState, useEffect, useRef, ReactNode, Children } from "react";

interface TerminalLinesProps {
  children: ReactNode;
  delay?: number;
  onComplete?: () => void;
}

export default function TerminalLines({ children, delay = 300, onComplete }: TerminalLinesProps) {
  const childArray = Children.toArray(children);
  const [visibleCount, setVisibleCount] = useState(0);
  const onCompleteRef = useRef(onComplete);
  onCompleteRef.current = onComplete;

  useEffect(() => {
    if (visibleCount >= childArray.length) {
      onCompleteRef.current?.();
      return;
    }
    const timer = setTimeout(() => {
      setVisibleCount((prev) => prev + 1);
    }, delay);
    return () => clearTimeout(timer);
  }, [visibleCount, childArray.length, delay]);

  return <>{childArray.slice(0, visibleCount)}</>;
}
