"use client";

import { motion } from "framer-motion";
import { Calendar, Award, Users, DollarSign } from "lucide-react";

interface TimelineItem {
  id: number;
  date: string;
  title: string;
  role: string;
  organization: string;
  icon: React.ElementType;
  gradient: string;
}

const timelineItems: TimelineItem[] = [
  {
    id: 1,
    date: "June 2025",
    title: "Director",
    role: "National Data Analytics & Statistics Innovation Community",
    organization: "Toward Success 2025",
    icon: Users,
    gradient: "from-indigo-500 to-purple-500",
  },
  {
    id: 2,
    date: "2024 - 2025",
    title: "President",
    role: "Kelab Mahasiswa Selangor (MASEL)",
    organization: "Universiti Tun Hussein Onn Malaysia",
    icon: Users,
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    id: 3,
    date: "2025",
    title: "Asia Pacific Leadership Ambassador",
    role: "Leadership Summit",
    organization: "International",
    icon: Award,
    gradient: "from-green-500 to-emerald-500",
  },
  {
    id: 4,
    date: "2024 - 2025",
    title: "Treasurer",
    role: "PERMAS Nasional",
    organization: "National Level",
    icon: DollarSign,
    gradient: "from-orange-500 to-red-500",
  },
];

export default function Timeline() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-transparent to-black/20">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Leadership Journey
          </h2>
          <p className="text-gray-400 text-lg">
            Roles and responsibilities in student organizations
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 via-purple-500 to-transparent opacity-30" />

          {/* Timeline Items */}
          <div className="space-y-12">
            {timelineItems.map((item, index) => {
              const Icon = item.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex items-center ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  } flex-row`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 z-10">
                    <motion.div
                      className={`w-4 h-4 rounded-full bg-gradient-to-br ${item.gradient} border-4 border-black`}
                      whileHover={{ scale: 1.5 }}
                    />
                  </div>

                  {/* Content Card */}
                  <div
                    className={`w-full md:w-5/12 ml-20 md:ml-0 ${
                      isEven ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
                    }`}
                  >
                    <motion.div
                      className="glass rounded-2xl p-6 group cursor-pointer relative overflow-hidden"
                      whileHover={{ y: -5, scale: 1.02 }}
                    >
                      {/* Gradient Background */}
                      <motion.div
                        className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                      />

                      <div className="relative z-10">
                        <div className="flex items-center gap-3 mb-3">
                          <motion.div
                            className={`p-2 rounded-xl bg-gradient-to-br ${item.gradient} bg-opacity-20`}
                            whileHover={{ rotate: 5 }}
                          >
                            <Icon className="w-5 h-5 text-white" />
                          </motion.div>
                          <span className="text-sm font-semibold text-indigo-400">
                            {item.date}
                          </span>
                        </div>

                        <h3 className="text-xl font-bold mb-2 text-white">
                          {item.title}
                        </h3>
                        <p className="text-gray-300 font-medium mb-1">
                          {item.role}
                        </p>
                        <p className="text-sm text-gray-400">
                          {item.organization}
                        </p>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
