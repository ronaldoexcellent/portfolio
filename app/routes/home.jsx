import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Download, Code2, Database, Smartphone } from "lucide-react";
import { Skeleton, Card } from "antd";

export function meta() {
  return [
    { title: "Rex | Full-Stack Software Engineer" },
    { name: "description", content: "Portfolio of Rex, Full-Stack Engineer" },
  ];
}

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Simulated Axios fetch for Antd Skeleton demonstration
    setTimeout(() => {
      setProjects([
        {
          id: 1,
          title: "pulseEvent",
          desc: "Full-stack event management & ticketing platform with real-time Socket.IO updates and live QR scanning.",
          tags: ["React", "Node.js", "PostgreSQL", "Socket.IO"]
        },
        {
          id: 2,
          title: "Rex Core Infrastructure",
          desc: "Corporate parent brand architecture managing specialized tech, design, and e-commerce operational units.",
          tags: ["Next.js", "Tailwind", "Vercel"]
        }
      ]);
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 flex flex-col gap-24">
      {/* Hero Section */}
      <motion.section initial="hidden" animate="visible" variants={fadeIn} className="text-center pt-12">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
          Full-Stack Software <span className="text-sky-500">Engineer</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-10">
          Architecting real-time web and mobile applications. From backend PostgreSQL schemas to seamless React frontends.
        </p>
      </motion.section>

      {/* Skills Section */}
      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
        <h2 className="text-3xl font-bold mb-8 text-center">Technical Arsenal</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-xl shadow-sm border border-slate-100 flex flex-col items-center text-center">
            <Code2 className="text-sky-500 mb-4" size={40} />
            <h3 className="font-bold text-lg mb-2">Frontend</h3>
            <p className="text-slate-600">React, Tailwind CSS, Framer Motion</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-sm border border-slate-100 flex flex-col items-center text-center">
            <Database className="text-sky-500 mb-4" size={40} />
            <h3 className="font-bold text-lg mb-2">Backend & DB</h3>
            <p className="text-slate-600">Node.js, Express.js, PostgreSQL, Socket.IO</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-sm border border-slate-100 flex flex-col items-center text-center">
            <Smartphone className="text-sky-500 mb-4" size={40} />
            <h3 className="font-bold text-lg mb-2">Mobile & DevOps</h3>
            <p className="text-slate-600">Capacitor, GitHub Actions, Vercel</p>
          </div>
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
        <h2 className="text-3xl font-bold mb-8 text-center">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {loading ? (
            <>
              <Card className="rounded-xl border-slate-100"><Skeleton active paragraph={{ rows: 3 }} /></Card>
              <Card className="rounded-xl border-slate-100"><Skeleton active paragraph={{ rows: 3 }} /></Card>
            </>
          ) : (
            projects.map(project => (
              <div key={project.id} className="bg-white p-8 rounded-xl shadow-sm border border-slate-100">
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <p className="text-slate-600 mb-6">{project.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-slate-100 text-sm font-medium rounded-full text-slate-700">{tag}</span>
                  ))}
                </div>
              </div>
            ))
          )}
        </div>
      </motion.section>
      
      {/* Download Section */}
      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="bg-slate-900 text-white rounded-2xl p-10 flex flex-col md:flex-row items-center justify-between shadow-xl">
        <div className="mb-6 md:mb-0 max-w-md">
          <h2 className="text-3xl font-bold mb-4">Get the Mobile App</h2>
          <p className="text-slate-300">Experience this portfolio natively on your Android device.</p>
        </div>
        <a href="/downloads/RexPortfolio.apk" download className="flex items-center gap-2 bg-sky-500 text-white px-8 py-4 rounded-xl font-bold hover:bg-sky-400 transition-colors">
          <Download size={24} /> Download APK
        </a>
      </motion.section>
    </div>
  );
}

