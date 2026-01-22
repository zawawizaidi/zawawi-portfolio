"use client";

import { motion } from "framer-motion";
import { Award, TrendingUp, Code, BarChart3 } from "lucide-react";

const stats = [
  {
    id: 1,
    title: "CGPA",
    value: "3.48",
    subtitle: "Current Academic Performance",
    icon: Award,
    highlight: true,
    gradient: "from-indigo-500 to-purple-500",
  },
  {
    id: 2,
    title: "Leadership Experience",
    value: "3+ Years",
    subtitle: "Leading Student Organizations",
    icon: TrendingUp,
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    id: 3,
    title: "Specialist In",
    value: "Python, PowerBI & SQL",
    subtitle: "Data Analytics Tools",
    icon: Code,
    gradient: "from-green-500 to-emerald-500",
  },
  {
    id: 4,
    title: "Certified",
    value: "Google Analytics",
    subtitle: "Certification ID: 157961422",
    icon: BarChart3,
    gradient: "from-orange-500 to-red-500",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default function StatsGrid() {
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
            Key Highlights
          </h2>
          <p className="text-gray-400 text-lg">
            Academic excellence, leadership, and technical expertise
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.id}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                className={`relative group glass rounded-3xl p-8 cursor-pointer overflow-hidden ${
                  stat.highlight ? "md:col-span-2 lg:col-span-2" : ""
                }`}
              >
                {/* Gradient Background on Hover */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                />

                {/* Content */}
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <motion.div
                      className={`p-3 rounded-2xl bg-gradient-to-br ${stat.gradient} bg-opacity-20`}
                      whileHover={{ rotate: 5, scale: 1.1 }}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </motion.div>
                    {stat.highlight && (
                      <span className="px-3 py-1 text-xs font-semibold bg-indigo-500/20 text-indigo-300 rounded-full border border-indigo-500/30">
                        Featured
                      </span>
                    )}
                  </div>

                  <motion.div
                    className={`text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}
                    initial={{ scale: 0.8 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, type: "spring" }}
                  >
                    {stat.value}
                  </motion.div>

                  <h3 className="text-xl font-semibold mb-2 text-white">
                    {stat.title}
                  </h3>
                  <p className="text-sm text-gray-400">{stat.subtitle}</p>
                </div>

                {/* Decorative Corner */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
