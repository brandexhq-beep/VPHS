import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <div>
            <h3 className="font-heading text-xl font-bold mb-4">Vignan Public High School</h3>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Empowering young minds with knowledge, values, and skills for a brighter future. Knowledge is Power.
            </p>
          </div>

          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              {["About", "Academics", "Admissions", "Contact"].map((link) => (
                <Link
                  key={link}
                  to={`/${link.toLowerCase()}`}
                  className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  {link}
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
                <a href="mailto:info@vignanpublichighschool.com" className="hover:text-primary-foreground transition-colors">info@vignanpublichighschool.com</a>
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
