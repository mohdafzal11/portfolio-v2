"use client";

import { useRef, useEffect } from "react";
import { TerminalLine } from "./TerminalLine";
import type { TerminalEntry } from "@/hooks/useTerminal";

interface TerminalBodyProps {
  history: TerminalEntry[];
}

export function TerminalBody({ history }: TerminalBodyProps) {
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history.length]);

  return (
    <div className="flex-1 overflow-y-auto terminal-scroll !px-0 !py-6">
      {history.map((entry) => (
        <TerminalLine key={entry.id} entry={entry} />
      ))}
      <div ref={bottomRef} />
    </div>
  );
}
