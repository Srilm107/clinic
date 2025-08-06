import { useState } from "react";
import { Heart, Phone, Calendar, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <Heart className="h-8 w-8 text-blue-500 mr-3" />
              <span className="text-xl font-bold text-gray-900">Evergreen Family Clinic</span>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-blue-500 font-medium"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('doctors')}
                className="text-gray-600 hover:text-blue-500 transition-colors"
              >
                Doctors
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-gray-600 hover:text-blue-500 transition-colors"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('booking')}
                className="text-gray-600 hover:text-blue-500 transition-colors"
              >
                Book Appointment
              </button>
              <button 
                onClick={() => scrollToSection('faq')}
                className="text-gray-600 hover:text-blue-500 transition-colors"
              >
                FAQ
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-gray-600 hover:text-blue-500 transition-colors"
              >
                Contact
              </button>
            </div>
          </div>
          
          {/* Emergency Contact */}
          <div className="hidden md:flex items-center">
            <div className="text-right mr-4">
              <div className="text-sm text-gray-500">Emergency</div>
              <div className="font-semibold text-red-600">(555) 911-HELP</div>
            </div>
            <Button 
              onClick={() => scrollToSection('booking')}
              className="healthcare-primary"
            >
              Book Now
            </Button>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </nav>
      
      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 pt-2 pb-3 space-y-1">
            <button 
              onClick={() => scrollToSection('home')}
              className="block w-full text-left px-3 py-2 text-blue-500 font-medium"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('doctors')}
              className="block w-full text-left px-3 py-2 text-gray-600 hover:text-blue-500"
            >
              Doctors
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="block w-full text-left px-3 py-2 text-gray-600 hover:text-blue-500"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('booking')}
              className="block w-full text-left px-3 py-2 text-gray-600 hover:text-blue-500"
            >
              Book Appointment
            </button>
            <button 
              onClick={() => scrollToSection('faq')}
              className="block w-full text-left px-3 py-2 text-gray-600 hover:text-blue-500"
            >
              FAQ
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left px-3 py-2 text-gray-600 hover:text-blue-500"
            >
              Contact
            </button>
            <div className="pt-4 border-t border-gray-200">
              <Button 
                onClick={() => scrollToSection('booking')}
                className="w-full healthcare-primary"
              >
                Book Appointment
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
