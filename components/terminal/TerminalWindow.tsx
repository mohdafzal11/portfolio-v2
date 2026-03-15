"use client";

import { TerminalHeader } from "./TerminalHeader";
import { TerminalBody } from "./TerminalBody";
import { CommandInput } from "./CommandInput";
import { useTerminal } from "@/hooks/useTerminal";

export function TerminalWindow() {
  const { history, isProcessing, executeCommand } = useTerminal();

  return (
    <div className="h-[100dvh] w-full bg-[#0A0A0A] flex justify-center">
      <div className="w-full max-w-[960px] flex flex-col h-full">
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
