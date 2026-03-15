"use client";

import { motion } from "framer-motion";
import { projects } from "@/lib/data";

export function ProjectsOutput() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="py-2 font-mono"
    >
      <h3 className="text-gray-400 text-xs font-medium uppercase tracking-wider mb-4">
        Projects
      </h3>

      <div className="space-y-4">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.04 }}
            className="group rounded-lg border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] hover:border-[#D2FF70]/20 transition-colors overflow-hidden min-w-0"
          >
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block px-4 py-3 sm:px-5 sm:py-3.5"
            >
              <span className="text-white font-semibold text-sm sm:text-base group-hover:text-[#D2FF70] transition-colors">
                {project.title}
              </span>
              <span className="text-gray-500 ml-1.5 text-xs">↗</span>
              <p className="text-gray-500 mt-2 text-xs sm:text-sm leading-relaxed">
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
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
