import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, FileText, CheckCircle, ClipboardList, Phone, GraduationCap, PenTool } from "lucide-react";
import { useDataStore } from "@/store/dataStore";
import { toast } from "@/hooks/use-toast";

const process = [
  "Visit the school or contact us for an application form",
  "Submit the completed application with required documents",
  "Attend the interaction/assessment session",
  "Receive admission confirmation",
  "Complete fee payment and enrollment",
];

const documents = [
  "Birth Certificate",
  "Transfer Certificate (if applicable)",
  "Report Card / Progress Report",
  "Passport-size photographs (4 nos.)",
  "Aadhar Card of student and parent",
  "Address proof",
];

const eligibility = [
  { grade: "Kindergarten (LKG)", age: "3.5 years as of June 1st" },
  { grade: "Kindergarten (UKG)", age: "4.5 years as of June 1st" },
  { grade: "Class 1", age: "5.5 years as of June 1st" },
  { grade: "Class 2–10", age: "Based on Transfer Certificate and assessment" },
];

const Admissions = () => {
  const [submitted, setSubmitted] = useState(false);
  const store = useDataStore();

  const handleApply = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    store.addAdmission({
      studentName: fd.get('studentName') as string,
      grade: fd.get('grade') as string,
      parentName: fd.get('parentName') as string,
      contact: fd.get('contact') as string,
    });
    setSubmitted(true);
    toast({ title: 'Application Submitted', description: 'We will contact you shortly.' });
    e.currentTarget.reset();
    setTimeout(() => setSubmitted(false), 5000);
  };

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
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1596464716127-f2a82984de30?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay opacity-[0.15]" />

        <div className="container relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/10 text-white backdrop-blur-md border border-white/20 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6 shadow-xl">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
              </span>
              2025-26 Admissions Open
            </div>
            <h1 className="text-4xl md:text-6xl font-heading font-black text-white tracking-tight mb-6 drop-shadow-lg">
              Begin Your Journey
            </h1>
            <p className="text-white/80 leading-relaxed text-lg md:text-xl font-medium drop-shadow-md">
              Join the Vignan family. We welcome students who are eager to learn, explore, and shape a bright future together.
            </p>
          </motion.div>
        </div>
        
        {/* Decorative bottom gradient fade to bg-background */}
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent" />
      </section>

      <section className="container py-16 md:py-24 max-w-4xl space-y-20 relative">
        <div className="absolute top-40 right-[-10%] w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] pointer-events-none -z-10" />
        <div className="absolute bottom-40 left-[-10%] w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px] pointer-events-none -z-10" />

        {/* Process — Simple Clean Steps */}
        <div>
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
              <ClipboardList size={14} /> Step-by-Step Guide
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-black text-foreground">Admission Process</h2>
          </motion.div>

          <div className="space-y-4">
            {[
              { icon: Phone, text: "Visit the school or contact us for an application form" },
              { icon: FileText, text: "Submit the completed application with required documents" },
              { icon: CheckCircle, text: "Attend the interaction/assessment session" },
              { icon: GraduationCap, text: "Receive admission confirmation" },
              { icon: PenTool, text: "Complete fee payment and enrollment" },
            ].map((step, i) => (
              <motion.div
                key={i}
                className="flex items-center gap-5 bg-card rounded-2xl px-6 py-5 border border-primary/10 shadow-sm hover:shadow-md hover:border-primary/20 hover:-translate-y-0.5 transition-all duration-300 group"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <span className="w-9 h-9 shrink-0 rounded-full bg-primary text-white font-black text-base flex items-center justify-center shadow-md shadow-primary/30">
                  {i + 1}
                </span>
                <step.icon size={20} className="text-primary shrink-0 group-hover:scale-110 transition-transform" />
                <p className="text-foreground/80 font-medium text-sm md:text-base leading-relaxed">{step.text}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Documents & Eligibility Container */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-10">
          {/* Documents */}
          <div className="bg-card rounded-[2rem] p-8 shadow-lg border border-primary/10 hover:shadow-xl transition-all duration-300 relative overflow-hidden isolate">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -z-10" />
            <motion.div className="flex items-center gap-4 mb-8" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                <FileText size={24} className="text-primary" />
              </div>
              <h2 className="text-2xl font-heading font-black text-foreground">Documents Required</h2>
            </motion.div>
            <ul className="space-y-4">
              {documents.map((doc, i) => (
                <motion.li
                  key={doc}
                  className="flex items-start gap-3 text-foreground/80 font-medium group bg-background p-4 rounded-2xl border border-primary/5 hover:border-primary/10 shadow-sm"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                >
                  <CheckCircle size={20} className="text-emerald-500 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                  <span className="text-sm">{doc}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Eligibility */}
          <div className="bg-card rounded-[2rem] p-8 shadow-lg border border-primary/10 hover:shadow-xl transition-all duration-300 relative overflow-hidden isolate">
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-3xl -z-10" />
            <motion.div className="flex items-center gap-4 mb-8" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                <GraduationCap size={24} className="text-primary" />
              </div>
              <h2 className="text-2xl font-heading font-black text-foreground">Eligibility</h2>
            </motion.div>
            <div className="space-y-3">
              {eligibility.map((e, i) => (
                <motion.div
                  key={e.grade}
                  className="bg-background rounded-2xl p-4 border border-primary/5 shadow-sm hover:border-primary/10 transition-colors"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                >
                  <p className="font-heading font-bold text-primary mb-1 text-sm md:text-base">{e.grade}</p>
                  <p className="text-foreground/70 text-xs md:text-sm font-medium">{e.age}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Admission Form Section */}
        <div>
          <motion.div className="flex items-center gap-4 mb-8" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
              <PenTool size={28} className="text-primary" />
            </div>
            <h2 className="text-3xl font-heading font-black text-foreground">Apply Online</h2>
          </motion.div>

          <div className="bg-card rounded-[2.5rem] p-8 md:p-12 shadow-2xl border border-primary/10 relative overflow-hidden isolate group">
             {/* Decorative Background Accent */}
             <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10" />
             <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] bg-primary/10 rounded-full blur-[100px] -z-10 group-hover:rotate-12 transition-transform duration-[2s]" />
             
            <form className="space-y-8 relative z-10" onSubmit={handleApply}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground ml-1">Student's Name</label>
                  <input name="studentName" required type="text" className="w-full px-5 py-4 rounded-2xl border border-primary/10 bg-background/50 hover:bg-background focus:bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-body text-sm shadow-sm" placeholder="e.g. Rahul Sharma" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground ml-1">Grade Applied For</label>
                  <select name="grade" required className="w-full px-5 py-4 rounded-2xl border border-primary/10 bg-background/50 hover:bg-background focus:bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-body text-sm text-foreground/90 shadow-sm appearance-none cursor-pointer">
                    <option value="" disabled selected>Select Grade</option>
                    <option value="LKG">LKG</option>
                    <option value="UKG">UKG</option>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(n => <option key={n} value={`Class ${n}`}>Class {n}</option>)}
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground ml-1">Parent's Name</label>
                  <input name="parentName" required type="text" className="w-full px-5 py-4 rounded-2xl border border-primary/10 bg-background/50 hover:bg-background focus:bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-body text-sm shadow-sm" placeholder="e.g. Ramesh Sharma" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground ml-1">Contact Number</label>
                  <input name="contact" required type="tel" className="w-full px-5 py-4 rounded-2xl border border-primary/10 bg-background/50 hover:bg-background focus:bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-body text-sm shadow-sm" placeholder="+91" />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground ml-1">Prior School (if any)</label>
                  <input name="priorSchool" type="text" className="w-full px-5 py-4 rounded-2xl border border-primary/10 bg-background/50 hover:bg-background focus:bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-body text-sm shadow-sm" placeholder="Previous school name" />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground ml-1">Additional Notes / Queries</label>
                  <textarea name="notes" rows={4} className="w-full px-5 py-4 rounded-2xl border border-primary/10 bg-background/50 hover:bg-background focus:bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-body text-sm resize-none shadow-sm" placeholder="Any special requirements or questions..."></textarea>
                </div>
              </div>
              <div className="flex justify-end">
                <button type="submit" disabled={submitted} className="w-full md:w-auto px-10 py-4 bg-primary text-primary-foreground font-black tracking-wide rounded-2xl hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-3 group disabled:opacity-70 disabled:cursor-not-allowed">
                  {submitted ? "Submitted Successfully!" : "Submit Application"} 
                  {!submitted && <ArrowRight size={20} className="group-hover:translate-x-1.5 transition-transform" />}
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Contact CTA */}
        <motion.div
          className="bg-gradient-to-r from-primary to-accent relative rounded-[2rem] p-10 md:p-14 text-center overflow-hidden shadow-2xl border border-white/10 isolate"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          {/* Subtle noise texture */}
          <div className="absolute inset-0 opacity-[0.05] mix-blend-overlay -z-10" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=\"0 0 200 200\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cfilter id=\"noiseFilter\"%3E%3CfeTurbulence type=\"fractalNoise\" baseFrequency=\"0.65\" numOctaves=\"3\" stitchTiles=\"stitch\"/%3E%3C/filter%3E%3Crect width=\"100%25\" height=\"100%25\" filter=\"url(%23noiseFilter)\"/%3E%3C/svg%3E')" }}></div>
          
          <motion.div
            className="absolute -top-32 -left-32 w-80 h-80 rounded-full bg-white/10 blur-3xl -z-10"
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
          />
          <div className="relative z-10">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="p-3 bg-white/10 backdrop-blur-md rounded-full shadow-inner border border-white/20">
                <Phone size={24} className="text-white" />
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-black text-white mb-4 drop-shadow-md">Have Questions?</h2>
            <p className="text-white/90 text-lg md:text-xl font-medium mb-8 max-w-lg mx-auto drop-shadow-sm">
              Contact us at <a href="tel:+919972235286" className="font-bold underline underline-offset-4 hover:text-secondary transition-colors">99722 35286</a> or visit our school campus.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 px-10 py-4 bg-white text-primary font-black rounded-2xl hover:bg-secondary hover:text-secondary-foreground transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 text-lg group"
            >
              Contact Us <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Admissions;
