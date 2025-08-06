import { Heart, MapPin, Phone, Mail } from "lucide-react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <Heart className="h-8 w-8 text-blue-400 mr-3" />
              <span className="text-xl font-bold">Evergreen Family Clinic</span>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              Providing comprehensive, compassionate healthcare services for families in our community. 
              Your health and wellbeing are our top priorities.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <FaFacebookF className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <FaTwitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <FaInstagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <FaLinkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => scrollToSection('home')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('doctors')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Our Doctors
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('booking')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Book Appointment
                </button>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Patient Portal
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Patient Forms
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <MapPin className="h-4 w-4 text-blue-400 mr-3 mt-1 flex-shrink-0" />
                <div>
                  123 Evergreen Way<br />
                  Greenfield, CA 94301
                </div>
              </li>
              <li className="flex items-center">
                <Phone className="h-4 w-4 text-blue-400 mr-3 flex-shrink-0" />
                (555) 123-CARE
              </li>
              <li className="flex items-center">
                <Mail className="h-4 w-4 text-blue-400 mr-3 flex-shrink-0" />
                info@evergreenfamilyclinic.com
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 Evergreen Family Clinic. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              HIPAA Notice
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
