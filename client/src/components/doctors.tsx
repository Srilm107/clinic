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
        
        {/* Medical Specialties Overview */}
        <div className="bg-white rounded-xl p-8 shadow-md mb-16 fade-in">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Medical Specialties & Services</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <h4 className="font-semibold text-blue-900 mb-2">Family Medicine</h4>
              <p className="text-sm text-gray-600">Comprehensive primary care for all ages</p>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <h4 className="font-semibold text-green-900 mb-2">Pediatrics</h4>
              <p className="text-sm text-gray-600">Specialized care for infants, children & teens</p>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <h4 className="font-semibold text-purple-900 mb-2">Women's Health</h4>
              <p className="text-sm text-gray-600">Comprehensive women's healthcare services</p>
            </div>
            <div className="text-center p-4 bg-orange-50 rounded-lg">
              <h4 className="font-semibold text-orange-900 mb-2">Cardiology</h4>
              <p className="text-sm text-gray-600">Heart health and cardiovascular care</p>
            </div>
            <div className="text-center p-4 bg-teal-50 rounded-lg">
              <h4 className="font-semibold text-teal-900 mb-2">Mental Health</h4>
              <p className="text-sm text-gray-600">Behavioral health and wellness support</p>
            </div>
            <div className="text-center p-4 bg-red-50 rounded-lg">
              <h4 className="font-semibold text-red-900 mb-2">Urgent Care</h4>
              <p className="text-sm text-gray-600">Immediate care for non-emergency needs</p>
            </div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {doctors?.map((doctor) => (
            <div key={doctor.id} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow fade-in border border-gray-100">
              <div className="text-center mb-6">
                <img 
                  src={doctor.imageUrl} 
                  alt={`${doctor.name} - ${doctor.specialty}`} 
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover shadow-lg border-4 border-blue-100" 
                />
                <h3 className="text-xl font-bold text-gray-900 mb-2">{doctor.name}</h3>
                <p className="text-blue-600 font-semibold text-lg mb-4">{doctor.specialty}</p>
              </div>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-center space-x-2 flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-blue-100 text-blue-700 text-xs">
                    {doctor.education}
                  </Badge>
                  <Badge variant="secondary" className="bg-green-100 text-green-700 text-xs">
                    {doctor.experience}
                  </Badge>
                </div>
                
                <p className="text-gray-600 text-sm leading-relaxed text-left">
                  {doctor.bio.length > 200 ? `${doctor.bio.substring(0, 200)}...` : doctor.bio}
                </p>
              </div>
              
              <div className="border-t border-gray-100 pt-4">
                <Button
                  onClick={scrollToBooking}
                  className="w-full healthcare-primary"
                >
                  <CalendarPlus className="mr-2 h-4 w-4" />
                  Book with {doctor.name.split(' ')[1]}
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        {/* Additional Information Section */}
        <div className="mt-16 bg-blue-50 rounded-xl p-8 fade-in">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Our Medical Team Excellence
            </h3>
            <p className="text-gray-600 mb-6 max-w-3xl mx-auto">
              Our healthcare providers are committed to delivering personalized, evidence-based care. 
              Each doctor brings unique expertise and specializations to ensure comprehensive medical care for your entire family.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">6</div>
                <div className="text-sm text-gray-600">Medical Professionals</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">60+</div>
                <div className="text-sm text-gray-600">Years Combined Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
                <div className="text-sm text-gray-600">Board Certified</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
