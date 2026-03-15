"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/data";

export function SkillsOutput() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="py-3 font-mono text-xs sm:text-sm"
    >
      <p className="text-white font-bold text-sm sm:text-base mb-4">Technical Stack</p>

      <div className="space-y-4">
        {skills.map((category, i) => (
          <motion.div
            key={category.category}
            initial={{ opacity: 0, x: -5 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.05 }}
          >
            <p className="text-[#D2FF70] mb-1.5">{category.category}</p>
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
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
