"use client";

import { motion } from "framer-motion";

const ASCII_NAME = `
 █▀▄▀█ █▀█ █░█ █▀▄   ▄▀█ █▀▀ ▀█ ▄▀█ █░░
 █░▀░█ █▄█ █▀█ █▄▀   █▀█ █▀░ █▄ █▀█ █▄▄
`;

export function WelcomeOutput() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="py-4 font-mono"
    >
      {/* ASCII Art Name */}
      <pre className="text-[#D2FF70] text-[10px] sm:text-sm md:text-base leading-tight whitespace-pre overflow-x-auto max-w-full min-w-0">
        {ASCII_NAME}
      </pre>

      {/* Tagline */}
      <p className="text-gray-400 text-xs sm:text-sm mt-2">
        — Software Engineer —
      </p>

      {/* The thesis / intro */}
      <div className="mt-6">
        <p className="text-[#D2FF70] text-xs sm:text-sm mb-2">The focus:</p>
        <div className="pl-2 sm:pl-4 space-y-1 text-gray-400 text-xs sm:text-sm">
          <p>Building scalable web applications &amp; crypto analytics platforms.</p>
          <p>Shipping AI-powered solutions that solve real problems.</p>
          <p>Full-stack engineering with modern tools.</p>
        </div>
      </div>

      {/* Hint */}
      <div className="mt-6 pt-3 border-t border-white/5">
        <p className="text-gray-600 text-xs sm:text-sm">
          Type a command or select one from the menu. Try{" "}
          <span className="text-[#D2FF70]">/help</span> to get started.
        </p>
      </div>
    </motion.div>
  );
}
