"use client";
import AsciiArt from "../AsciiArt";

import TerminalLines from "../TerminalLines";

const ASCII_LINES = [
  "  _  _ ___ _    ___ ",
  " | || | __| |  | _ \\",
  " | __ | _|| |__|  _/",
  " |_||_|___|____|_|  ",
];

const commands = [
  { name: "about", desc: "Learn about me" },
  { name: "skills", desc: "View my technical skills" },
  { name: "projects", desc: "Browse my projects" },
  { name: "experience", desc: "See my work history" },
  { name: "contact", desc: "Get my contact info" },
  { name: "social", desc: "View social links" },
  { name: "clear", desc: "Clear the terminal" },
  { name: "help", desc: "Show this help message" },
];

export function HelpOutput() {
  return (
    <TerminalLines delay={150}>
      <AsciiArt lines={ASCII_LINES} />

      <div className="py-1" />

      <p className="text-gray-500 mb-3 font-mono text-xs sm:text-sm">Available commands:</p>

      {commands.map((cmd) => (
        <div
          key={cmd.name}
          className="flex items-center gap-4 font-mono text-xs sm:text-sm"
        >
          <span className="text-[#D2FF70] w-24 shrink-0">/{cmd.name}</span>
          <span className="text-gray-500">{cmd.desc}</span>
        </div>
      ))}
    </TerminalLines>
  );
}
