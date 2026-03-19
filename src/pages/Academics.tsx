import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, FlaskConical, Calculator, Code, Brain, Heart, Swords, Palette, ChevronRight, TrendingUp, ChevronDown, GraduationCap } from "lucide-react";
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
  {
    title: "Geniusphere",
    description: "Our flagship enrichment program that teaches both finance and tech, introducing students to stock markets, financial literacy, and coding.",
    highlights: ["Finance & trading", "Tech & coding", "Live simulations"],
  },
];

const subjects = [
  { icon: BookOpen,    name: "English & Kannada",  color: "bg-primary/10" },
  { icon: Calculator,  name: "Mathematics",         color: "bg-accent/10"  },
  { icon: FlaskConical,name: "Science",             color: "bg-primary/10" },
  { icon: Brain,       name: "Social Studies",      color: "bg-accent/10"  },
  { icon: Code,        name: "Computer Science",    color: "bg-primary/10" },
  { icon: Palette,     name: "Arts & Crafts",       color: "bg-accent/10"  },
  { icon: Heart,       name: "Yoga & Wellness",     color: "bg-primary/10" },
  { icon: Swords,      name: "Karate",              color: "bg-accent/10"  },
];

const extracurricular = [
  {
    icon: TrendingUp,
    name: "Geniusphere",
    description: "Our flagship programme that teaches both finance and tech. It introduces students to stock markets, financial literacy, budgeting, and entrepreneurial thinking alongside coding and tech skills through simulations and guest sessions.",
    color: "bg-emerald-500/10",
    iconColor: "text-emerald-500",
    badge: "Featured",
  },
  {
    icon: Code,
    name: "Code Club",
    description: "Students explore programming, build mini-projects, and develop computational thinking through fun challenges and hackathons.",
    color: "bg-primary/10",
    iconColor: "text-primary",
    badge: null,
  },
  {
    icon: Calculator,
    name: "Abacus",
    description: "Mental arithmetic training using the abacus method to improve concentration, memory, and speed calculation skills.",
    color: "bg-accent/10",
    iconColor: "text-accent",
    badge: null,
  },
  {
    icon: Swords,
    name: "Karate",
    description: "Discipline, self-defence, and physical fitness through structured karate training under certified instructors.",
    color: "bg-primary/10",
    iconColor: "text-primary",
    badge: null,
  },
  {
    icon: Heart,
    name: "Yoga & Wellness",
    description: "Promoting physical and mental well-being through daily yoga, meditation, and mindfulness practices.",
    color: "bg-accent/10",
    iconColor: "text-accent",
    badge: null,
  },
  {
    icon: Palette,
    name: "Arts & Crafts",
    description: "A creative outlet where students express themselves through drawing, painting, clay modelling, and craft projects.",
    color: "bg-primary/10",
    iconColor: "text-primary",
    badge: null,
  },
];

const faqs = [
  {
    q: "What is the medium of instruction at Vignan Public High School?",
    a: "The primary medium of instruction is English. Kannada is taught as a compulsory second language from primary school onwards, ensuring students are proficient in both.",
  },
  {
    q: "What board does the school follow?",
    a: "Vignan Public High School follows the Karnataka State Board syllabus. Classes 9 and 10 prepare students for the SSLC Board Examinations.",
  },
  {
    q: "What is Geniusphere and who can participate?",
    a: "Geniusphere is Vignan's flagship programme that teaches both finance and tech. It introduces students to stock markets, financial literacy, coding, and entrepreneurship through hands-on simulations. Students from Class 6 onwards can participate.",
  },
  {
    q: "What are the school timings?",
    a: "School operates Monday to Saturday. Primary section (K–5) runs from 8:30 AM to 1:30 PM, while the Middle and High School sections (6–10) run from 8:30 AM to 4:00 PM.",
  },
  {
    q: "Are extracurricular activities mandatory?",
    a: "All students are encouraged to participate in at least one extracurricular activity. Some activities like Yoga are integrated into the daily schedule. Karate, Abacus, and Geniusphere are optional but highly recommended.",
  },
  {
    q: "How does the school support students who need extra help?",
    a: "We offer dedicated remedial classes after school hours, one-on-one teacher support, and a student counsellor for emotional and academic guidance. Parents are regularly updated through PTMs and our communication app.",
  },
  {
    q: "What facilities are available for students?",
    a: "The school has a well-equipped Science Lab, Mathematics Lab, Computer Lab (with internet access), a comprehensive Library, a Yoga room, and open sports grounds for physical activities.",
  },
];

const Academics = () => {
  const [expanded, setExpanded] = useState<number | null>(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="bg-background min-h-screen">
      {/* Premium Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-primary isolate">
        {/* Animated Mesh Gradient Background Elements */}
        <div className="absolute inset-0 z-[-1] opacity-40">
          <motion.div
            className="absolute top-[-30%] left-[-10%] w-[60%] h-[160%] bg-accent rounded-full mix-blend-screen filter blur-[120px]"
            animate={{ rotate: 360, scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
          />
          <motion.div
            className="absolute top-[-20%] right-[-10%] w-[50%] h-[150%] bg-secondary rounded-full mix-blend-screen filter blur-[100px]"
            animate={{ rotate: -360, scale: [1, 1.1, 1] }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          />
        </div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2622&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay opacity-[0.15]" />

        <div className="container relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/10 text-white backdrop-blur-md border border-white/20 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6 shadow-xl">
              <GraduationCap size={14} className="text-white" />
              Excellence in Education
            </div>
            <h1 className="text-4xl md:text-6xl font-heading font-black text-white tracking-tight mb-6 drop-shadow-lg">
              Academics
            </h1>
            <p className="text-white/80 leading-relaxed text-lg md:text-xl font-medium drop-shadow-md">
              Our curriculum is designed to nurture intellectual curiosity and build a strong academic foundation from Kindergarten through Class 10.
            </p>
          </motion.div>
        </div>
        
        {/* Decorative bottom gradient fade to bg-background */}
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Programs */}
      <section className="container py-16 md:py-24 relative">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none -z-10" />
        
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-heading font-black text-foreground tracking-tight">Our Programs</h2>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((p, i) => (
            <motion.div
              key={p.title}
              className="bg-card rounded-3xl p-6 md:p-8 shadow-lg hover:shadow-2xl border border-primary/10 cursor-pointer group relative overflow-hidden transition-all duration-500"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              onClick={() => setExpanded(expanded === i ? null : i)}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700" />
              
              <h3 className="font-heading font-bold text-2xl text-foreground group-hover:text-primary transition-colors mb-4 relative z-10">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4 relative z-10 font-medium">{p.description}</p>
              
              <motion.div
                initial={false}
                animate={{ height: expanded === i ? "auto" : 0, opacity: expanded === i ? 1 : 0 }}
                className="overflow-hidden relative z-10"
              >
                <ul className="space-y-3 pt-4 border-t border-primary/10 mb-2">
                  {p.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2 text-sm text-foreground/80 font-medium tracking-tight">
                      <ChevronRight size={16} className="text-primary shrink-0 mt-0.5" />
                      {h}
                    </li>
                  ))}
                </ul>
              </motion.div>
              
              <div className="mt-4 flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-primary relative z-10 group/btn">
                {expanded === i ? "Show less" : "Show more"}
                <ChevronDown size={14} className={`transition-transform duration-300 ${expanded === i ? 'rotate-180' : 'group-hover/btn:translate-y-0.5'}`} />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Subjects */}
      <section className="bg-primary/5 py-16 md:py-24 border-y border-primary/10 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[120px] pointer-events-none -z-10" />
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10 text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-black text-foreground tracking-tight mb-4">Core Subjects</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">A well-rounded academic curriculum building strong fundamentals.</p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {subjects.map((s, i) => (
              <motion.div
                key={s.name}
                className="bg-card rounded-2xl p-5 shadow-sm border border-primary/10 flex flex-col items-center text-center gap-4 group hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-default"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <div className={`shrink-0 p-4 rounded-full ${s.color} group-hover:scale-110 transition-transform duration-500`}>
                  <s.icon size={28} className="text-primary drop-shadow-sm" />
                </div>
                <span className="text-sm md:text-base font-bold text-foreground group-hover:text-primary transition-colors">{s.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Extracurricular Activities */}
      <section className="container py-16 md:py-24 relative">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-heading font-black text-foreground tracking-tight mb-3">Extracurricular Activities</h2>
          <p className="text-muted-foreground text-lg">Beyond books — enriching every student's journey</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {extracurricular.map((item, i) => (
            <motion.div
              key={item.name}
              className="bg-card rounded-[2rem] p-8 border border-primary/10 shadow-lg hover:shadow-2xl transition-all duration-500 group relative overflow-hidden isolate"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
              
              {item.badge && (
                <span className="absolute top-6 right-6 text-[10px] font-black uppercase tracking-widest bg-emerald-500/10 text-emerald-600 border border-emerald-500/20 px-3 py-1.5 rounded-full shadow-sm">
                  {item.badge}
                </span>
              )}
              
              <div className={`w-14 h-14 rounded-2xl ${item.color} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500 shadow-inner`}>
                <item.icon size={24} className={item.iconColor} />
              </div>
              
              <h3 className="font-heading font-bold text-foreground text-2xl mb-3 group-hover:text-primary transition-colors">{item.name}</h3>
              <p className="text-base text-muted-foreground leading-relaxed font-medium">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-primary/5 py-16 md:py-24 border-t border-primary/10">
        <div className="container max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-black text-foreground tracking-tight mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground text-lg">Everything you need to know about academics at Vignan</p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                className="bg-card rounded-[1.5rem] border border-primary/10 shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
              >
                <button
                  className="w-full flex items-center justify-between gap-4 p-6 text-left group"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="font-bold text-foreground text-lg leading-snug group-hover:text-primary transition-colors">
                    {faq.q}
                  </span>
                  <motion.div
                    animate={{ rotate: openFaq === i ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: "backOut" }}
                    className={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 ${openFaq === i ? 'bg-primary text-white shadow-md' : 'bg-primary/10 text-primary group-hover:bg-primary/20'}`}
                  >
                    <ChevronDown size={20} />
                  </motion.div>
                </button>
                <AnimatePresence initial={false}>
                  {openFaq === i && (
                    <motion.div
                      key="answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-2 border-t border-primary/5 mt-2">
                        <p className="text-base text-muted-foreground leading-relaxed font-medium">
                          {faq.a}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Academics;
