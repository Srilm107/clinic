import { useQuery } from "@tanstack/react-query";
import { CalendarPlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { Doctor } from "@shared/schema";

export default function Doctors() {
  const { data: doctors, isLoading } = useQuery<Doctor[]>({
    queryKey: ['/api/doctors']
  });

  const scrollToBooking = () => {
    const element = document.getElementById('booking');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (isLoading) {
    return (
      <section id="doctors" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Medical Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Loading doctors...
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="doctors" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center fade-in">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Meet Our Medical Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our experienced physicians and healthcare professionals are dedicated to providing exceptional care for you and your family.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {doctors?.map((doctor) => (
            <div key={doctor.id} className="bg-gray-50 rounded-xl p-8 text-center fade-in">
              <img 
                src={doctor.imageUrl} 
                alt={`${doctor.name} - ${doctor.specialty}`} 
                className="w-32 h-32 rounded-full mx-auto mb-6 object-cover shadow-lg" 
              />
              <h3 className="text-xl font-bold text-gray-900 mb-2">{doctor.name}</h3>
              <p className="text-blue-500 font-semibold mb-4">{doctor.specialty}</p>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                {doctor.bio}
              </p>
              <div className="flex justify-center space-x-2 mb-4 flex-wrap gap-2">
                <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                  {doctor.education}
                </Badge>
                <Badge variant="secondary" className="bg-green-100 text-green-700">
                  {doctor.experience}
                </Badge>
              </div>
              <Button
                onClick={scrollToBooking}
                variant="ghost"
                className="text-blue-500 hover:text-blue-600"
              >
                <CalendarPlus className="mr-2 h-4 w-4" />
                Book Appointment
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
