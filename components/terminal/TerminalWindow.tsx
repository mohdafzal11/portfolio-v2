"use client";

import { useRef, useEffect } from "react";
import { TerminalLine } from "./TerminalLine";
import { CommandInput } from "./CommandInput";
import { useTerminal } from "@/hooks/useTerminal";

export function TerminalWindow() {
  const { history, isProcessing, executeCommand } = useTerminal();
  const bodyRef = useRef<HTMLDivElement>(null);
  const userScrolledUp = useRef(false);

  // Auto-scroll with MutationObserver
  useEffect(() => {
    if (!bodyRef.current) return;
    const el = bodyRef.current;

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

  // Reset scroll lock on new history
  useEffect(() => {
    userScrolledUp.current = false;
  }, [history.length]);

  return (
    <div className="min-h-[100dvh] h-[100dvh] bg-[#0d0d0d] text-[#d8d8d8] font-mono flex flex-col overflow-hidden p-[10px] text-sm relative">
      <div
        className="flex-1 flex flex-col overflow-hidden overflow-x-hidden bg-[#1a1a1a] border border-[#333] rounded-lg"
        style={{ boxShadow: "rgba(210, 255, 112, 0.06) 0px 0px 50px 15px, rgba(210, 255, 112, 0.03) 0px 0px 100px 50px" }}
      >
        {/* Title Bar */}
        <div className="flex-shrink-0 bg-[#252525] border-b border-[#333] rounded-t-lg">
          <div style={{ maxWidth: 900, marginLeft: "auto", marginRight: "auto", width: "100%", paddingLeft: 24, paddingRight: 24 }} className=" py-2 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
              </div>
              <span className="text-[#888] text-sm ml-2">
                mohd afzal — portfolio-2025
              </span>
            </div>
            <div className="flex items-center gap-4 shrink-0">
              <span className="hidden sm:flex items-center gap-1.5 text-xs font-mono text-[#666]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#27c93f] animate-pulse" />
                online
              </span>
              <a
                href="https://github.com/mohdafzal11"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs font-mono text-[#D2FF70] border border-[#D2FF70]/25 rounded-lg px-3 py-1.5 hover:bg-[#D2FF70]/10 hover:border-[#D2FF70]/40 transition-all"
              >
                <svg className="w-4 h-4 opacity-90" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
                <span className="hidden sm:inline">GitHub</span>
              </a>
            </div>
          </div>
        </div>

        {/* Scrollable Body */}
        <div
          ref={bodyRef}
          className="overflow-y-auto overflow-x-hidden flex-1 terminal-scroll"
          style={{ overflowAnchor: "none" }}
        >
          <div style={{ maxWidth: 900, marginLeft: "auto", marginRight: "auto", width: "100%", paddingLeft: 24, paddingRight: 24 }} className=" pt-6">
            <div className="flex flex-col">
              {history.map((entry) => (
                <TerminalLine key={entry.id} entry={entry} />
              ))}
              <div className="h-10" />
              <div style={{ overflowAnchor: "auto", height: 1 }} />
            </div>
          </div>
        </div>

        {/* Status Bar */}
        <div className="flex-shrink-0 bg-[#1a1a1a] border-t border-[#333]">
          <div style={{ maxWidth: 900, marginLeft: "auto", marginRight: "auto", width: "100%", paddingLeft: 24, paddingRight: 24 }} className=" flex items-center text-[10px] text-[#555] py-0.5">
            <div className="flex items-center gap-3">
              <span>MEM: 48MB</span>
              <span>CPU: 2%</span>
            </div>
            <div className="flex-1" />
            <span>EN</span>
          </div>
        </div>

        {/* Command Input Bar */}
        <CommandInput
          disabled={isProcessing}
          onSubmit={executeCommand}
        />
      </div>
    </div>
  );
}
