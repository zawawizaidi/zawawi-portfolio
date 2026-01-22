"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ExternalLink, Award, Code, Database } from "lucide-react";
import { useRef } from "react";

interface Project {
  id: number;
  title: string;
  description: string;
  details: string;
  icon: React.ElementType;
  gradient: string;
  award?: string;
  regNumber?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "PLO & CLO Management System",
    description: "Faculty-level dashboard for UTHM",
    details:
      "A faculty-level PLO & CLO management system that is directly integrated with a dashboard, enabling faster review processes and efficient identification of students' educational achievement levels.",
    icon: Database,
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    id: 2,
    title: "Python for Young Data Analysts",
    description: "Copyrighted educational module",
    details:
      "An introductory Python coding module designed to help young data analysts, consisting of six beginner-friendly modules. Registration Number: LY2024M08408",
    icon: Code,
    gradient: "from-purple-500 to-pink-500",
    regNumber: "LY2024M08408",
  },
  {
    id: 3,
    title: "SPD Machine",
    description: "Hygienic Sanitary Pad Dispenser",
    details:
      "Silver Award winner innovation for B40 community in the 3rd Pre-University Matriculation Innovation Competition 2023 (PIITRAM2023). A machine designed to dispense hygienic sanitary pads for the B40 community.",
    icon: Award,
    gradient: "from-orange-500 to-red-500",
    award: "Silver Award - PIITRAM2023",
  },
];

function TiltCard({ project }: { project: Project }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 500, damping: 100 });
  const mouseYSpring = useSpring(y, { stiffness: 500, damping: 100 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7.5deg", "-7.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7.5deg", "7.5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const Icon = project.icon;

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="glass rounded-3xl p-8 cursor-pointer relative overflow-hidden group"
      whileHover={{ scale: 1.02 }}
    >
      {/* Gradient Background */}
      <motion.div
        className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
      />

      {/* Content */}
      <div className="relative z-10" style={{ transform: "translateZ(50px)" }}>
        <div className="flex items-start justify-between mb-6">
          <motion.div
            className={`p-4 rounded-2xl bg-gradient-to-br ${project.gradient} bg-opacity-20`}
            whileHover={{ rotate: 5, scale: 1.1 }}
          >
            <Icon className="w-8 h-8 text-white" />
          </motion.div>
          {project.award && (
            <span className="px-3 py-1 text-xs font-semibold bg-orange-500/20 text-orange-300 rounded-full border border-orange-500/30">
              {project.award}
            </span>
          )}
          {project.regNumber && (
            <span className="px-3 py-1 text-xs font-semibold bg-purple-500/20 text-purple-300 rounded-full border border-purple-500/30">
              Copyrighted
            </span>
          )}
        </div>

        <h3 className="text-2xl font-bold mb-3 text-white">{project.title}</h3>
        <p className="text-indigo-300 font-semibold mb-4">
          {project.description}
        </p>
        <p className="text-gray-400 text-sm leading-relaxed mb-6">
          {project.details}
        </p>

        <motion.button
          className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
          whileHover={{ x: 5 }}
        >
          <span className="text-sm font-semibold">Learn More</span>
          <ExternalLink className="w-4 h-4" />
        </motion.button>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-white/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-400 text-lg">
            Innovative solutions and educational contributions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <TiltCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
