"use client";
import AsciiArt from "../AsciiArt";

import TerminalLines from "../TerminalLines";

const ASCII_LINES = [
  "  __  __  ___  _  _ ___      _   ___ ____  _   _    ",
  " |  \\/  |/ _ \\| || |   \\    /_\\ | __|_  / /_\\ | |   ",
  " | |\\/| | (_) | __ | |) |  / _ \\| _| / / / _ \\| |__ ",
  " |_|  |_|\\___/|_||_|___/  /_/ \\_\\_| /___/_/ \\_\\____|",
];

export function WelcomeOutput() {
  return (
    <TerminalLines delay={150}>
      <AsciiArt lines={ASCII_LINES} />

      <div className="py-1" />

      <p className="text-gray-400 text-xs sm:text-sm">
        — Software Engineer —
      </p>

      <div className="py-2" />

      <p className="text-[#D2FF70] text-xs sm:text-sm">The focus:</p>

      <p className="pl-2 sm:pl-4 text-gray-400 text-xs sm:text-sm">Building scalable web applications &amp; crypto analytics platforms.</p>
      <p className="pl-2 sm:pl-4 text-gray-400 text-xs sm:text-sm">Shipping AI-powered solutions that solve real problems.</p>
      <p className="pl-2 sm:pl-4 text-gray-400 text-xs sm:text-sm">Full-stack engineering with modern tools.</p>

      <div className="py-2" />

      <div className="pt-3 border-t border-white/5">
        <p className="text-gray-600 text-xs sm:text-sm">
          Type a command or select one from the menu. Try{" "}
          <span className="text-[#D2FF70]">/help</span> to get started.
        </p>
      </div>
    </TerminalLines>
  );
}
