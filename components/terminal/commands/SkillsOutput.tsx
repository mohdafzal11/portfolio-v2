"use client";
import AsciiArt from "../AsciiArt";

import TerminalLines from "../TerminalLines";
import { skills } from "@/lib/data";

const ASCII_LINES = [
  "  ___ _  _____ _    _    ___ ",
  " / __| |/ /_ _| |  | |  / __|",
  " \\__ \\ ' < | || |__| |__\\__ \\",
  " |___/_|\\_\\___|____|____|___/",
];

export function SkillsOutput() {
  return (
    <TerminalLines delay={150}>
      <AsciiArt lines={ASCII_LINES} />

      <div className="py-1" />

      {skills.map((category) => (
        <div key={category.category} className="mb-3">
          <p className="text-[#D2FF70] mb-1.5 font-mono text-xs sm:text-sm">{category.category}</p>
          <div className="pl-2 sm:pl-4 flex flex-wrap gap-2">
            {category.items.map((item) => (
              <span
                key={item}
                className="text-gray-400 bg-white/5 px-2 py-0.5 rounded text-xs"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      ))}
    </TerminalLines>
  );
}
