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

      gallery: [
        { id: crypto.randomUUID(), title: "Annual Day 2025", url: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800" },
        { id: crypto.randomUUID(), title: "Science Exhibition", url: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800" },
        { id: crypto.randomUUID(), title: "Sports Day", url: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800" },
        { id: crypto.randomUUID(), title: "Campus Ground", url: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800" }
      ],
      addGalleryPhoto: (photo) => set((state) => ({
        gallery: [{ ...photo, id: crypto.randomUUID() }, ...state.gallery]
      })),
      deleteGalleryPhoto: (id) => set((state) => ({
        gallery: state.gallery.filter(g => g.id !== id)
      })),

      faculty: [
        { id: crypto.randomUUID(), name: "Amar Narayan", department: "Administration", role: "Principal", experience: "20+ Years" },
        { id: crypto.randomUUID(), name: "Dr. Suresh K", department: "Sciences", role: "HOD Science", experience: "15 Years" },
        { id: crypto.randomUUID(), name: "Meera Reddy", department: "Mathematics", role: "Senior Teacher", experience: "12 Years" }
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
      name: 'vphs-data-store-v2', // Changed version to clear out old empty states
    }
  )
);
