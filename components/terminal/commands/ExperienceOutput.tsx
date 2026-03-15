"use client";

import { motion } from "framer-motion";
import { experiences } from "@/lib/data";

export function ExperienceOutput() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="py-3 font-mono text-xs sm:text-sm"
    >
      <p className="text-white font-bold text-sm sm:text-base mb-4">Work Experience</p>

      <div className="space-y-5">
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -5 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.05 }}
            className="border-l-2 border-[#D2FF70]/30 pl-4"
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
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
