"use client";
import AsciiArt from "../AsciiArt";

import TerminalLines from "../TerminalLines";
import { experiences } from "@/lib/data";

const ASCII_LINES = [
  "  _____  _____ ___ ___ ___ ___ _  _  ___ ___ ",
  " | __\\ \\/ / _ \\ __| _ \\_ _| __| \\| |/ __| __|",
  " | _| >  <|  _/ _||   /| || _|| .` | (__| _| ",
  " |___/_/\\_\\_| |___|_|_\\___|___|_|\\_|\\___|___|",
];

export function ExperienceOutput() {
  return (
    <TerminalLines delay={150}>
      <AsciiArt lines={ASCII_LINES} />

      <div className="py-1" />

      {experiences.map((exp, i) => (
        <div
          key={i}
          className="border-l-2 border-[#D2FF70]/30 pl-4 mb-4 font-mono text-xs sm:text-sm"
        >
          <p className="text-white font-semibold">
            {exp.title}
            <span className="text-gray-600"> @ </span>
            <span className="text-[#D2FF70]">{exp.company}</span>
          </p>
          <p className="text-gray-600 text-xs mt-0.5">{exp.period}</p>
          <p className="text-gray-400 mt-2 leading-relaxed">{exp.description}</p>
          <div className="flex flex-wrap gap-1.5 mt-2">
            {exp.skills.map((skill) => (
              <span key={skill} className="text-gray-500 text-xs bg-white/5 px-1.5 py-0.5 rounded">
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </TerminalLines>
  );
}
