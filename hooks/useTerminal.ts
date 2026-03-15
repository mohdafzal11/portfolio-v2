"use client";

import { useReducer, useCallback, useEffect, type ReactNode } from "react";
import { createElement } from "react";
import { COMMANDS } from "@/lib/data";
import { WelcomeOutput } from "@/components/terminal/commands/WelcomeOutput";
import { HelpOutput } from "@/components/terminal/commands/HelpOutput";
import { AboutOutput } from "@/components/terminal/commands/AboutOutput";
import { SkillsOutput } from "@/components/terminal/commands/SkillsOutput";
import { ProjectsOutput } from "@/components/terminal/commands/ProjectsOutput";
import { ExperienceOutput } from "@/components/terminal/commands/ExperienceOutput";
import { ContactOutput } from "@/components/terminal/commands/ContactOutput";

export interface TerminalEntry {
  id: string;
  type: "command" | "output" | "system";
  command?: string;
  content?: ReactNode;
}

interface TerminalState {
  history: TerminalEntry[];
  commandHistory: string[];
  historyIndex: number;
  currentInput: string;
  isProcessing: boolean;
  isInitialized: boolean;
}

type TerminalAction =
  | { type: "SET_INPUT"; payload: string }
  | { type: "ADD_ENTRY"; payload: TerminalEntry }
  | { type: "ADD_ENTRIES"; payload: TerminalEntry[] }
  | { type: "CLEAR" }
  | { type: "NAVIGATE_HISTORY"; direction: "up" | "down" }
  | { type: "SET_PROCESSING"; payload: boolean }
  | { type: "SUBMIT_COMMAND"; command: string; output: ReactNode | null }
  | { type: "SET_INITIALIZED" };

let entryId = 0;
function nextId() {
  return `entry-${++entryId}`;
}

function reducer(state: TerminalState, action: TerminalAction): TerminalState {
  switch (action.type) {
    case "SET_INPUT":
      return { ...state, currentInput: action.payload, historyIndex: -1 };

    case "ADD_ENTRY":
      return { ...state, history: [...state.history, action.payload] };

    case "ADD_ENTRIES":
      return { ...state, history: [...state.history, ...action.payload] };

    case "CLEAR":
      return {
        ...state,
        history: [],
        currentInput: "",
        historyIndex: -1,
      };

    case "NAVIGATE_HISTORY": {
      const { commandHistory, historyIndex } = state;
      if (commandHistory.length === 0) return state;

      let newIndex: number;
      if (action.direction === "up") {
        newIndex = Math.min(historyIndex + 1, commandHistory.length - 1);
      } else {
        newIndex = historyIndex - 1;
      }

      if (newIndex < 0) {
        return { ...state, historyIndex: -1, currentInput: "" };
      }

      return {
        ...state,
        historyIndex: newIndex,
        currentInput: commandHistory[commandHistory.length - 1 - newIndex],
      };
    }

    case "SET_PROCESSING":
      return { ...state, isProcessing: action.payload };

    case "SUBMIT_COMMAND": {
      const entries: TerminalEntry[] = [
        {
          id: nextId(),
          type: "command",
          command: action.command,
        },
      ];

      if (action.output !== null) {
        entries.push({
          id: nextId(),
          type: "output",
          content: action.output,
        });
      }

      return {
        ...state,
        history: [...state.history, ...entries],
        commandHistory: [...state.commandHistory, action.command],
        currentInput: "",
        historyIndex: -1,
      };
    }

    case "SET_INITIALIZED":
      return { ...state, isInitialized: true };

    default:
      return state;
  }
}

function processCommand(cmd: string): ReactNode | null | "CLEAR" {
  const trimmed = cmd.trim().toLowerCase();

  switch (trimmed) {
    case "help":
      return createElement(HelpOutput);
    case "about":
      return createElement(AboutOutput);
    case "skills":
      return createElement(SkillsOutput);
    case "projects":
      return createElement(ProjectsOutput);
    case "experience":
      return createElement(ExperienceOutput);
    case "contact":
      return createElement(ContactOutput);
    case "social":
      return createElement(ContactOutput);
    case "whoami":
      return createElement(
        "p",
        { className: "text-gray-300 my-1 font-mono text-xs sm:text-sm" },
        "Mohd Afzal — Software Engineer — Bengaluru, India"
      );
    case "clear":
      return "CLEAR";
    case "./start.sh":
      return createElement(WelcomeOutput);
    case "":
      return null;
    default:
      return createElement(
        "div",
        { className: "my-1 font-mono text-xs sm:text-sm" },
        createElement(
          "p",
          { className: "text-red-400" },
          `zsh: command not found: ${cmd.trim()}`
        ),
        createElement(
          "p",
          { className: "text-gray-500" },
          "Type 'help' to see available commands."
        )
      );
  }
}

export function useTerminal() {
  const [state, dispatch] = useReducer(reducer, {
    history: [],
    commandHistory: [],
    historyIndex: -1,
    currentInput: "",
    isProcessing: false,
    isInitialized: false,
  });

  // Boot sequence on mount — SSH-style like vibelabs
  useEffect(() => {
    if (state.isInitialized) return;

    dispatch({ type: "SET_PROCESSING", payload: true });

    const bootMessages = [
      { delay: 200, content: "[ssh] connecting to afzal-portfolio.dev" },
      { delay: 600, content: "[ssh] establishing secure connection..." },
      { delay: 1100, content: "[ssh] ████████████████████ 100%" },
      { delay: 1400, content: "[ssh] connection established", color: "text-[#27C93F]" },
      { delay: 1700, content: "[system] node v20.11.0 | next 16.1.0 | bengaluru-in-1" },
      { delay: 2000, content: "[system] loading portfolio data..." },
      { delay: 2400, content: "[system] ✓ ready", color: "text-[#27C93F]" },
    ];

    const timeouts: ReturnType<typeof setTimeout>[] = [];

    bootMessages.forEach(({ delay, content, color }) => {
      const t = setTimeout(() => {
        dispatch({
          type: "ADD_ENTRY",
          payload: {
            id: nextId(),
            type: "system",
            content: createElement(
              "span",
              { className: color || "text-gray-600" },
              content
            ),
          },
        });
      }, delay);
      timeouts.push(t);
    });

    // Command prompt + welcome output
    const t1 = setTimeout(() => {
      dispatch({
        type: "ADD_ENTRY",
        payload: {
          id: nextId(),
          type: "command",
          command: "cat home.md",
        },
      });
    }, 2800);
    timeouts.push(t1);

    const t2 = setTimeout(() => {
      dispatch({
        type: "ADD_ENTRY",
        payload: {
          id: nextId(),
          type: "output",
          content: createElement(WelcomeOutput),
        },
      });
      dispatch({ type: "SET_PROCESSING", payload: false });
      dispatch({ type: "SET_INITIALIZED" });
    }, 3200);
    timeouts.push(t2);

    return () => {
      timeouts.forEach(clearTimeout);
    };
  }, [state.isInitialized]);

  const setInput = useCallback((value: string) => {
    dispatch({ type: "SET_INPUT", payload: value });
  }, []);

  const submitCommand = useCallback((input?: string) => {
    const cmd = (input ?? state.currentInput).trim();
    const result = processCommand(cmd);

    if (result === "CLEAR") {
      dispatch({
        type: "ADD_ENTRY",
        payload: { id: nextId(), type: "command", command: cmd },
      });
      setTimeout(() => dispatch({ type: "CLEAR" }), 100);
      return;
    }

    dispatch({
      type: "SUBMIT_COMMAND",
      command: cmd,
      output: result,
    });
  }, []);

  const navigateHistory = useCallback((direction: "up" | "down") => {
    dispatch({ type: "NAVIGATE_HISTORY", direction });
  }, []);

  const getSuggestion = useCallback(
    (input: string): string => {
      if (!input) return "";
      const lower = input.toLowerCase();
      const match = COMMANDS.find(
        (cmd) => cmd.startsWith(lower) && cmd !== lower
      );
      return match ? match.slice(input.length) : "";
    },
    []
  );

  const executeCommand = useCallback(
    (cmd: string) => {
      submitCommand(cmd);
    },
    [submitCommand]
  );

  return {
    history: state.history,
    currentInput: state.currentInput,
    isProcessing: state.isProcessing,
    setInput,
    submitCommand,
    navigateHistory,
    getSuggestion,
    executeCommand,
  };
}
