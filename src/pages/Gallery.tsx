import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FolderHeart, Image as ImageIcon, ArrowLeft, Camera, Sparkles, Layers } from "lucide-react";
import { useDataStore } from "@/store/dataStore";

const Gallery = () => {
  const store = useDataStore();
  const [activeFolder, setActiveFolder] = useState<string | null>(null);

  // Group photos into folders. If no active folder, currentPhotos is empty (removing "Other Photos").
  const currentPhotos = activeFolder 
    ? store.gallery.filter(p => p.folderId === activeFolder)
    : [];

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
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay opacity-10" />

        <div className="container relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/10 text-white backdrop-blur-md border border-white/20 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6 shadow-xl">
              <Camera size={14} className="text-white" />
              Campus Life
            </div>
            <h1 className="text-4xl md:text-6xl font-heading font-black text-white tracking-tight mb-6 drop-shadow-lg">
              Our Visual Journey
            </h1>
            <p className="text-white/80 leading-relaxed text-lg md:text-xl font-medium drop-shadow-md">
              A glimpse into the vibrant life, achievements, and cherished memories at Vignan Public High School.
            </p>
          </motion.div>
        </div>
        
        {/* Decorative bottom gradient fade to bg-background */}
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent" />
      </section>

      <section className="container py-16 md:py-24 min-h-[500px] relative">
        {/* Abstract background blobs for gallery section */}
        <div className="absolute top-20 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-20 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10">
          {activeFolder ? (
            <motion.div 
              initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} 
              className="mb-12 flex items-center gap-4 border-b border-primary/10 pb-6"
            >
               <button 
                 onClick={() => setActiveFolder(null)}
                 className="w-12 h-12 rounded-full bg-primary/5 hover:bg-primary/10 flex items-center justify-center text-primary transition-all duration-300 hover:shadow-md hover:-translate-x-1"
               >
                 <ArrowLeft size={20} />
               </button>
               <div>
                 <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
                   {store.galleryFolders.find(f => f.id === activeFolder)?.title}
                 </h2>
                 <p className="text-muted-foreground mt-1 flex items-center gap-2 text-sm font-medium">
                   <Layers size={14} /> {currentPhotos.length} Photos in this album
                 </p>
               </div>
            </motion.div>
          ) : (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-heading font-black text-foreground flex items-center justify-center md:justify-start gap-3">
                <Sparkles className="text-primary" size={28} />
                Gallery Albums
              </h2>
            </motion.div>
          )}

          {/* Render Folders Grid if no active folder */}
          {!activeFolder && (
            store.galleryFolders.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {store.galleryFolders.map((folder, idx) => {
                  const photos = store.gallery.filter(p => p.folderId === folder.id);
                  const coverPhoto = photos.length > 0 ? photos[0].url : null;
                  
                  return (
                    <motion.div 
                      key={folder.id}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1, duration: 0.5 }}
                      className="group cursor-pointer relative"
                      onClick={() => setActiveFolder(folder.id)}
                    >
                      {/* Stacked paper effect behind the main card */}
                      <div className="absolute inset-0 bg-primary/10 rounded-3xl rotate-3 group-hover:rotate-6 transition-transform duration-500 origin-bottom-right shadow-sm" />
                      <div className="absolute inset-0 bg-accent/10 rounded-3xl -rotate-2 group-hover:-rotate-4 transition-transform duration-500 origin-bottom-left shadow-sm" />

                      <div className="relative bg-card rounded-3xl p-3 border border-primary/10 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden isolate">
                        <div className="aspect-[4/3] rounded-2xl bg-secondary/20 overflow-hidden relative shadow-inner flex items-center justify-center mb-4">
                          {coverPhoto ? (
                            <img src={coverPhoto} alt="Folder Cover" className="w-full h-full object-cover group-hover:scale-110 group-hover:rotate-1 transition-all duration-700 ease-out" loading="lazy" />
                          ) : (
                            <FolderHeart className="text-primary/30" size={48} />
                          )}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                          
                          {/* Floating badge for count */}
                          <div className="absolute bottom-3 right-3 bg-white/20 backdrop-blur-md border border-white/30 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg flex items-center gap-1">
                            <Layers size={12} /> {photos.length}
                          </div>
                        </div>
                        <div className="px-2 pb-2">
                          <h3 className="font-heading font-bold text-xl text-foreground group-hover:text-primary transition-colors flex items-center gap-2">
                            {folder.title}
                          </h3>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            ) : (
              <div className="text-center py-24 bg-card rounded-3xl border border-primary/5 shadow-sm max-w-2xl mx-auto">
                <div className="w-20 h-20 bg-primary/5 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <FolderHeart size={32}/>
                </div>
                <h3 className="font-heading font-bold text-2xl text-primary mb-3">No Albums Yet</h3>
                <p className="text-muted-foreground">Check back later for photos of our school events and activities.</p>
              </div>
            )
          )}

          {/* Render Photos if inside a folder */}
          {activeFolder && (
            currentPhotos.length === 0 ? (
              <div className="text-center py-24 bg-card rounded-3xl border border-primary/5 shadow-sm max-w-2xl mx-auto">
                <div className="w-20 h-20 bg-primary/5 text-primary rounded-full flex items-center justify-center mx-auto mb-6 flex-shrink-0">
                  <ImageIcon size={32} />
                </div>
                <h3 className="font-heading font-bold text-2xl text-primary mb-3">Empty Album</h3>
                <p className="text-muted-foreground">There are no photos in this album yet.</p>
              </div>
            ) : (
              <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
                <AnimatePresence>
                  {currentPhotos.map((photo, i) => (
                    <motion.div
                      key={photo.id}
                      initial={{ opacity: 0, scale: 0.9, y: 30 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ delay: i * 0.05, duration: 0.5, type: 'spring' }}
                      className="break-inside-avoid relative rounded-[2rem] overflow-hidden group shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer border border-primary/10"
                    >
                      {photo.url.toLowerCase().endsWith('.mp4') ? (
                        <video
                          src={photo.url}
                          className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                          autoPlay
                          muted
                          loop
                          playsInline
                        />
                      ) : (
                        <img
                          src={photo.url}
                          alt={photo.title}
                          className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                          loading="lazy"
                        />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6 md:p-8">
                        <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                          <p className="text-white font-bold font-heading text-xl mb-1 drop-shadow-md">
                            {photo.title}
                          </p>
                          <div className="w-8 h-1 bg-primary rounded-full" />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            )
          )}
        </div>
      </section>
    </div>
  );
};

export default Gallery;
