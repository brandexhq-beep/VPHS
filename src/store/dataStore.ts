import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface Admission {
  id: string;
  date: string;
  studentName: string;
  grade: string;
  parentName: string;
  contact: string;
  status: 'Pending' | 'Reviewed' | 'Admitted';
}

export interface Enquiry {
  id: string;
  name: string;
  email: string;
  phone?: string;
  message: string;
  date: string;
  read: boolean;
}

export interface GalleryFolder {
  id: string;
  title: string;
}

export interface GalleryPhoto {
  id: string;
  url: string;
  title: string;
  folderId?: string;
}

export interface FacultyMember {
  id: string;
  name: string;
  department: string;
  role: string;
  experience: string;
  image?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  text: string;
}

interface DataStore {
  admissions: Admission[];
  addAdmission: (req: Omit<Admission, 'id' | 'date' | 'status'>) => void;
  updateAdmissionStatus: (id: string, status: Admission['status']) => void;
  deleteAdmission: (id: string) => void;

  enquiries: Enquiry[];
  addEnquiry: (req: Omit<Enquiry, 'id' | 'date' | 'read'>) => void;
  markEnquiryRead: (id: string) => void;
  deleteEnquiry: (id: string) => void;

  galleryFolders: GalleryFolder[];
  addGalleryFolder: (title: string) => void;
  deleteGalleryFolder: (id: string) => void;

  gallery: GalleryPhoto[];
  addGalleryPhoto: (photo: Omit<GalleryPhoto, 'id'>) => void;
  deleteGalleryPhoto: (id: string) => void;

  faculty: FacultyMember[];
  addFaculty: (faculty: Omit<FacultyMember, 'id'>) => void;
  deleteFaculty: (id: string) => void;

  testimonials: Testimonial[];
  addTestimonial: (test: Omit<Testimonial, 'id'>) => void;
  deleteTestimonial: (id: string) => void;
}

export const useDataStore = create<DataStore>()(
  persist(
    (set) => ({
      admissions: [
        { id: crypto.randomUUID(), date: "3/15/2026", studentName: "Rahul Sharma", grade: "Class 6", parentName: "Ramesh S", contact: "9988776655", status: "Pending" },
        { id: crypto.randomUUID(), date: "3/16/2026", studentName: "Sneha P", grade: "LKG", parentName: "Priya P", contact: "8899001122", status: "Reviewed" },
        { id: crypto.randomUUID(), date: "3/17/2026", studentName: "Ananya V", grade: "UKG", parentName: "Vikram V", contact: "9900887766", status: "Admitted" }
      ],
      addAdmission: (req) => set((state) => ({
        admissions: [{
          ...req,
          id: crypto.randomUUID(),
          date: new Date().toLocaleDateString(),
          status: 'Pending'
        }, ...state.admissions]
      })),
      updateAdmissionStatus: (id, status) => set((state) => ({
        admissions: state.admissions.map(a => a.id === id ? { ...a, status } : a)
      })),
      deleteAdmission: (id) => set((state) => ({
        admissions: state.admissions.filter(a => a.id !== id)
      })),

      enquiries: [
        { id: crypto.randomUUID(), name: "John Doe", email: "john@example.com", message: "When do the admissions for LKG start?", date: "3/16/2026", phone: "9876543210", read: false },
        { id: crypto.randomUUID(), name: "Sita R", email: "sita@gmail.com", message: "I wanted to inquire about the school bus routes for Chamundi Nagar.", date: "3/17/2026", read: true }
      ],
      addEnquiry: (req) => set((state) => ({
        enquiries: [{
          ...req,
          id: crypto.randomUUID(),
          date: new Date().toLocaleDateString(),
          read: false
        }, ...state.enquiries]
      })),
      markEnquiryRead: (id) => set((state) => ({
        enquiries: state.enquiries.map(e => e.id === id ? { ...e, read: true } : e)
      })),
      deleteEnquiry: (id) => set((state) => ({
        enquiries: state.enquiries.filter(e => e.id !== id)
      })),

      galleryFolders: [
        { id: "folder-1", title: "Geniusphere" },
        { id: "folder-2", title: "Christmas Celebration" },
        { id: "folder-3", title: "Independence Day" },
        { id: "folder-4", title: "Sankranti Celebration" },
        { id: "folder-5", title: "School Trip" },
        { id: "folder-6", title: "Science Exhibition" },
        { id: "folder-7", title: "Annual Day" },
        { id: "folder-8", title: "Sports Day" },
        { id: "folder-9", title: "Diwali Celebrations" },
        { id: "folder-10", title: "Kannada Rajostava" },
        { id: "folder-11", title: "Prathiba Karanji" },
        { id: "folder-12", title: "Red Day" },
        { id: "folder-13", title: "Yoga" },
        { id: "folder-14", title: "Abacus" }
      ],
      addGalleryFolder: (title) => set((state) => ({
        galleryFolders: [{ id: crypto.randomUUID(), title }, ...state.galleryFolders]
      })),
      deleteGalleryFolder: (id) => set((state) => ({
        galleryFolders: state.galleryFolders.filter(f => f.id !== id),
        gallery: state.gallery.filter(g => g.folderId !== id) // Cascade delete
      })),

      gallery: [
        { id: "photo-Geniusphere-1.webp", title: "Geniusphere - 1", url: "/gallery/Geniusphere/1.webp", folderId: "folder-1" },
        { id: "photo-Geniusphere-2.jpg", title: "Geniusphere - 2", url: "/gallery/Geniusphere/2.jpg", folderId: "folder-1" },
        { id: "photo-Geniusphere-3.jpg", title: "Geniusphere - 3", url: "/gallery/Geniusphere/3.jpg", folderId: "folder-1" },
        { id: "photo-Geniusphere-4.jpg", title: "Geniusphere - 4", url: "/gallery/Geniusphere/4.jpg", folderId: "folder-1" },
        { id: "photo-abacus-1.jpeg", title: "Abacus - 1", url: "/gallery/abacus/1.jpeg", folderId: "folder-14" },
        { id: "photo-abacus-2.jpeg", title: "Abacus - 2", url: "/gallery/abacus/2.jpeg", folderId: "folder-14" },
        { id: "photo-abacus-3.jpeg", title: "Abacus - 3", url: "/gallery/abacus/3.jpeg", folderId: "folder-14" },
        { id: "photo-abacus-4.jpeg", title: "Abacus - 4", url: "/gallery/abacus/4.jpeg", folderId: "folder-14" },
        { id: "photo-annual day-1.jpeg", title: "Annual day - 1", url: "/gallery/annual%20day/1.jpeg", folderId: "folder-7" },
        { id: "photo-annual day-2.jpeg", title: "Annual day - 2", url: "/gallery/annual%20day/2.jpeg", folderId: "folder-7" },
        { id: "photo-annual day-3.jpeg", title: "Annual day - 3", url: "/gallery/annual%20day/3.jpeg", folderId: "folder-7" },
        { id: "photo-annual day-4.jpeg", title: "Annual day - 4", url: "/gallery/annual%20day/4.jpeg", folderId: "folder-7" },
        { id: "photo-annual day-5.jpeg", title: "Annual day - 5", url: "/gallery/annual%20day/5.jpeg", folderId: "folder-7" },
        { id: "photo-christmas-1.jpeg", title: "Christmas - 1", url: "/gallery/christmas/1.jpeg", folderId: "folder-2" },
        { id: "photo-christmas-2.jpeg", title: "Christmas - 2", url: "/gallery/christmas/2.jpeg", folderId: "folder-2" },
        { id: "photo-christmas-3.jpeg", title: "Christmas - 3", url: "/gallery/christmas/3.jpeg", folderId: "folder-2" },
        { id: "photo-christmas-4.mp4", title: "Christmas - 4", url: "/gallery/christmas/4.mp4", folderId: "folder-2" },
        { id: "photo-diwali celbrations-1.jpeg", title: "Diwali celbrations - 1", url: "/gallery/diwali%20celbrations/1.jpeg", folderId: "folder-9" },
        { id: "photo-diwali celbrations-2.jpeg", title: "Diwali celbrations - 2", url: "/gallery/diwali%20celbrations/2.jpeg", folderId: "folder-9" },
        { id: "photo-diwali celbrations-3.jpeg", title: "Diwali celbrations - 3", url: "/gallery/diwali%20celbrations/3.jpeg", folderId: "folder-9" },
        { id: "photo-diwali celbrations-4.jpeg", title: "Diwali celbrations - 4", url: "/gallery/diwali%20celbrations/4.jpeg", folderId: "folder-9" },
        { id: "photo-diwali celbrations-5.jpeg", title: "Diwali celbrations - 5", url: "/gallery/diwali%20celbrations/5.jpeg", folderId: "folder-9" },
        { id: "photo-diwali celbrations-6.jpeg", title: "Diwali celbrations - 6", url: "/gallery/diwali%20celbrations/6.jpeg", folderId: "folder-9" },
        { id: "photo-diwali celbrations-7.jpeg", title: "Diwali celbrations - 7", url: "/gallery/diwali%20celbrations/7.jpeg", folderId: "folder-9" },
        { id: "photo-independence day-1.jpg", title: "Independence day - 1", url: "/gallery/independence%20day/1.jpg", folderId: "folder-3" },
        { id: "photo-independence day-2.jpg", title: "Independence day - 2", url: "/gallery/independence%20day/2.jpg", folderId: "folder-3" },
        { id: "photo-independence day-3.jpg", title: "Independence day - 3", url: "/gallery/independence%20day/3.jpg", folderId: "folder-3" },
        { id: "photo-independence day-4.jpeg", title: "Independence day - 4", url: "/gallery/independence%20day/4.jpeg", folderId: "folder-3" },
        { id: "photo-independence day-5.jpeg", title: "Independence day - 5", url: "/gallery/independence%20day/5.jpeg", folderId: "folder-3" },
        { id: "photo-independence day-6.jpeg", title: "Independence day - 6", url: "/gallery/independence%20day/6.jpeg", folderId: "folder-3" },
        { id: "photo-kannada rajostava-1.jpeg", title: "Kannada rajostava - 1", url: "/gallery/kannada%20rajostava/1.jpeg", folderId: "folder-10" },
        { id: "photo-kannada rajostava-2.jpeg", title: "Kannada rajostava - 2", url: "/gallery/kannada%20rajostava/2.jpeg", folderId: "folder-10" },
        { id: "photo-kannada rajostava-3.jpeg", title: "Kannada rajostava - 3", url: "/gallery/kannada%20rajostava/3.jpeg", folderId: "folder-10" },
        { id: "photo-kannada rajostava-4.jpeg", title: "Kannada rajostava - 4", url: "/gallery/kannada%20rajostava/4.jpeg", folderId: "folder-10" },
        { id: "photo-kannada rajostava-5.jpeg", title: "Kannada rajostava - 5", url: "/gallery/kannada%20rajostava/5.jpeg", folderId: "folder-10" },
        { id: "photo-kannada rajostava-6.jpeg", title: "Kannada rajostava - 6", url: "/gallery/kannada%20rajostava/6.jpeg", folderId: "folder-10" },
        { id: "photo-kannada rajostava-7.jpeg", title: "Kannada rajostava - 7", url: "/gallery/kannada%20rajostava/7.jpeg", folderId: "folder-10" },
        { id: "photo-kannada rajostava-8.jpeg", title: "Kannada rajostava - 8", url: "/gallery/kannada%20rajostava/8.jpeg", folderId: "folder-10" },
        { id: "photo-prathiba karanji-1.jpeg", title: "Prathiba karanji - 1", url: "/gallery/prathiba%20karanji/1.jpeg", folderId: "folder-11" },
        { id: "photo-prathiba karanji-2.jpeg", title: "Prathiba karanji - 2", url: "/gallery/prathiba%20karanji/2.jpeg", folderId: "folder-11" },
        { id: "photo-prathiba karanji-3.jpeg", title: "Prathiba karanji - 3", url: "/gallery/prathiba%20karanji/3.jpeg", folderId: "folder-11" },
        { id: "photo-prathiba karanji-4.jpeg", title: "Prathiba karanji - 4", url: "/gallery/prathiba%20karanji/4.jpeg", folderId: "folder-11" },
        { id: "photo-prathiba karanji-5.jpeg", title: "Prathiba karanji - 5", url: "/gallery/prathiba%20karanji/5.jpeg", folderId: "folder-11" },
        { id: "photo-prathiba karanji-6.jpeg", title: "Prathiba karanji - 6", url: "/gallery/prathiba%20karanji/6.jpeg", folderId: "folder-11" },
        { id: "photo-prathiba karanji-7.jpeg", title: "Prathiba karanji - 7", url: "/gallery/prathiba%20karanji/7.jpeg", folderId: "folder-11" },
        { id: "photo-prathiba karanji-8.jpeg", title: "Prathiba karanji - 8", url: "/gallery/prathiba%20karanji/8.jpeg", folderId: "folder-11" },
        { id: "photo-prathiba karanji-9.jpeg", title: "Prathiba karanji - 9", url: "/gallery/prathiba%20karanji/9.jpeg", folderId: "folder-11" },
        { id: "photo-red day-1.jpeg", title: "Red day - 1", url: "/gallery/red%20day/1.jpeg", folderId: "folder-12" },
        { id: "photo-red day-2.jpeg", title: "Red day - 2", url: "/gallery/red%20day/2.jpeg", folderId: "folder-12" },
        { id: "photo-red day-3.jpeg", title: "Red day - 3", url: "/gallery/red%20day/3.jpeg", folderId: "folder-12" },
        { id: "photo-red day-4.jpeg", title: "Red day - 4", url: "/gallery/red%20day/4.jpeg", folderId: "folder-12" },
        { id: "photo-sankrathi celebaration-1.jpeg", title: "Sankrathi celebaration - 1", url: "/gallery/sankrathi%20celebaration/1.jpeg", folderId: "folder-4" },
        { id: "photo-sankrathi celebaration-2.jpeg", title: "Sankrathi celebaration - 2", url: "/gallery/sankrathi%20celebaration/2.jpeg", folderId: "folder-4" },
        { id: "photo-sankrathi celebaration-3.jpeg", title: "Sankrathi celebaration - 3", url: "/gallery/sankrathi%20celebaration/3.jpeg", folderId: "folder-4" },
        { id: "photo-sankrathi celebaration-4.jpeg", title: "Sankrathi celebaration - 4", url: "/gallery/sankrathi%20celebaration/4.jpeg", folderId: "folder-4" },
        { id: "photo-sankrathi celebaration-5.jpeg", title: "Sankrathi celebaration - 5", url: "/gallery/sankrathi%20celebaration/5.jpeg", folderId: "folder-4" },
        { id: "photo-sankrathi celebaration-6.jpeg", title: "Sankrathi celebaration - 6", url: "/gallery/sankrathi%20celebaration/6.jpeg", folderId: "folder-4" },
        { id: "photo-science exhibiton-1.jpeg", title: "Science exhibiton - 1", url: "/gallery/science%20exhibiton/1.jpeg", folderId: "folder-6" },
        { id: "photo-science exhibiton-2.jpeg", title: "Science exhibiton - 2", url: "/gallery/science%20exhibiton/2.jpeg", folderId: "folder-6" },
        { id: "photo-science exhibiton-3.jpeg", title: "Science exhibiton - 3", url: "/gallery/science%20exhibiton/3.jpeg", folderId: "folder-6" },
        { id: "photo-science exhibiton-4.jpeg", title: "Science exhibiton - 4", url: "/gallery/science%20exhibiton/4.jpeg", folderId: "folder-6" },
        { id: "photo-science exhibiton-5.jpeg", title: "Science exhibiton - 5", url: "/gallery/science%20exhibiton/5.jpeg", folderId: "folder-6" },
        { id: "photo-sports day-1.jpeg", title: "Sports day - 1", url: "/gallery/sports%20day/1.jpeg", folderId: "folder-8" },
        { id: "photo-sports day-10.jpeg", title: "Sports day - 10", url: "/gallery/sports%20day/10.jpeg", folderId: "folder-8" },
        { id: "photo-sports day-11.jpeg", title: "Sports day - 11", url: "/gallery/sports%20day/11.jpeg", folderId: "folder-8" },
        { id: "photo-sports day-12.jpeg", title: "Sports day - 12", url: "/gallery/sports%20day/12.jpeg", folderId: "folder-8" },
        { id: "photo-sports day-13.jpeg", title: "Sports day - 13", url: "/gallery/sports%20day/13.jpeg", folderId: "folder-8" },
        { id: "photo-sports day-14.jpeg", title: "Sports day - 14", url: "/gallery/sports%20day/14.jpeg", folderId: "folder-8" },
        { id: "photo-sports day-15.jpeg", title: "Sports day - 15", url: "/gallery/sports%20day/15.jpeg", folderId: "folder-8" },
        { id: "photo-sports day-2.jpeg", title: "Sports day - 2", url: "/gallery/sports%20day/2.jpeg", folderId: "folder-8" },
        { id: "photo-sports day-3.jpeg", title: "Sports day - 3", url: "/gallery/sports%20day/3.jpeg", folderId: "folder-8" },
        { id: "photo-sports day-4.jpeg", title: "Sports day - 4", url: "/gallery/sports%20day/4.jpeg", folderId: "folder-8" },
        { id: "photo-sports day-5.jpeg", title: "Sports day - 5", url: "/gallery/sports%20day/5.jpeg", folderId: "folder-8" },
        { id: "photo-sports day-6.jpeg", title: "Sports day - 6", url: "/gallery/sports%20day/6.jpeg", folderId: "folder-8" },
        { id: "photo-sports day-7.jpeg", title: "Sports day - 7", url: "/gallery/sports%20day/7.jpeg", folderId: "folder-8" },
        { id: "photo-sports day-8.jpeg", title: "Sports day - 8", url: "/gallery/sports%20day/8.jpeg", folderId: "folder-8" },
        { id: "photo-sports day-9.jpeg", title: "Sports day - 9", url: "/gallery/sports%20day/9.jpeg", folderId: "folder-8" },
        { id: "photo-trip-1.jpeg", title: "Trip - 1", url: "/gallery/trip/1.jpeg", folderId: "folder-5" },
        { id: "photo-trip-2.jpeg", title: "Trip - 2", url: "/gallery/trip/2.jpeg", folderId: "folder-5" },
        { id: "photo-trip-3.jpeg", title: "Trip - 3", url: "/gallery/trip/3.jpeg", folderId: "folder-5" },
        { id: "photo-trip-4.jpeg", title: "Trip - 4", url: "/gallery/trip/4.jpeg", folderId: "folder-5" },
        { id: "photo-trip-5.jpeg", title: "Trip - 5", url: "/gallery/trip/5.jpeg", folderId: "folder-5" },
        { id: "photo-trip-6.jpeg", title: "Trip - 6", url: "/gallery/trip/6.jpeg", folderId: "folder-5" },
        { id: "photo-trip-7.jpeg", title: "Trip - 7", url: "/gallery/trip/7.jpeg", folderId: "folder-5" },
        { id: "photo-trip-8.jpeg", title: "Trip - 8", url: "/gallery/trip/8.jpeg", folderId: "folder-5" },
        { id: "photo-trip-9.jpeg", title: "Trip - 9", url: "/gallery/trip/9.jpeg", folderId: "folder-5" },
        { id: "photo-yoga-1.jpeg", title: "Yoga - 1", url: "/gallery/yoga/1.jpeg", folderId: "folder-13" },
        { id: "photo-yoga-2.jpeg", title: "Yoga - 2", url: "/gallery/yoga/2.jpeg", folderId: "folder-13" },
        { id: "photo-yoga-3.jpeg", title: "Yoga - 3", url: "/gallery/yoga/3.jpeg", folderId: "folder-13" },
        { id: "photo-yoga-4.jpeg", title: "Yoga - 4", url: "/gallery/yoga/4.jpeg", folderId: "folder-13" }
      ],
      addGalleryPhoto: (photo) => set((state) => ({
        gallery: [{ ...photo, id: crypto.randomUUID() }, ...state.gallery]
      })),
      deleteGalleryPhoto: (id) => set((state) => ({
        gallery: state.gallery.filter(g => g.id !== id)
      })),

      faculty: [
        { id: crypto.randomUUID(), name: "C M Mala", department: "Management", role: "Chairman", experience: "25+ Years", image: "/faculty/C m mala.jpeg" },
        { id: crypto.randomUUID(), name: "Krishnaiah C", department: "Administration", role: "Principal", experience: "20+ Years", image: "/faculty/Krishnaiah c.jpeg" },
        { id: crypto.randomUUID(), name: "Amar Narayan", department: "Administration", role: "Vice Principal", experience: "20+ Years", image: "/faculty/amar narayan.jpeg" },
        { id: crypto.randomUUID(), name: "Varsha", department: "Management", role: "Managing Trustee", experience: "10+ Years", image: "/faculty/Varsha.png" }
      ],
      addFaculty: (faculty) => set((state) => ({
        faculty: [{ ...faculty, id: crypto.randomUUID() }, ...state.faculty]
      })),
      deleteFaculty: (id) => set((state) => ({
        faculty: state.faculty.filter(f => f.id !== id)
      })),

      testimonials: [
        { id: crypto.randomUUID(), name: "Suresh P.", role: "Parent (Class 8)", text: "The Geniusphere program has transformed how my son looks at math and finance. Highly recommended!" },
        { id: crypto.randomUUID(), name: "Kavitha M.", role: "Parent (Class 5)", text: "Vignan provides a perfectly balanced curriculum. The faculty is very approachable and caring." },
        { id: crypto.randomUUID(), name: "Rahul S.", role: "Alumnus", text: "My years at Vignan gave me the foundation I needed for my engineering career." }
      ],
      addTestimonial: (test) => set((state) => ({
        testimonials: [{ ...test, id: crypto.randomUUID() }, ...state.testimonials]
      })),
      deleteTestimonial: (id) => set((state) => ({
        testimonials: state.testimonials.filter(t => t.id !== id)
      })),
    }),
    {
      name: 'vphs-data-store-v3', // Changed version to clear out old empty states
    }
  )
);
