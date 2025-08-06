import { Calendar, Video } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative bg-white">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1551190822-a9333d879b1f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080" 
          alt="Modern medical clinic interior" 
          className="w-full h-full object-cover opacity-20" 
        />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="fade-in">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Quality Healthcare for 
              <span className="text-blue-500"> Your Family</span>
            </h1>
            <p className="text-xl text-gray-600 mt-6 leading-relaxed">
              At Evergreen Family Clinic, we provide comprehensive, compassionate healthcare services for patients of all ages. Our experienced team is committed to your family's health and wellbeing.
            </p>
            
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => scrollToSection('booking')}
                className="healthcare-primary text-lg px-8 py-4 h-auto"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Book Appointment
              </Button>
              <Button 
                onClick={() => scrollToSection('booking')}
                variant="outline"
                className="border-2 border-blue-500 text-blue-500 hover:bg-blue-50 text-lg px-8 py-4 h-auto"
              >
                <Video className="mr-2 h-5 w-5" />
                Telemedicine
              </Button>
            </div>
            
            <div className="mt-8 grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-500">15+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-500">10,000+</div>
                <div className="text-sm text-gray-600">Patients Served</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-500">24/7</div>
                <div className="text-sm text-gray-600">Online Booking</div>
              </div>
            </div>
          </div>
          
          <div className="fade-in">
            <img 
              src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Doctor consulting with patient in modern clinic" 
              className="rounded-2xl shadow-2xl w-full" 
            />
          </div>
        </div>
      </div>
    </section>
  );
}
