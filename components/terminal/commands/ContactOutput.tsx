"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/lib/data";

export function ContactOutput() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="py-3 font-mono text-xs sm:text-sm"
    >
      <p className="text-white font-bold text-sm sm:text-base mb-4">Contact</p>

      <div className="space-y-1.5 mb-5">
        <p>
          <span className="text-[#D2FF70] w-20 inline-block">Email</span>
          <span className="text-gray-600 mx-2">:</span>
          <a href={`mailto:${personalInfo.email}`} className="text-[#5c9eff] hover:underline">
            {personalInfo.email}
          </a>
        </p>
        <p>
          <span className="text-[#D2FF70] w-20 inline-block">Location</span>
          <span className="text-gray-600 mx-2">:</span>
          <span className="text-gray-300">{personalInfo.location}</span>
        </p>
      </div>

      <div className="border-t border-white/5 pt-4">
        <p className="text-gray-500 mb-3">Social links:</p>
        <div className="space-y-1.5 pl-2">
          <p>
            <span className="text-gray-500 w-20 inline-block">GitHub</span>
            <a href={personalInfo.social.github.url} target="_blank" rel="noopener noreferrer" className="text-[#5c9eff] hover:underline">
              @{personalInfo.social.github.handle} ↗
            </a>
          </p>
          <p>
            <span className="text-gray-500 w-20 inline-block">LinkedIn</span>
            <a href={personalInfo.social.linkedin.url} target="_blank" rel="noopener noreferrer" className="text-[#5c9eff] hover:underline">
              @{personalInfo.social.linkedin.handle} ↗
            </a>
          </p>
          <p>
            <span className="text-gray-500 w-20 inline-block">Twitter</span>
            <a href={personalInfo.social.twitter.url} target="_blank" rel="noopener noreferrer" className="text-[#5c9eff] hover:underline">
              {personalInfo.social.twitter.handle} ↗
            </a>
          </p>
        </div>
      </div>
    </motion.div>
  );
}
