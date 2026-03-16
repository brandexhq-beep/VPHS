import { motion } from "framer-motion";
import { BookOpen, FlaskConical, Calculator, Code, Brain, Heart, Swords, Palette, ChevronRight } from "lucide-react";
import { useState } from "react";

const programs = [
  {
    title: "Primary School (K–5)",
    description: "A strong foundation in literacy, numeracy, and social skills through interactive and play-based learning.",
    highlights: ["Activity-based learning", "Phonics & storytelling", "Basic computer skills"],
  },
  {
    title: "Middle School (6–8)",
    description: "An expanded curriculum fostering critical thinking, scientific inquiry, and creative expression.",
    highlights: ["Science lab practicals", "Public speaking", "Project-based learning"],
  },
  {
    title: "High School (9–10)",
    description: "Rigorous academic preparation for board examinations with career guidance and life skills training.",
    highlights: ["Board exam prep", "Career counseling", "Advanced labs"],
  },
];

const subjects = [
  { icon: BookOpen, name: "English & Kannada", color: "bg-primary/10" },
  { icon: Calculator, name: "Mathematics", color: "bg-accent/10" },
  { icon: FlaskConical, name: "Science", color: "bg-primary/10" },
  { icon: Brain, name: "Social Studies", color: "bg-accent/10" },
  { icon: Code, name: "Computer Science", color: "bg-primary/10" },
  { icon: Palette, name: "Arts & Crafts", color: "bg-accent/10" },
  { icon: Heart, name: "Yoga & Wellness", color: "bg-primary/10" },
  { icon: Swords, name: "Karate", color: "bg-accent/10" },
];

const Academics = () => {
  const [expanded, setExpanded] = useState<number | null>(0);

  return (
    <div>
      <section className="bg-muted pt-28 md:pt-36 pb-16 md:pb-20 relative overflow-hidden">
        <motion.div className="absolute -bottom-20 -right-20 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
        <div className="container max-w-3xl relative">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary tracking-tight text-balance mb-6">Academics</h1>
            <p className="text-foreground/70 leading-relaxed text-pretty text-lg">
              Our curriculum is designed to nurture intellectual curiosity and build a strong academic foundation from Kindergarten through Class 10.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="container py-16 md:py-24">
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary tracking-tight mb-8">Programs</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {programs.map((p, i) => (
            <motion.div
              key={p.title}
              className="bg-secondary rounded-xl p-6 shadow-elegant cursor-pointer group relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              whileHover={{ y: -6 }}
              onClick={() => setExpanded(expanded === i ? null : i)}
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-500" />
              <h3 className="font-heading font-semibold text-accent mb-3 relative">{p.title}</h3>
              <p className="text-sm text-foreground/70 leading-relaxed mb-4 relative">{p.description}</p>
              <motion.div
                initial={false}
                animate={{ height: expanded === i ? "auto" : 0, opacity: expanded === i ? 1 : 0 }}
                className="overflow-hidden"
              >
                <ul className="space-y-2 pt-2 border-t border-primary/10">
                  {p.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2 text-sm text-foreground/60">
                      <ChevronRight size={14} className="text-accent" />
                      {h}
                    </li>
                  ))}
                </ul>
              </motion.div>
              <button className="text-xs text-accent font-medium mt-2 relative">
                {expanded === i ? "Show less" : "Show more"}
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="bg-muted py-16 md:py-24">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary tracking-tight mb-8">Subjects & Activities</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {subjects.map((s, i) => (
              <motion.div
                key={s.name}
                className="bg-background rounded-xl p-4 shadow-elegant flex items-center gap-4 group hover:shadow-lg transition-all duration-300 cursor-default min-h-[64px]"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                whileHover={{ y: -4 }}
              >
                <div className={`shrink-0 p-2.5 rounded-lg ${s.color} group-hover:scale-110 transition-transform`}>
                  <s.icon size={22} className="text-primary" />
                </div>
                <span className="text-sm font-semibold text-foreground/80 leading-snug">{s.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Academics;
