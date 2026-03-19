import { motion } from "framer-motion";
import { Mail, Users, Briefcase, Tag } from "lucide-react";
import { useDataStore } from "@/store/dataStore";

const Faculty = () => {
  const store = useDataStore();

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
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1571260899304-42507611e822?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay opacity-15" />

        <div className="container relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/10 text-white backdrop-blur-md border border-white/20 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6 shadow-xl">
              <Users size={14} className="text-white" />
              Leadership
            </div>
            <h1 className="text-4xl md:text-6xl font-heading font-black text-white tracking-tight mb-6 drop-shadow-lg">
              Our Team
            </h1>
            <p className="text-white/80 leading-relaxed text-lg md:text-xl font-medium drop-shadow-md">
              Meet the dedicated management and academic team behind Vignan Public High School.
            </p>
          </motion.div>
        </div>
        
        {/* Decorative bottom gradient fade to bg-background */}
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent" />
      </section>

      <section className="container py-16 md:py-24 relative">
        <div className="absolute top-20 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-20 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10">
          {store.faculty.length === 0 ? (
            <div className="text-center py-20 bg-card rounded-[2.5rem] border border-primary/5 shadow-sm max-w-2xl mx-auto">
              <div className="w-20 h-20 bg-primary/5 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <Users size={32} />
              </div>
              <h3 className="font-heading font-bold text-2xl text-primary mb-3">Check back later!</h3>
              <p className="text-muted-foreground text-lg">Our faculty directory is currently being updated.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
              {store.faculty.map((member, i) => {
                const initials = member.name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
                return (
                  <motion.div
                    key={member.id}
                    className="bg-card rounded-[2rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-primary/10 relative group isolate"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                    
                    <div className="aspect-[4/3] bg-gradient-to-br from-primary/5 via-primary/10 to-accent/5 flex items-center justify-center overflow-hidden relative shadow-inner">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700" />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                      
                      <motion.div
                        className="w-28 h-28 rounded-full bg-background flex items-center justify-center border-4 border-primary/10 shadow-md group-hover:border-primary/30 transition-colors duration-500 relative z-10"
                        whileHover={{ scale: 1.05 }}
                      >
                        <span className="text-3xl font-heading font-black text-primary/40 group-hover:text-primary/70 transition-colors drop-shadow-sm">{initials}</span>
                      </motion.div>
                    </div>
                    
                    <div className="p-6 md:p-8">
                      <h3 className="font-heading font-bold text-2xl text-foreground group-hover:text-primary transition-colors mb-2">{member.name}</h3>
                      <div className="inline-flex items-center gap-1.5 bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-5">
                        <Briefcase size={12} />
                        {member.role}
                      </div>
                      
                      <div className="space-y-3 mb-6">
                        <div className="flex items-start gap-2.5">
                          <Tag size={16} className="text-primary shrink-0 mt-0.5" />
                          <div>
                            <p className="text-[10px] uppercase font-bold text-muted-foreground tracking-widest">Department</p>
                            <p className="text-sm font-medium text-foreground">{member.department}</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-2.5">
                          <Users size={16} className="text-primary shrink-0 mt-0.5" />
                          <div>
                            <p className="text-[10px] uppercase font-bold text-muted-foreground tracking-widest">Experience</p>
                            <p className="text-sm font-medium text-foreground">{member.experience}</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="pt-4 border-t border-primary/10">
                        <a href="mailto:info@vignanpublichighschool.com" className="inline-flex items-center gap-2 text-sm font-bold text-primary/70 hover:text-primary transition-colors group/mail">
                          <span className="p-1.5 rounded-full bg-primary/10 group-hover/mail:bg-primary group-hover/mail:text-white transition-colors">
                            <Mail size={14} />
                          </span>
                          Contact
                        </a>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Faculty;
