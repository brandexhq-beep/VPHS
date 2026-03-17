import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FolderHeart, Image as ImageIcon, ArrowLeft } from "lucide-react";
import { useDataStore } from "@/store/dataStore";

const Gallery = () => {
  const store = useDataStore();
  const [activeFolder, setActiveFolder] = useState<string | null>(null);

  // Group photos into folders
  const currentPhotos = activeFolder 
    ? store.gallery.filter(p => p.folderId === activeFolder)
    : store.gallery.filter(p => !p.folderId);

  return (
    <div>
      <section className="bg-muted pt-28 md:pt-36 pb-16 md:pb-20 relative overflow-hidden">
        <motion.div className="absolute top-0 right-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
        <div className="container relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary tracking-tight text-balance mb-6">Our Gallery</h1>
            <p className="text-foreground/70 leading-relaxed text-pretty text-lg">
              A glimpse into the vibrant life at Vignan Public High School.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="container py-16 md:py-24 min-h-[400px]">
        {activeFolder ? (
          <div className="mb-10 flex items-center gap-4">
             <button 
               onClick={() => setActiveFolder(null)}
               className="w-10 h-10 rounded-full bg-primary/5 hover:bg-primary/10 flex items-center justify-center text-primary transition-colors"
             >
               <ArrowLeft size={18} />
             </button>
             <h2 className="text-3xl font-heading font-bold text-foreground">
               {store.galleryFolders.find(f => f.id === activeFolder)?.title}
             </h2>
          </div>
        ) : (
          <>
            {store.galleryFolders.length > 0 && (
              <div className="mb-12">
                <h2 className="text-2xl font-heading font-bold mb-6 text-foreground">Albums</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {store.galleryFolders.map(folder => {
                    const photos = store.gallery.filter(p => p.folderId === folder.id);
                    const coverPhoto = photos.length > 0 ? photos[0].url : null;
                    
                    return (
                      <motion.div 
                        key={folder.id}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="group cursor-pointer"
                        onClick={() => setActiveFolder(folder.id)}
                      >
                         <div className="aspect-[4/3] rounded-2xl bg-primary/5 border border-primary/10 overflow-hidden relative shadow-sm hover:shadow-lg transition-all mb-3 flex items-center justify-center">
                           {coverPhoto ? (
                             <img src={coverPhoto} alt="Folder Cover" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                           ) : (
                             <FolderHeart className="text-primary/30" size={48} />
                           )}
                           <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                         </div>
                         <h3 className="font-heading font-bold text-lg text-foreground group-hover:text-primary transition-colors">{folder.title}</h3>
                         <p className="text-xs text-muted-foreground font-medium">{photos.length} Photos</p>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            )}
            
            {currentPhotos.length > 0 && <h2 className="text-2xl font-heading font-bold mb-6 text-foreground">Other Photos</h2>}
          </>
        )}

        {currentPhotos.length === 0 ? (
          <div className="text-center py-24 bg-card rounded-3xl border border-primary/5 shadow-sm">
            <div className="w-20 h-20 bg-primary/5 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
              {activeFolder ? <ImageIcon size={32} /> : <FolderHeart size={32}/>}
            </div>
            <h3 className="font-heading font-bold text-2xl text-primary mb-3">No Photos Yet</h3>
            <p className="text-muted-foreground max-w-sm mx-auto">Check back later for photos of our school events and activities.</p>
          </div>
        ) : (
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            <AnimatePresence>
              {currentPhotos.map((photo, i) => (
                <motion.div
                  key={photo.id}
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ delay: i * 0.05, duration: 0.4 }}
                  className="break-inside-avoid relative rounded-2xl overflow-hidden group shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer"
                >
                  <img
                    src={photo.url}
                    alt={photo.title}
                    className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <p className="text-white font-bold font-heading text-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      {photo.title}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}
      </section>
    </div>
  );
};

export default Gallery;
