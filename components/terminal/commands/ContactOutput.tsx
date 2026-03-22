"use client";
import AsciiArt from "../AsciiArt";

import TerminalLines from "../TerminalLines";
import { personalInfo } from "@/lib/data";

const ASCII_LINES = [
  "   ___ ___  _  _ _____ _   ___ _____ ",
  "  / __/ _ \\| \\| |_   _/_\\ / __|_   _|",
  " | (_| (_) | .` | | |/ _ \\ (__  | |  ",
  "  \\___\\___/|_|\\_| |_/_/ \\_\\___| |_|  ",
];

export function ContactOutput() {
  return (
    <TerminalLines delay={150}>
      <AsciiArt lines={ASCII_LINES} />

      <div className="py-1" />

      <p className="font-mono text-xs sm:text-sm">
        <span className="text-[#D2FF70] w-20 inline-block">Email</span>
        <span className="text-gray-600 mx-2">:</span>
        <a href={`mailto:${personalInfo.email}`} className="text-[#5c9eff] hover:underline">
          {personalInfo.email}
        </a>
      </p>
      <p className="font-mono text-xs sm:text-sm">
        <span className="text-[#D2FF70] w-20 inline-block">Location</span>
        <span className="text-gray-600 mx-2">:</span>
        <span className="text-gray-300">{personalInfo.location}</span>
      </p>

      <div className="border-t border-white/5 pt-4 mt-4" />

      <p className="text-gray-500 mb-3 font-mono text-xs sm:text-sm">Social links:</p>

      <p className="pl-2 font-mono text-xs sm:text-sm">
        <span className="text-gray-500 w-20 inline-block">GitHub</span>
        <a href={personalInfo.social.github.url} target="_blank" rel="noopener noreferrer" className="text-[#5c9eff] hover:underline">
          @{personalInfo.social.github.handle} ↗
        </a>
      </p>
      <p className="pl-2 font-mono text-xs sm:text-sm">
        <span className="text-gray-500 w-20 inline-block">LinkedIn</span>
        <a href={personalInfo.social.linkedin.url} target="_blank" rel="noopener noreferrer" className="text-[#5c9eff] hover:underline">
          @{personalInfo.social.linkedin.handle} ↗
        </a>
      </p>
      <p className="pl-2 font-mono text-xs sm:text-sm">
        <span className="text-gray-500 w-20 inline-block">Twitter</span>
        <a href={personalInfo.social.twitter.url} target="_blank" rel="noopener noreferrer" className="text-[#5c9eff] hover:underline">
          {personalInfo.social.twitter.handle} ↗
        </a>
      </p>
    </TerminalLines>
  );
}
