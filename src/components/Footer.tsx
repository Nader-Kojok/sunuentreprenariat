import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faLocationDot, 
  faPhone, 
  faEnvelope 
} from "@fortawesome/free-solid-svg-icons";
import { 
  faFacebook, 
  faTwitter, 
  faInstagram, 
  faLinkedin,
  faWhatsapp 
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    "Ateliers de Formation",
    "Forums Entrepreneuriaux",
    "Panels d'Experts",
    "Webinaires Interactifs",
    "Accompagnement Personnalisé",
    "Événements de Networking"
  ];

  const quickLinks = [
    { href: "/", label: "Accueil" },
    { href: "/about", label: "À Propos" },
    { href: "/services", label: "Services" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" }
  ];

  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <span className="text-black font-bold text-sm">SE</span>
              </div>
              <span className="font-poppins font-bold text-xl">
                Sunu Entreprenariat
              </span>
            </div>
            <p className="text-gray-300 text-sm">
              Accompagnement entrepreneurial d&apos;excellence au Sénégal. Nous accompagnons les entrepreneurs 
              dans la quête de visibilité et le développement de leur structure à travers des formations, 
              événements et un coaching personnalisé.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/sunuentreprenariat" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <FontAwesomeIcon icon={faFacebook} className="w-5 h-5" />
              </a>
              <a 
                href="https://twitter.com/sunuentreprenariat" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <FontAwesomeIcon icon={faTwitter} className="w-5 h-5" />
              </a>
              <a 
                href="https://www.instagram.com/sunuentreprenariat" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <FontAwesomeIcon icon={faInstagram} className="w-5 h-5" />
              </a>
              <a 
                href="https://www.linkedin.com/company/sunu-entreprenariat" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <FontAwesomeIcon icon={faLinkedin} className="w-5 h-5" />
              </a>
              <a 
                href="https://wa.me/221123456789" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="WhatsApp"
              >
                <FontAwesomeIcon icon={faWhatsapp} className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-poppins font-semibold text-lg">Nos Services</h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <Link 
                    href="/services" 
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-poppins font-semibold text-lg">Liens Rapides</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-poppins font-semibold text-lg">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <FontAwesomeIcon icon={faLocationDot} className="w-4 h-4 mt-1 text-gray-400" />
                <div>
                  <p className="text-gray-300 text-sm">
                    Dakar<br />
                    Sénégal
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <FontAwesomeIcon icon={faPhone} className="w-4 h-4 text-gray-400" />
                <a 
                  href="tel:+221123456789" 
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  +221 12 345 67 89
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <FontAwesomeIcon icon={faEnvelope} className="w-4 h-4 text-gray-400" />
                <a 
                  href="mailto:contact@sunu-entreprenariat.com" 
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  contact@sunu-entreprenariat.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} Sunu Entreprenariat. Tous droits réservés.
            </p>
            <div className="flex space-x-6">
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors text-sm">
                Politique de Confidentialité
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white transition-colors text-sm">
                Conditions d&apos;Utilisation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 