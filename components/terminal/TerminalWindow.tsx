"use client";

import { TerminalHeader } from "./TerminalHeader";
import { TerminalBody } from "./TerminalBody";
import { CommandInput } from "./CommandInput";
import { useTerminal } from "@/hooks/useTerminal";

export function TerminalWindow() {
  const { history, isProcessing, executeCommand } = useTerminal();

  return (
    <div
      className="min-h-[100dvh] h-[100dvh] w-full max-w-full bg-[#0A0A0A] flex justify-center overflow-hidden"
      style={{
        paddingLeft: "var(--terminal-mobile-pad-x)",
        paddingRight: "var(--terminal-mobile-pad-x)",
        boxSizing: "border-box",
      }}
    >
      <div className="w-full max-w-[960px] flex flex-col h-full min-h-0">
        <TerminalHeader />
        <TerminalBody history={history} />
        <CommandInput
          disabled={isProcessing}
          onSubmit={executeCommand}
        />
      </div>
    </div>
  );
}
