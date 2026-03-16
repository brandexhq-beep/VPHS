import { motion } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";
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
    <div>
      <section className="bg-muted pt-28 md:pt-36 pb-16 md:pb-20 relative overflow-hidden">
        <motion.div className="absolute top-10 left-10 w-60 h-60 bg-accent/5 rounded-full blur-3xl" />
        <div className="container max-w-3xl relative">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary tracking-tight text-balance mb-6">Events</h1>
            <p className="text-foreground/70 leading-relaxed text-pretty text-lg">
              Stay updated with the latest happenings at Vignan Public High School.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="container py-16 md:py-24">
        {/* Timeline layout */}
        <div className="max-w-3xl mx-auto relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-primary/10 hidden md:block" />

          <div className="space-y-8">
            {displayed.map((event, i) => (
              <motion.div
                key={event.title}
                className="relative md:pl-16"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-4 top-6 w-5 h-5 rounded-full border-2 border-primary bg-background items-center justify-center">
                  {event.upcoming && (
                    <motion.div
                      className="w-2 h-2 rounded-full bg-primary"
                      animate={{ scale: [1, 1.5, 1] }}
                      transition={{ repeat: Infinity, duration: 2 }}
                    />
                  )}
                </div>

                <div className={`bg-card rounded-xl p-6 shadow-elegant group hover:shadow-lg transition-all duration-300 border ${event.upcoming ? "border-primary/20" : "border-transparent"} relative overflow-hidden`}>
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  {event.upcoming && (
                    <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent/10 px-2 py-0.5 rounded mb-3">
                      Upcoming
                    </span>
                  )}
                  <div className="flex items-center gap-2 text-accent mb-3">
                    <Calendar size={14} />
                    <time className="text-xs font-medium tabular-nums">
                      {new Date(event.date).toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" })}
                    </time>
                  </div>
                  <h3 className="font-heading font-semibold text-primary mb-2 group-hover:text-accent transition-colors">{event.title}</h3>
                  <p className="text-sm text-foreground/60 leading-relaxed">{event.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {!showAll && events.length > 4 && (
            <motion.div className="text-center mt-10" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
              <button
                onClick={() => setShowAll(true)}
                className="inline-flex items-center gap-2 px-6 py-3 bg-secondary text-secondary-foreground font-medium rounded-lg hover:bg-secondary/80 transition-all duration-300 hover:-translate-y-0.5 group"
              >
                View all events <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Events;
