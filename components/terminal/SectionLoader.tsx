"use client";
import { useState, ReactNode, Children, useCallback } from "react";
import ProgressBar from "./ProgressBar";
import TerminalLines from "./TerminalLines";

interface SectionLoaderProps {
  children: ReactNode;
  message: string;
  onComplete?: () => void;
  duration?: number;
  promptCount?: number;
}

export default function SectionLoader({ children, message, onComplete, duration = 1200, promptCount = 0 }: SectionLoaderProps) {
  const [phase, setPhase] = useState<"prompt" | "loading" | "content">(promptCount > 0 ? "prompt" : "loading");
  const childArray = Children.toArray(children);
  const promptLines = childArray.slice(0, promptCount);
  const contentLines = childArray.slice(promptCount);

  const handlePromptDone = useCallback(() => setPhase("loading"), []);
  const handleLoadDone = useCallback(() => setPhase("content"), []);

  return (
    <>
      {promptCount > 0 && (
        <TerminalLines onComplete={phase === "prompt" ? handlePromptDone : undefined}>
          {promptLines}
        </TerminalLines>
      )}
      {phase === "loading" && (
        <ProgressBar message={message} duration={duration} onComplete={handleLoadDone} />
      )}
      {phase === "content" && (
        <TerminalLines onComplete={onComplete}>{contentLines}</TerminalLines>
      )}
    </>
  );
}
