"use client";
import AsciiArt from "../AsciiArt";

import TerminalLines from "../TerminalLines";
import { projects } from "@/lib/data";

const ASCII_LINES = [
  "  ___ ___  ___     _ ___ ___ _____ ___ ",
  " | _ \\ _ \\/ _ \\ _ | | __/ __|_   _/ __|",
  " |  _/   / (_) | || | _| (__  | | \\__ \\",
  " |_| |_|_\\\\___/ \\__/|___\\___| |_| |___/",
];

export function ProjectsOutput() {
  return (
    <TerminalLines delay={150}>
      <AsciiArt lines={ASCII_LINES} />

      <div className="py-1" />

      {projects.map((project) => (
        <div
          key={project.title}
          className="group rounded-lg border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] hover:border-[#D2FF70]/20 transition-colors overflow-hidden min-w-0 mb-3"
        >
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block px-4 py-3 sm:px-5 sm:py-3.5"
          >
            <span className="text-white font-semibold text-sm sm:text-base group-hover:text-[#D2FF70] transition-colors font-mono">
              {project.title}
            </span>
            <span className="text-gray-500 ml-1.5 text-xs">↗</span>
            <p className="text-gray-500 mt-2 text-xs sm:text-sm leading-relaxed font-mono">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-1.5 mt-2.5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[#D2FF70]/80 text-[10px] sm:text-xs bg-[#D2FF70]/10 border border-[#D2FF70]/20 px-2 py-0.5 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
          </a>
        </div>
      ))}
    </TerminalLines>
  );
}
