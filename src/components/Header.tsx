import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Academics", path: "/academics" },
  { label: "Faculty", path: "/faculty" },
  { label: "Gallery", path: "/gallery" },
  { label: "Events", path: "/events" },
  { label: "Admissions", path: "/admissions" },
  { label: "Contact", path: "/contact" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="fixed top-0 inset-x-0 z-50 flex justify-center w-full px-4 pt-4 md:pt-6 pointer-events-none">
      <header className="pointer-events-auto w-full max-w-5xl bg-background/80 backdrop-blur-xl border border-primary/10 shadow-[0_8px_32px_-4px_rgba(0,0,0,0.05)] rounded-2xl transition-all duration-300">
        <div className="flex items-center justify-between px-4 md:px-6 h-16 md:h-18">
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="Vignan Public High School Logo" className="h-10 w-10 md:h-12 md:w-12 rounded-full object-cover shadow-sm bg-white" />
            <div className="hidden sm:block">
              <p className="font-heading text-sm md:text-base font-bold text-primary leading-tight tracking-tight">Vignan Public High School</p>
              <p className="font-body text-[10px] md:text-xs text-muted-foreground font-medium uppercase tracking-wider">Knowledge is Power</p>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-4 py-2 text-sm font-semibold rounded-full transition-all duration-300 group overflow-hidden ${
                  location.pathname === link.path
                    ? "text-primary"
                    : "text-foreground/70 hover:text-primary"
                }`}
              >
                <span className="relative z-10">{link.label}</span>
                {location.pathname === link.path && (
                  <motion.div
                    layoutId="active-nav-bg"
                    className="absolute inset-0 bg-secondary rounded-full -z-0"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                {location.pathname !== link.path && (
                  <div className="absolute inset-0 bg-secondary/50 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 origin-center -z-0" />
                )}
              </Link>
            ))}
          </nav>

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 text-foreground/80 hover:text-primary transition-colors bg-secondary/50 rounded-full"
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="lg:hidden overflow-hidden border-t border-primary/5"
            >
              <nav className="px-4 py-4 flex flex-col gap-2">
                {navLinks.map((link, i) => (
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ delay: i * 0.05 }}
                    key={link.path}
                  >
                    <Link
                      to={link.path}
                      onClick={() => setOpen(false)}
                      className={`block px-4 py-3 text-sm font-semibold rounded-xl transition-all duration-300 ${
                        location.pathname === link.path
                          ? "text-primary bg-secondary shadow-sm"
                          : "text-foreground/70 hover:text-primary hover:bg-secondary/50"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </div>
  );
};

export default Header;
