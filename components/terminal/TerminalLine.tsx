"use client";

import type { TerminalEntry } from "@/hooks/useTerminal";

export function TerminalLine({ entry }: { entry: TerminalEntry }) {
  if (entry.type === "system") {
    return (
      <div className="text-xs sm:text-sm py-0.5 font-mono">
        {entry.content}
      </div>
    );
  }

  if (entry.type === "command") {
    return (
      <div className="text-xs sm:text-sm py-1.5 font-mono mt-2">
        <span className="text-[#27C93F]">visitor@afzal</span>
        <span className="text-gray-500">:</span>
        <span className="text-[#5c9eff]">~</span>
        <span className="text-gray-500">$ </span>
        <span className="text-white">{entry.command}</span>
      </div>
    );
  }

  // output
  return (
    <div className="py-1">{entry.content}</div>
  );
}
