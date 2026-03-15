"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/lib/data";

export function AboutOutput() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="py-3 font-mono text-xs sm:text-sm"
    >
      <p className="text-white font-bold text-sm sm:text-base mb-4">About Me</p>

      <div className="space-y-1.5 mb-5">
        <p>
          <span className="text-[#D2FF70] w-20 inline-block">Name</span>
          <span className="text-gray-600 mx-2">:</span>
          <span className="text-gray-300">{personalInfo.name}</span>
        </p>
        <p>
          <span className="text-[#D2FF70] w-20 inline-block">Title</span>
          <span className="text-gray-600 mx-2">:</span>
          <span className="text-gray-300">{personalInfo.title}</span>
        </p>
        <p>
          <span className="text-[#D2FF70] w-20 inline-block">Location</span>
          <span className="text-gray-600 mx-2">:</span>
          <span className="text-gray-300">{personalInfo.location}</span>
        </p>
        <p>
          <span className="text-[#D2FF70] w-20 inline-block">Email</span>
          <span className="text-gray-600 mx-2">:</span>
          <a href={`mailto:${personalInfo.email}`} className="text-[#5c9eff] hover:underline">
            {personalInfo.email}
          </a>
        </p>
      </div>

      <div className="border-t border-white/5 pt-4 space-y-3">
        {personalInfo.bio.map((paragraph, i) => (
          <p key={i} className="text-gray-400 leading-relaxed">
            {paragraph}
          </p>
        ))}
      </div>
    </motion.div>
  );
}
