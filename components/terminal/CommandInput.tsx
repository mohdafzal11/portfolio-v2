"use client";

import { useRef, useEffect, useState, useCallback, type KeyboardEvent } from "react";
import { COMMANDS } from "@/lib/data";

const allCommands = COMMANDS.filter((c) => c !== "clear" && c !== "whoami");

interface CommandInputProps {
  disabled: boolean;
  onSubmit: (value: string) => void;
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

export function CommandInput({ disabled, onSubmit }: CommandInputProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [inputText, setInputText] = useState("");
  const [highlightIndex, setHighlightIndex] = useState(-1);

  // Close dropdown when clicking outside
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

  const filteredCommands = allCommands.filter(
    (cmd) =>
      inputText === "" ||
      cmd.toLowerCase().includes(inputText.toLowerCase()) ||
      `/${cmd}`.includes(inputText.toLowerCase())
  );

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (!isOpen) {
        setIsOpen(true);
        setHighlightIndex(0);
      } else if (highlightIndex >= 0 && filteredCommands[highlightIndex]) {
        select(filteredCommands[highlightIndex]);
      } else {
        handleSubmit();
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (!isOpen) {
        setIsOpen(true);
        setHighlightIndex(0);
      } else {
        setHighlightIndex((prev) =>
          prev < filteredCommands.length - 1 ? prev + 1 : 0
        );
      }
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (isOpen) {
        setHighlightIndex((prev) => (prev > 0 ? prev - 1 : filteredCommands.length - 1));
      }
    } else if (e.key === "Escape") {
      setIsOpen(false);
    } else if (e.key === "Tab") {
      e.preventDefault();
      if (highlightIndex >= 0 && filteredCommands[highlightIndex]) {
        select(filteredCommands[highlightIndex]);
      }
    }
  };

  // Global Enter handler — opens palette when input not focused
  useEffect(() => {
    const handler = (e: globalThis.KeyboardEvent) => {
      if (disabled) return;
      const isInputFocused = document.activeElement === inputRef.current;
      if (e.key === "Enter" && !isInputFocused) {
        e.preventDefault();
        inputRef.current?.focus();
        setIsOpen(true);
        setHighlightIndex(0);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [disabled]);

  return (
    <div ref={wrapperRef} className="flex-shrink-0 bg-[#1a1a1a] cursor-pointer group rounded-b-lg relative">
      <div style={{ maxWidth: 900, marginLeft: "auto", marginRight: "auto", width: "100%", paddingLeft: 24, paddingRight: 24 }} className="py-2">
        <div className="flex items-center">
          <span
            className="text-[#666] mr-2 cursor-pointer hover:text-[#888] transition-colors"
            onClick={() => {
              setIsOpen((prev) => !prev);
              if (!isOpen) setHighlightIndex(0);
            }}
          >
            &gt;
          </span>
          <span className="inline-block w-[2px] h-4 bg-[#D2FF70] mr-[1px] cursor-blink" />
          <input
            ref={inputRef}
            type="text"
            value={inputText}
            onChange={(e) => {
              setInputText(e.target.value);
              setIsOpen(true);
              setHighlightIndex(0);
            }}
            onFocus={() => {
              setIsOpen(true);
              setHighlightIndex(0);
            }}
            onKeyDown={handleKeyDown}
            disabled={disabled}
            placeholder="Enter command..."
            className="flex-1 bg-transparent border-none outline-none text-[#888] group-hover:text-[#aaa] transition-colors font-mono text-sm"
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="off"
            spellCheck={false}
          />
          <div className="relative ml-3 flex-shrink-0">
            <button
              className="w-7 h-7 rounded-lg bg-[#D2FF70] hover:bg-[#c5f060] transition-colors flex items-center justify-center cursor-pointer disabled:opacity-30"
              disabled={disabled}
              onClick={() => {
                if (inputText.trim()) {
                  handleSubmit();
                } else {
                  setIsOpen((prev) => !prev);
                  if (!isOpen) setHighlightIndex(0);
                }
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 10l-5 5 5 5" />
                <path d="M4 15h11a4 4 0 0 0 4-4V5" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Command Palette Dropdown */}
      {isOpen && !disabled && filteredCommands.length > 0 && (
        <div className="absolute bottom-full right-4 sm:right-6 w-[280px] sm:w-[320px] max-h-[400px] bg-[#252525] border border-[#333] rounded-lg overflow-y-auto mb-1 shadow-2xl shadow-black/60 z-50">
          <div className="px-3 py-2 border-b border-[#333] flex items-center justify-between text-xs text-[#888]">
            <span>Select Command</span>
            <span>↑↓ nav · ↵ select</span>
          </div>
          {filteredCommands.map((cmd, i) => (
            <button
              key={cmd}
              onMouseDown={(e) => {
                e.preventDefault();
                select(cmd);
              }}
              onMouseEnter={() => setHighlightIndex(i)}
              className={`w-full text-left px-3 py-2 text-xs sm:text-sm font-mono flex items-center gap-2 transition-colors ${
                i === highlightIndex
                  ? "bg-[#D2FF70] text-black"
                  : "text-[#aaa] hover:bg-white/5"
              }`}
            >
              <span className={`font-semibold min-w-[20px] ${i === highlightIndex ? "text-black/60" : "text-[#888]"}`}>
                [{i}]
              </span>
              <span className={`min-w-[80px] ${i === highlightIndex ? "text-black/80" : "text-[#888]"}`}>
                /{cmd}
              </span>
              <span className="flex-1">{getCommandHint(cmd)}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
