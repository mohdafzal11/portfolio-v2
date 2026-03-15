"use client";

import { motion } from "framer-motion";

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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="py-3 font-mono text-xs sm:text-sm"
    >
      <p className="text-gray-500 mb-3">Available commands:</p>
      <div className="space-y-1.5">
        {commands.map((cmd, i) => (
          <motion.div
            key={cmd.name}
            initial={{ opacity: 0, x: -5 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.03 }}
            className="flex items-center gap-4"
          >
            <span className="text-[#D2FF70] w-24 shrink-0">/{cmd.name}</span>
            <span className="text-gray-500">{cmd.desc}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
