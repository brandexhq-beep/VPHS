import { motion } from "framer-motion";
import { Calendar, ArrowRight, Sparkles } from "lucide-react";
import { useState } from "react";

const events = [
  { title: "Annual Day Celebrations 2025", date: "2025-03-15", description: "A grand celebration of student achievements with cultural performances, awards, and special guest appearances.", upcoming: true },
  { title: "Science Exhibition", date: "2025-02-20", description: "Students showcase innovative science projects and experiments to parents and judges.", upcoming: true },
  { title: "Republic Day Celebration", date: "2025-01-26", description: "Patriotic celebration with flag hoisting, cultural programs, and speeches honoring the nation.", upcoming: false },
  { title: "Sports Day", date: "2025-01-15", description: "Inter-house sports competitions celebrating athleticism, teamwork, and sportsmanship.", upcoming: false },
  { title: "Christmas & New Year Carnival", date: "2024-12-23", description: "Festive celebrations with games, food stalls, and performances by students.", upcoming: false },
  { title: "Children's Day", date: "2024-11-14", description: "Special activities and events organized by teachers to celebrate the spirit of childhood.", upcoming: false },
];

const Events = () => {
  const [showAll, setShowAll] = useState(false);
  const displayed = showAll ? events : events.slice(0, 4);

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
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay opacity-15" />

        <div className="container relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/10 text-white backdrop-blur-md border border-white/20 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6 shadow-xl">
              <Sparkles size={14} className="text-white" />
              School Life
            </div>
            <h1 className="text-4xl md:text-6xl font-heading font-black text-white tracking-tight mb-6 drop-shadow-lg">
              Events & Activities
            </h1>
            <p className="text-white/80 leading-relaxed text-lg md:text-xl font-medium drop-shadow-md">
              Stay updated with the latest happenings, celebrations, and important dates at Vignan Public High School.
            </p>
          </motion.div>
        </div>
        
        {/* Decorative bottom gradient fade to bg-background */}
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent" />
      </section>

      <section className="container py-16 md:py-24 relative">
        <div className="absolute top-40 right-10 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] pointer-events-none -z-10" />
        
        {/* Timeline layout */}
        <div className="max-w-4xl mx-auto relative z-10">
          {/* Vertical line with gradient */}
          <div className="absolute left-[27px] md:left-[50%] top-6 bottom-10 w-1 bg-gradient-to-b from-primary via-accent to-transparent rounded-full shadow-inner opacity-20 hidden sm:block" />

          <div className="space-y-12">
            {displayed.map((event, i) => {
              const date = new Date(event.date);
              const isEven = i % 2 !== 0;

              return (
                <motion.div
                  key={event.title}
                  className={`relative flex flex-col sm:flex-row gap-8 sm:gap-0 ${isEven ? 'sm:flex-row-reverse' : ''}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6, type: "spring", stiffness: 100 }}
                >
                  {/* Timeline dot/icon */}
                  <div className="absolute left-6 sm:left-[50%] top-6 sm:top-1/2 w-14 h-14 translate-x-[-50%] sm:translate-y-[-50%] rounded-2xl bg-card border-4 border-background shadow-lg flex items-center justify-center z-10 hidden sm:flex">
                    {event.upcoming ? (
                      <div className="relative flex items-center justify-center w-full h-full rounded-xl bg-primary/10">
                         <span className="animate-ping absolute inline-flex h-4 w-4 rounded-full bg-primary opacity-60"></span>
                         <Calendar size={20} className="text-primary relative z-10" />
                      </div>
                    ) : (
                      <div className="w-full h-full rounded-xl bg-muted flex items-center justify-center">
                        <Calendar size={20} className="text-muted-foreground" />
                      </div>
                    )}
                  </div>

                  {/* Date Spacer for Desktop */}
                  <div className={`hidden sm:flex flex-1 ${isEven ? 'justify-start pl-16' : 'justify-end pr-16'} items-center`}>
                     <div className={`text-center ${event.upcoming ? 'bg-primary/5 border-primary/20' : 'bg-card border-border'} border rounded-2xl p-4 shadow-sm`}>
                        <p className={`font-black text-3xl ${event.upcoming ? 'text-primary' : 'text-foreground'}`}>{date.getDate()}</p>
                        <p className={`text-xs font-bold uppercase tracking-widest ${event.upcoming ? 'text-accent' : 'text-muted-foreground'}`}>{date.toLocaleDateString("en-IN", { month: "short", year: "numeric" })}</p>
                     </div>
                  </div>

                  {/* Content Card */}
                  <div className={`flex-1 ${isEven ? 'sm:pr-16' : 'sm:pl-16'} relative`}>
                    <div className={`bg-card rounded-[2rem] p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border ${event.upcoming ? "border-primary/20 bg-gradient-to-br from-primary/[0.03] to-transparent" : "border-border/50"} relative overflow-hidden group h-full`}>
                      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700" />
                      
                      {event.upcoming && (
                        <span className="inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest text-emerald-600 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 rounded-full mb-4 shadow-sm">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                          Upcoming
                        </span>
                      )}
                      
                      {/* Mobile Date display */}
                      <div className="sm:hidden flex items-center gap-2 mb-4">
                         <Calendar size={16} className={event.upcoming ? 'text-primary' : 'text-muted-foreground'} />
                         <span className={`text-sm font-bold ${event.upcoming ? 'text-primary' : 'text-muted-foreground'}`}>
                           {date.toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}
                         </span>
                      </div>

                      <h3 className={`font-heading font-black text-2xl mb-3 ${event.upcoming ? 'text-foreground group-hover:text-primary transition-colors' : 'text-foreground/80'}`}>{event.title}</h3>
                      <p className={`text-base leading-relaxed font-medium ${event.upcoming ? 'text-muted-foreground' : 'text-muted-foreground/80'}`}>{event.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {!showAll && events.length > 4 && (
            <motion.div className="flex justify-center mt-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <button
                onClick={() => setShowAll(true)}
                className="inline-flex items-center gap-3 px-8 py-4 bg-primary/10 text-primary font-black rounded-2xl hover:bg-primary hover:text-white transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group border border-primary/20"
              >
                Load More Events <ArrowRight size={20} className="group-hover:translate-x-1.5 transition-transform" />
              </button>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Events;
