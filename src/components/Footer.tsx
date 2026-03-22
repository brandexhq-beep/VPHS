import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <div>
            <h3 className="font-heading text-xl font-bold mb-4">Shaping Tomorrow's Leaders</h3>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Vignan Public High School: est from 2002. Empowering young minds with knowledge, values, and skills for a brighter future. Knowledge is Power.
            </p>
          </div>

          <div>
            <h4 className="font-heading text-lg font-semibold mb-6">Sitemap</h4>
            <nav className="grid grid-cols-2 gap-x-4 gap-y-3">
              {[
                { label: "Home", path: "/" },
                { label: "About Us", path: "/about" },
                { label: "Academics", path: "/academics" },
                { label: "Faculty", path: "/faculty" },
                { label: "Gallery", path: "/gallery" },
                { label: "Events", path: "/events" },
                { label: "Admissions", path: "/admissions" },
                { label: "Contact Us", path: "/contact" },
              ].map((link) => (
                <Link
                  key={link.label}
                  to={link.path}
                  className="text-sm text-primary-foreground/70 hover:text-white transition-colors flex items-center gap-1.5 group"
                >
                  <span className="w-1 h-1 rounded-full bg-primary-foreground/30 group-hover:bg-accent transition-colors"></span>
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3 text-sm text-primary-foreground/70">
              <div className="flex gap-2">
                <MapPin size={16} className="mt-0.5 shrink-0" />
                <span>28 & 29 Phase, 3rd Main Rd, Rajeshwari Nagar, Laggere, Bengaluru 560058</span>
              </div>
              <div className="flex gap-2 items-center">
                <Phone size={16} className="shrink-0" />
                <a href="tel:+919972235286" className="hover:text-primary-foreground transition-colors">99722 35286</a>
              </div>
              <div className="flex gap-2 items-center">
                <Mail size={16} className="shrink-0" />
                <a href="mailto:vignanpublic2002@gmail.com" className="hover:text-primary-foreground transition-colors">vignanpublic2002@gmail.com</a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-primary-foreground/10 text-center text-xs text-primary-foreground/50">
          © {new Date().getFullYear()} Vignan Public High School. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
