"use client";

import { useRef, useEffect, useState, useCallback, type KeyboardEvent } from "react";
import { COMMANDS } from "@/lib/data";

const allCommands = COMMANDS.filter((c) => c !== "clear" && c !== "whoami");

interface CommandInputProps {
  disabled: boolean;
  onSubmit: (value: string) => void;
}

function useRotatingPlaceholder() {
  const [text, setText] = useState("");
  const cmdIndex = useRef(0);
  const charIndex = useRef(0);
  const isDeleting = useRef(false);
  const pauseRef = useRef(false);

  useEffect(() => {
    const tick = () => {
      const currentCmd = "/" + allCommands[cmdIndex.current];
      if (pauseRef.current) return;

      if (!isDeleting.current) {
        charIndex.current++;
        setText(currentCmd.slice(0, charIndex.current));
        if (charIndex.current === currentCmd.length) {
          pauseRef.current = true;
          setTimeout(() => {
            pauseRef.current = false;
            isDeleting.current = true;
          }, 1500);
        }
      } else {
        charIndex.current--;
        setText(currentCmd.slice(0, charIndex.current));
        if (charIndex.current === 0) {
          isDeleting.current = false;
          cmdIndex.current = (cmdIndex.current + 1) % allCommands.length;
        }
      }
    };
    const interval = setInterval(tick, isDeleting.current ? 40 : 80);
    return () => clearInterval(interval);
  });

  return text;
}

export function CommandInput({ disabled, onSubmit }: CommandInputProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [inputText, setInputText] = useState("");
  const [highlightIndex, setHighlightIndex] = useState(-1);
  const placeholder = useRotatingPlaceholder();

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const select = useCallback(
    (cmd: string) => {
      setIsOpen(false);
      setHighlightIndex(-1);
      setInputText("");
      onSubmit(cmd);
    },
    [onSubmit]
  );

  const handleSubmit = () => {
    const text = inputText.trim();
    if (!text) return;

    const matchedCmd = allCommands.find(
      (c) => c === text.toLowerCase() || `/${c}` === text.toLowerCase()
    );
    setInputText("");
    onSubmit(matchedCmd ?? text);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (isOpen && highlightIndex >= 0) {
        select(allCommands[highlightIndex]);
      } else {
        handleSubmit();
      }
    } else if (e.key === "ArrowDown" && isOpen) {
      e.preventDefault();
      setHighlightIndex((prev) =>
        prev < allCommands.length - 1 ? prev + 1 : 0
      );
    } else if (e.key === "ArrowUp" && isOpen) {
      e.preventDefault();
      setHighlightIndex((prev) => (prev > 0 ? prev - 1 : allCommands.length - 1));
    } else if (e.key === "Escape") {
      setIsOpen(false);
    } else if (e.key === "Tab") {
      e.preventDefault();
      if (highlightIndex >= 0) {
        select(allCommands[highlightIndex]);
      }
    }
  };

  return (
    <div ref={wrapperRef} className="shrink-0 relative">
      {/* Status bar */}
      <div className="flex items-center justify-between !px-0 !py-3 border-t border-white/[0.06] text-[10px] sm:text-xs text-gray-600 font-mono">
        <div className="flex items-center gap-4">
          <span>MEM: 48MB</span>
          <span>CPU: 2%</span>
        </div>
        <span>EN</span>
      </div>

      {/* Input card + dropdown (dropdown positioned exactly above input) */}
      <div className="!px-0 !pt-4 !pb-5 sm:!pb-6">
        <div className="relative">
          {/* Dropdown — sits exactly above the input row */}
          {isOpen && !disabled && (
            <div className="absolute bottom-full left-0 right-0 mb-6">
              <div className="rounded-lg border border-white/10 bg-[#1a1a1a] overflow-hidden shadow-2xl shadow-black/60 max-h-[280px] overflow-y-auto">
                <div className="!px-2.5 sm:!px-3 !py-1.5 border-b border-white/5">
                  <span className="text-[10px] text-gray-600 uppercase tracking-wider">
                    commands
                  </span>
                </div>
                {allCommands.map((cmd, i) => (
                  <button
                    key={cmd}
                    onMouseDown={(e) => {
                      e.preventDefault();
                      select(cmd);
                    }}
                    onMouseEnter={() => setHighlightIndex(i)}
                    onMouseLeave={() => setHighlightIndex(-1)}
                    className={`w-full text-left !px-2.5 sm:!px-3 !py-1.5 text-xs sm:text-sm font-mono flex items-center gap-2 transition-colors ${
                      i === highlightIndex
                        ? "bg-[#D2FF70]/10 text-[#D2FF70]"
                        : "text-gray-400 hover:bg-white/5 hover:text-gray-300"
                    }`}
                  >
                    <span className={`${i === highlightIndex ? "text-[#D2FF70]" : "text-gray-600"}`}>
                      /
                    </span>
                    <span className="flex-1">{cmd}</span>
                    <span className="text-[10px] text-gray-600">
                      {getCommandHint(cmd)}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Spacer: creates visible gap between dropdown and input when open */}
          {isOpen && !disabled && <div className="h-2 shrink-0" aria-hidden />}

          <div className="flex gap-3 sm:gap-4 items-stretch">
          {/* Main input card */}
          <div
            className="flex-1 rounded-xl border border-white/[0.08] bg-[#141414] overflow-hidden cursor-text"
            onClick={() => {
              inputRef.current?.focus();
              setIsOpen(true);
            }}
          >
            {/* Top row — label */}
            <div className="!px-5 sm:!px-6 !pt-4 !pb-2 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[#D2FF70] shrink-0" />
              <span className="text-[#D2FF70] text-xs sm:text-sm font-mono">
                Ask anything about Afzal&apos;s portfolio
              </span>
            </div>
            {/* Bottom row — input */}
            <div className="!px-5 sm:!px-6 !pb-4 !pt-2 flex items-center gap-3">
              <span className="text-gray-500 text-sm font-mono">&gt;</span>
              <input
                ref={inputRef}
                type="text"
                value={inputText}
                onChange={(e) => {
                  setInputText(e.target.value);
                  setIsOpen(true);
                }}
                onKeyDown={handleKeyDown}
                onFocus={() => setIsOpen(true)}
                disabled={disabled}
                placeholder={`Ask or press Enter... ${placeholder}`}
                className="flex-1 bg-transparent text-gray-300 text-xs sm:text-sm outline-none placeholder:text-gray-600 font-mono min-w-0 py-1"
                autoComplete="off"
                autoCorrect="off"
                autoCapitalize="off"
                spellCheck={false}
              />
              <button
                onMouseDown={(e) => {
                  e.preventDefault();
                  handleSubmit();
                }}
                disabled={disabled || !inputText.trim()}
                className="text-[10px] sm:text-xs text-gray-500 hover:text-[#D2FF70] transition-colors font-mono px-3 py-1.5 rounded-md border border-white/10 hover:border-[#D2FF70]/30 disabled:opacity-30 disabled:cursor-default"
              >
                Ask
              </button>
            </div>
          </div>

          {/* Enter button */}
          <button
            onMouseDown={(e) => {
              e.preventDefault();
              if (inputText.trim()) {
                handleSubmit();
              } else {
                setIsOpen((prev) => !prev);
              }
            }}
            className="shrink-0 w-14 sm:w-16 min-h-[48px] rounded-xl bg-[#D2FF70] flex items-center justify-center hover:bg-[#c5f060] transition-colors active:scale-95"
          >
            <span className="text-black text-xl sm:text-2xl font-medium">↵</span>
          </button>
        </div>
        </div>
      </div>
    </div>
  );
}

function getCommandHint(cmd: string): string {
  switch (cmd) {
    case "help": return "show commands";
    case "about": return "about me";
    case "projects": return "my work";
    case "skills": return "tech stack";
    case "experience": return "work history";
    case "contact": return "reach out";
    case "social": return "links";
    default: return "";
  }
}
