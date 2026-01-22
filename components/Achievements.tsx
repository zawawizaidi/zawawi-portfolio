"use client";

import { motion } from "framer-motion";
import { Trophy, Award, Star, Medal } from "lucide-react";

interface Achievement {
  id: number;
  title: string;
  year: string;
  icon: React.ElementType;
  gradient: string;
  description?: string;
}

const achievements: Achievement[] = [
  {
    id: 1,
    title: "Top 40 Pacific Academic Speak Up Presenter",
    year: "2025",
    icon: Trophy,
    gradient: "from-yellow-500 to-orange-500",
    description: "Pacific Academic Speak Up 2025",
  },
  {
    id: 2,
    title: "Best Poster - Asean Week",
    year: "2025",
    icon: Award,
    gradient: "from-blue-500 to-cyan-500",
    description: "Roots of Resilience, FPT University, Da Nang Vietnam",
  },
  {
    id: 3,
    title: "Student of Yayasan Bank Rakyat",
    year: "2023 - Present",
    icon: Star,
    gradient: "from-green-500 to-emerald-500",
    description: "Scholarship Recipient",
  },
  {
    id: 4,
    title: "Silver Award - SPD Machine",
    year: "2023",
    icon: Medal,
    gradient: "from-gray-400 to-gray-600",
    description: "3rd Pre-University Matriculation Innovation Competition",
  },
  {
    id: 5,
    title: "Asia Pacific Leadership Ambassador",
    year: "2025",
    icon: Star,
    gradient: "from-purple-500 to-pink-500",
    description: "Leadership Summit 2025",
  },
  {
    id: 6,
    title: "Lencana Ahli Udara Kanan Kelas II",
    year: "2024",
    icon: Medal,
    gradient: "from-indigo-500 to-blue-500",
    description: "Senior Airman Class II - Air Scout",
  },
];

export default function Achievements() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Achievements & Awards
          </h2>
          <p className="text-gray-400 text-lg">
            Recognition for excellence and innovation
          </p>
        </motion.div>

        {/* Horizontal Scroll Container */}
        <div className="overflow-hidden">
          <motion.div
            className="flex gap-6 pb-6"
            drag="x"
            dragConstraints={{ left: -1000, right: 0 }}
            whileDrag={{ cursor: "grabbing" }}
            style={{ cursor: "grab" }}
          >
            {[...achievements, ...achievements].map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <motion.div
                  key={`${achievement.id}-${index}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10, scale: 1.05 }}
                  className="glass rounded-3xl p-8 min-w-[320px] md:min-w-[380px] cursor-pointer group relative overflow-hidden flex-shrink-0"
                >
                  {/* Gradient Background */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${achievement.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                  />

                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-6">
                      <motion.div
                        className={`p-4 rounded-2xl bg-gradient-to-br ${achievement.gradient} bg-opacity-20`}
                        whileHover={{ rotate: 5, scale: 1.1 }}
                      >
                        <Icon className="w-8 h-8 text-white" />
                      </motion.div>
                      <span className="px-3 py-1 text-xs font-semibold bg-white/10 text-gray-300 rounded-full border border-white/20">
                        {achievement.year}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold mb-3 text-white leading-tight">
                      {achievement.title}
                    </h3>
                    {achievement.description && (
                      <p className="text-sm text-gray-400">
                        {achievement.description}
                      </p>
                    )}
                  </div>

                  {/* Decorative Corner */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <p className="text-sm text-gray-500">
            ← Drag or scroll to explore more →
          </p>
        </motion.div>
      </div>
    </section>
  );
}
