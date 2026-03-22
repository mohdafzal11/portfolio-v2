"use client";
import AsciiArt from "../AsciiArt";

import TerminalLines from "../TerminalLines";
import { personalInfo } from "@/lib/data";

const ASCII_LINES = [
  "    _   ___  ___  _   _ _____ ",
  "   /_\\ | _ )/ _ \\| | | |_   _|",
  "  / _ \\| _ \\ (_) | |_| | | |  ",
  " /_/ \\_\\___/\\___/ \\___/  |_|  ",
];

export function AboutOutput() {
  return (
    <TerminalLines delay={150}>
      <AsciiArt lines={ASCII_LINES} />

      <div className="py-1" />

      <p className="font-mono text-xs sm:text-sm">
        <span className="text-[#D2FF70] w-20 inline-block">Name</span>
        <span className="text-gray-600 mx-2">:</span>
        <span className="text-gray-300">{personalInfo.name}</span>
      </p>
      <p className="font-mono text-xs sm:text-sm">
        <span className="text-[#D2FF70] w-20 inline-block">Title</span>
        <span className="text-gray-600 mx-2">:</span>
        <span className="text-gray-300">{personalInfo.title}</span>
      </p>
      <p className="font-mono text-xs sm:text-sm">
        <span className="text-[#D2FF70] w-20 inline-block">Location</span>
        <span className="text-gray-600 mx-2">:</span>
        <span className="text-gray-300">{personalInfo.location}</span>
      </p>
      <p className="font-mono text-xs sm:text-sm">
        <span className="text-[#D2FF70] w-20 inline-block">Email</span>
        <span className="text-gray-600 mx-2">:</span>
        <a href={`mailto:${personalInfo.email}`} className="text-[#5c9eff] hover:underline">
          {personalInfo.email}
        </a>
      </p>

      <div className="border-t border-white/5 pt-4 mt-4" />

      {personalInfo.bio.map((paragraph, i) => (
        <p key={i} className="text-gray-400 leading-relaxed font-mono text-xs sm:text-sm mb-2">
          {paragraph}
        </p>
      ))}
    </TerminalLines>
  );
}
