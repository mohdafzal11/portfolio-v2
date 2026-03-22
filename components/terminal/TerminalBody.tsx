"use client";

import { useRef, useEffect } from "react";
import { TerminalLine } from "./TerminalLine";
import type { TerminalEntry } from "@/hooks/useTerminal";

interface TerminalBodyProps {
  history: TerminalEntry[];
}

export function TerminalBody({ history }: TerminalBodyProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const userScrolledUp = useRef(false);

  useEffect(() => {
    if (!containerRef.current) return;
    const el = containerRef.current;

    const handleScroll = () => {
      const atBottom = el.scrollHeight - el.scrollTop - el.clientHeight < 50;
      userScrolledUp.current = !atBottom;
    };
    el.addEventListener("scroll", handleScroll);

    const observer = new MutationObserver(() => {
      if (!userScrolledUp.current && el) {
        el.scrollTop = el.scrollHeight;
      }
    });
    observer.observe(el, { childList: true, subtree: true });

    return () => {
      el.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    userScrolledUp.current = false;
  }, [history.length]);

  return (
    <div
      ref={containerRef}
      className="overflow-y-auto overflow-x-hidden flex-1 terminal-scroll"
      style={{ overflowAnchor: "none" }}
    >
      <div className="max-w-[900px] mx-auto w-full px-6 pt-6">
        <div className="flex flex-col">
          {history.map((entry) => (
            <TerminalLine key={entry.id} entry={entry} />
          ))}
          <div className="h-10" />
          <div style={{ overflowAnchor: "auto", height: 1 }} />
        </div>
      </div>
    </div>
  );
}
