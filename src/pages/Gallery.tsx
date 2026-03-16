import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Play, Image as ImageIcon } from "lucide-react";

const categories = ["All", "Events", "Achievements", "Campus Life", "Celebrations"];

const galleryItems = [
  { id: 1, title: "Annual Day 2024", category: "Events", type: "image" as const },
  { id: 2, title: "Science Fair Winners", category: "Achievements", type: "image" as const },
  { id: 3, title: "School Campus", category: "Campus Life", type: "image" as const },
  { id: 4, title: "Independence Day", category: "Celebrations", type: "image" as const },
  { id: 5, title: "Sports Day", category: "Events", type: "image" as const },
  { id: 6, title: "Art Exhibition", category: "Achievements", type: "image" as const },
  { id: 7, title: "Classroom Activities", category: "Campus Life", type: "image" as const },
  { id: 8, title: "Diwali Celebrations", category: "Celebrations", type: "image" as const },
  { id: 9, title: "School Assembly", category: "Campus Life", type: "video" as const, videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
];

const Gallery = () => {
  const [filter, setFilter] = useState("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = filter === "All" ? galleryItems : galleryItems.filter((i) => i.category === filter);

  return (
    <div>
      <section className="bg-muted py-16 md:py-24 relative overflow-hidden">
        <motion.div className="absolute top-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
        <div className="container max-w-3xl relative">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary tracking-tight text-balance mb-6">Gallery</h1>
            <p className="text-foreground/70 leading-relaxed text-pretty text-lg">
              Glimpses of life at Vignan Public High School.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="container py-16 md:py-24">
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2.5 text-sm font-medium rounded-full transition-all duration-300 ${
                filter === cat
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80 hover:shadow-sm"
              }`}
              whileTap={{ scale: 0.95 }}
            >
              {cat}
            </motion.button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group cursor-pointer"
                onClick={() => setLightbox(item.id)}
              >
                <div className="aspect-[4/3] bg-secondary rounded-xl overflow-hidden shadow-elegant relative hover:shadow-lg transition-shadow duration-300">
                  {item.type === "video" ? (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/5 to-accent/5">
                      <motion.div
                        className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center backdrop-blur-sm border border-primary/10"
                        whileHover={{ scale: 1.15 }}
                      >
                        <Play size={20} className="text-primary ml-0.5" />
                      </motion.div>
                    </div>
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-primary/5 to-accent/5 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                      <ImageIcon size={32} className="text-primary/20" />
                    </div>
                  )}
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300 flex items-end">
                    <div className="w-full p-4 bg-gradient-to-t from-foreground/60 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <p className="text-sm font-medium text-background">{item.title}</p>
                      <p className="text-xs text-background/70">{item.category}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            className="fixed inset-0 z-50 bg-foreground/90 backdrop-blur-sm flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
          >
            <motion.button
              className="absolute top-4 right-4 p-2 rounded-full bg-background/10 text-background hover:bg-background/20 transition-colors"
              onClick={() => setLightbox(null)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <X size={24} />
            </motion.button>
            <motion.div
              className="bg-background rounded-xl overflow-hidden max-w-3xl w-full shadow-2xl"
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            >
              {(() => {
                const item = galleryItems.find((i) => i.id === lightbox);
                if (!item) return null;
                if (item.type === "video" && item.videoUrl) {
                  return (
                    <div className="aspect-video">
                      <iframe src={item.videoUrl} className="w-full h-full" allowFullScreen title={item.title} />
                    </div>
                  );
                }
                return (
                  <div className="aspect-video bg-gradient-to-br from-secondary to-muted flex items-center justify-center">
                    <div className="text-center">
                      <ImageIcon size={48} className="text-primary/20 mx-auto mb-2" />
                      <span className="text-muted-foreground">{item.title}</span>
                    </div>
                  </div>
                );
              })()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;
