"use client";

import { motion } from "framer-motion";
import {
  Code,
  Database,
  BarChart3,
  GitBranch,
  FileCode,
  Server,
} from "lucide-react";

const skills = {
  languages: [
    { name: "Python", icon: Code, color: "text-yellow-400" },
    { name: "R", icon: Code, color: "text-blue-400" },
    { name: "Java", icon: Code, color: "text-orange-400" },
    { name: "SQL", icon: Database, color: "text-cyan-400" },
  ],
  tools: [
    { name: "PowerBI", icon: BarChart3, color: "text-yellow-500" },
    { name: "SAS", icon: BarChart3, color: "text-blue-500" },
    { name: "Google Looker Studio", icon: BarChart3, color: "text-green-500" },
    { name: "GitHub", icon: GitBranch, color: "text-gray-300" },
    { name: "MySQL", icon: Database, color: "text-blue-400" },
    { name: "Oracle", icon: Database, color: "text-red-400" },
    { name: "NoSQL", icon: Database, color: "text-purple-400" },
  ],
};

export default function Skills() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-transparent to-black/20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Technical Skills
          </h2>
          <p className="text-gray-400 text-lg">
            Languages, tools, and technologies I work with
          </p>
        </motion.div>

        {/* Languages Section */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold mb-6 text-gray-300">
            Programming Languages
          </h3>
          <div className="flex flex-wrap gap-4 justify-center">
            {skills.languages.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 200,
                  }}
                  whileHover={{ y: -8, scale: 1.1 }}
                  className="group glass rounded-2xl px-6 py-4 cursor-pointer relative overflow-hidden"
                >
                  <div className="flex items-center gap-3 relative z-10">
                    <Icon className={`w-6 h-6 ${skill.color}`} />
                    <span className="font-semibold text-white">
                      {skill.name}
                    </span>
                  </div>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={false}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Tools Section - Infinite Marquee */}
        <div>
          <h3 className="text-xl font-semibold mb-6 text-gray-300">
            Tools & Technologies
          </h3>
          <div className="relative overflow-hidden">
            <motion.div
              className="flex gap-4"
              animate={{
                x: [0, -50 * skills.tools.length * 2],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 40,
                  ease: "linear",
                },
              }}
            >
              {[...skills.tools, ...skills.tools, ...skills.tools].map(
                (skill, index) => {
                  const Icon = skill.icon;
                  return (
                    <motion.div
                      key={`${skill.name}-${index}`}
                      whileHover={{ y: -8, scale: 1.1 }}
                      className="glass rounded-2xl px-6 py-4 cursor-pointer flex-shrink-0 flex items-center gap-3 group relative overflow-hidden"
                      style={{ minWidth: "200px" }}
                    >
                      <Icon className={`w-6 h-6 ${skill.color}`} />
                      <span className="font-semibold text-white">
                        {skill.name}
                      </span>
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        initial={false}
                      />
                    </motion.div>
                  );
                }
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
