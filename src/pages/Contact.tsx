import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, MessagesSquare } from "lucide-react";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";
import { useDataStore } from "@/store/dataStore";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  const store = useDataStore();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    store.addEnquiry({
      name: form.name,
      email: form.email,
      phone: form.phone,
      message: form.message
    });
    setSubmitted(true);
    toast({ title: "Message sent!", description: "We'll get back to you soon." });
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: "", email: "", phone: "", message: "" });
    }, 3000);
  };

  const inputClass = (field: string) =>
    `w-full px-5 py-4 rounded-2xl border bg-background/50 hover:bg-background text-foreground text-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:bg-background shadow-sm ${
      focused === field ? "border-primary/30 ring-2 ring-primary/20" : "border-primary/10"
    }`;

  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      content: (
        <p className="text-sm text-foreground/70 leading-relaxed font-medium">
          28 & 29 Phase, 3, 3rd Main Rd<br />
          Rajeshwari Nagar, Chamundi Nagar<br />
          Laggere, Bengaluru, Karnataka 560058
        </p>
      ),
    },
    {
      icon: Phone,
      title: "Phone",
      content: <a href="tel:+919972235286" className="text-sm font-bold text-foreground hover:text-primary transition-colors">99722 35286</a>,
    },
    {
      icon: Mail,
      title: "Email",
      content: <a href="mailto:info@vignanpublichighschool.com" className="text-sm font-bold text-foreground hover:text-primary transition-colors break-all">info@vignanpublichighschool.com</a>,
    },
    {
      icon: Clock,
      title: "Office Hours",
      content: <p className="text-sm text-foreground/70 font-medium">Monday – Saturday: 8:00 AM – 4:00 PM</p>,
    },
  ];

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
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1516387938699-a93567ec168e?q=80&w=2671&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay opacity-15" />

        <div className="container relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/10 text-white backdrop-blur-md border border-white/20 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6 shadow-xl">
              <MessagesSquare size={14} className="text-white" />
              Get In Touch
            </div>
            <h1 className="text-4xl md:text-6xl font-heading font-black text-white tracking-tight mb-6 drop-shadow-lg">
              Contact Us
            </h1>
            <p className="text-white/80 leading-relaxed text-lg md:text-xl font-medium drop-shadow-md">
              We'd love to hear from you. Reach out for admissions, inquiries, or any feedback you might have.
            </p>
          </motion.div>
        </div>
        
        {/* Decorative bottom gradient fade to bg-background */}
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent" />
      </section>

      <section className="container py-16 md:py-24 relative">
        <div className="absolute top-20 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px] pointer-events-none -z-10" />
        <div className="absolute bottom-20 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[120px] pointer-events-none -z-10" />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8 max-w-6xl mx-auto relative z-10">
          {/* Info Side */}
          <div className="lg:col-span-2 space-y-8">
            <motion.div 
              className="bg-card rounded-[2rem] p-8 md:p-10 shadow-lg border border-primary/10 relative overflow-hidden group"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700 -z-10" />
              
              <h2 className="text-2xl font-heading font-black text-foreground mb-8">Contact Information</h2>
              
              <div className="space-y-8">
                {contactInfo.map((item, i) => (
                  <motion.div
                    key={item.title}
                    className="flex items-start gap-5 group/item"
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 shrink-0 group-hover/item:bg-primary group-hover/item:-rotate-6 group-hover/item:scale-110 transition-all duration-300 flex items-center justify-center shadow-inner">
                      <item.icon size={20} className="text-primary group-hover/item:text-white transition-colors" />
                    </div>
                    <div className="pt-1">
                      <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1">{item.title}</h3>
                      {item.content}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="rounded-[2rem] overflow-hidden shadow-lg border border-primary/10 aspect-[4/3] relative group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="absolute inset-0 bg-primary/5 pointer-events-none group-hover:opacity-0 transition-opacity duration-500 z-10 mix-blend-overlay" />
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.476!2d77.5142!3d13.0165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDAxJzAwLjAiTiA3N8KwMzAnNTEuMSJF!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "brightness(0.95) contrast(1.1)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Vignan Public High School Location"
                className="transition-transform duration-700 group-hover:scale-105"
              />
            </motion.div>
          </div>

          {/* Form Side */}
          <motion.div
            className="lg:col-span-3 bg-card rounded-[2.5rem] p-8 md:p-12 shadow-2xl border border-primary/10 relative overflow-hidden isolate group/form"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-accent/5 opacity-0 group-hover/form:opacity-100 transition-opacity duration-700 -z-10" />
            <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] bg-primary/10 rounded-full blur-[100px] -z-10 group-hover/form:rotate-12 transition-transform duration-[2s]" />
            
            <h2 className="text-3xl font-heading font-black text-foreground mb-8">Send us a Message</h2>
            
            {submitted ? (
              <motion.div
                className="bg-emerald-500/10 rounded-[2rem] p-12 text-center border border-emerald-500/20"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <div className="w-24 h-24 rounded-full bg-emerald-500/20 flex items-center justify-center mx-auto mb-6">
                   <span className="w-16 h-16 rounded-full bg-emerald-500 flex items-center justify-center shadow-lg shadow-emerald-500/30">
                     <CheckCircle size={32} className="text-white" />
                   </span>
                </div>
                <p className="font-heading font-black text-foreground text-3xl mb-3">Thank you!</p>
                <p className="text-lg text-muted-foreground font-medium">Your message has been received. We'll get back to you shortly.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    { id: "name", label: "Full Name", type: "text", required: true, placeholder: "John Doe" },
                    { id: "email", label: "Email Address", type: "email", required: true, placeholder: "john@example.com" },
                    { id: "phone", label: "Phone Number", type: "tel", required: false, placeholder: "+91 xxxxx xxxxx" },
                  ].map((field) => (
                    <motion.div className={field.id === "name" ? "md:col-span-2" : ""} key={field.id} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                      <label htmlFor={field.id} className="block text-xs font-bold uppercase tracking-wider text-muted-foreground ml-1 mb-2">{field.label}</label>
                      <input
                        id={field.id}
                        type={field.type}
                        required={field.required}
                        placeholder={field.placeholder}
                        value={form[field.id as keyof typeof form]}
                        onChange={(e) => setForm({ ...form, [field.id]: e.target.value })}
                        onFocus={() => setFocused(field.id)}
                        onBlur={() => setFocused(null)}
                        className={inputClass(field.id)}
                      />
                    </motion.div>
                  ))}
                </div>
                <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                  <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-muted-foreground ml-1 mb-2">Your Message</label>
                  <textarea
                    id="message"
                    rows={5}
                    required
                    placeholder="How can we help you?"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    onFocus={() => setFocused("message")}
                    onBlur={() => setFocused(null)}
                    className={`${inputClass("message")} resize-none`}
                  />
                </motion.div>
                <motion.button
                  type="submit"
                  className="w-full px-8 py-4 bg-primary text-primary-foreground font-black tracking-wide rounded-2xl hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-3 group mt-4"
                  whileTap={{ scale: 0.98 }}
                >
                  Send Message <Send size={20} className="group-hover:translate-x-1.5 group-hover:-translate-y-1.5 transition-transform" />
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
