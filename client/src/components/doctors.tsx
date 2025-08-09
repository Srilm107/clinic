import { CalendarPlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const doctors = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    specialty: "Family Medicine & Women's Health",
    education: "MD, Johns Hopkins University School of Medicine",
    experience: "12+ Years",
    bio: "Board-certified family physician with 12+ years of experience providing comprehensive care for patients of all ages. Dr. Johnson specializes in preventive medicine, chronic disease management, women's health, and geriatric care. She is passionate about building long-term relationships with her patients and their families, focusing on preventive care to maintain optimal health. Dr. Johnson completed her residency at Massachusetts General Hospital and is certified by the American Board of Family Medicine.",
    imageUrl: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300"
  },
  {
    id: 2,
    name: "Dr. Michael Chen",
    specialty: "Pediatrics & Adolescent Medicine",
    education: "MD, Stanford University School of Medicine",
    experience: "8 Years",
    bio: "Dr. Chen is a dedicated pediatrician with extensive expertise in child development, behavioral pediatrics, immunizations, and adolescent medicine. He provides compassionate care for infants, children, and teenagers, working closely with families to ensure healthy development. Dr. Chen is fluent in English and Mandarin, making him an excellent choice for diverse families in our community. He completed his pediatric residency at UCSF Benioff Children's Hospital and is board-certified by the American Board of Pediatrics.",
    imageUrl: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300"
  },
  {
    id: 3,
    name: "Dr. Robert Martinez",
    specialty: "Internal Medicine & Cardiology",
    education: "MD, UCLA David Geffen School of Medicine",
    experience: "15+ Years",
    bio: "Dr. Martinez is an experienced internal medicine physician specializing in adult primary care, cardiovascular health, diabetes management, and preventive medicine. With over 15 years of clinical experience, he has helped thousands of patients manage chronic conditions and maintain optimal health. Dr. Martinez is particularly skilled in managing complex medical conditions and coordinating care with specialists when needed. He completed his internal medicine residency at UCLA Medical Center and holds board certifications in both Internal Medicine and Cardiovascular Disease.",
    imageUrl: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300"
  },
  {
    id: 4,
    name: "Dr. Emily Rodriguez",
    specialty: "Family Medicine & Mental Health",
    education: "MD, University of California San Francisco",
    experience: "10 Years",
    bio: "Dr. Rodriguez is a family medicine physician with special training in behavioral health and mental wellness. She provides comprehensive primary care while addressing the mental health needs of her patients, including anxiety, depression, and stress management. Dr. Rodriguez believes in treating the whole person, not just symptoms, and is committed to creating a safe, supportive environment for all patients. She completed dual residencies in Family Medicine and Psychiatry at the University of California San Francisco.",
    imageUrl: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300" // Using Dr. Sarah Johnson's image
  },
  {
    id: 5,
    name: "Dr. James Wilson",
    specialty: "Urgent Care & Sports Medicine",
    education: "MD, University of Washington School of Medicine",
    experience: "9 Years",
    bio: "Dr. Wilson specializes in urgent care medicine and sports medicine, providing immediate care for non-life-threatening injuries and illnesses. He has extensive experience treating sprains, fractures, lacerations, infections, and other acute medical conditions. Dr. Wilson also provides comprehensive sports medicine services, including injury prevention, performance optimization, and rehabilitation. He is certified in Advanced Cardiac Life Support (ACLS) and serves as our clinic's urgent care director.",
    imageUrl: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300" // Using Dr. Michael Chen's image
  },
  {
    id: 6,
    name: "Dr. Lisa Thompson",
    specialty: "Nurse Practitioner & Chronic Care",
    education: "DNP, University of Pennsylvania",
    experience: "7 Years",
    bio: "Dr. Thompson is a board-certified Family Nurse Practitioner with expertise in chronic disease management, diabetes care, and preventive health. She works collaboratively with our physicians to provide comprehensive care, specializing in patient education and lifestyle counseling. Dr. Thompson has a particular interest in helping patients manage diabetes, hypertension, and other chronic conditions through evidence-based treatment plans and ongoing support.",
    imageUrl: "https://images.unsplash.com/photo-1638202993928-7267aad84c31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300"
  },
  {
    id: 7,
    name: "Dr. Maria Gonzalez",
    specialty: "Family Medicine & Geriatrics",
    education: "MD, University of California San Francisco",
    experience: "14 Years",
    bio: "Dr. Gonzalez is a bilingual family medicine physician specializing in comprehensive care for patients across all life stages, with particular expertise in geriatric medicine and chronic disease management. She completed her medical training at UC San Francisco and her residency at Stanford Family Medicine. Dr. Gonzalez is fluent in Spanish and English, serving the diverse Greenfield community with culturally sensitive care.",
    imageUrl: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300"
  },
  {
    id: 8,
    name: "Dr. Kevin Park",
    specialty: "Internal Medicine & Diabetes Care",
    education: "MD, Stanford University School of Medicine",
    experience: "11 Years",
    bio: "Dr. Park is an internal medicine specialist with advanced training in endocrinology and diabetes management. He provides comprehensive care for adults with complex medical conditions, focusing on diabetes, thyroid disorders, and metabolic syndrome. Dr. Park completed his fellowship at UCSF Diabetes Center and is board-certified in Internal Medicine and Endocrinology.",
    imageUrl: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300"
  },
  {
    id: 9,
    name: "Dr. Amanda Foster",
    specialty: "Pediatrics & Adolescent Health",
    education: "MD, UC Davis School of Medicine",
    experience: "9 Years",
    bio: "Dr. Foster is a pediatrician with special interest in adolescent health, childhood obesity prevention, and developmental pediatrics. She provides comprehensive care from newborn through age 21, with expertise in adolescent mental health and behavioral issues. Dr. Foster completed her pediatric residency at Children's Hospital Oakland and is board-certified by the American Board of Pediatrics.",
    imageUrl: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300" // Using Dr. Robert Martinez's image
  }
];

export default function Doctors() {
  const scrollToBooking = () => {
    const element = document.getElementById('booking');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="doctors" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center fade-in">
          <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">
            Meet Our Medical Team
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Our experienced physicians and healthcare professionals are dedicated to providing exceptional care for you and your family.
          </p>
        </div>
        
        {/* Medical Specialties Overview */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl p-8 shadow-lg mb-16 fade-in border border-blue-200">
          <h3 className="text-2xl font-bold text-black mb-6 text-center">Medical Specialties & Services</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border border-blue-100">
              <h4 className="font-semibold text-black mb-2">Family Medicine</h4>
              <p className="text-sm text-gray-600">Comprehensive primary care for all ages</p>
            </div>
            <div className="text-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border border-green-100">
              <h4 className="font-semibold text-black mb-2">Pediatrics</h4>
              <p className="text-sm text-gray-600">Specialized care for infants, children & teens</p>
            </div>
            <div className="text-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border border-purple-100">
              <h4 className="font-semibold text-black mb-2">Women's Health</h4>
              <p className="text-sm text-gray-600">Comprehensive women's healthcare services</p>
            </div>
            <div className="text-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border border-red-100">
              <h4 className="font-semibold text-black mb-2">Cardiology</h4>
              <p className="text-sm text-gray-600">Heart health and cardiovascular care</p>
            </div>
            <div className="text-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border border-teal-100">
              <h4 className="font-semibold text-black mb-2">Mental Health</h4>
              <p className="text-sm text-gray-600">Behavioral health and wellness support</p>
            </div>
            <div className="text-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border border-orange-100">
              <h4 className="font-semibold text-black mb-2">Urgent Care</h4>
              <p className="text-sm text-gray-600">Immediate care for non-emergency needs</p>
            </div>
            <div className="text-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border border-indigo-100">
              <h4 className="font-semibold text-black mb-2">Geriatrics</h4>
              <p className="text-sm text-gray-600">Specialized care for elderly patients</p>
            </div>
            <div className="text-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border border-yellow-100">
              <h4 className="font-semibold text-black mb-2">Diabetes Care</h4>
              <p className="text-sm text-gray-600">Advanced diabetes and endocrinology</p>
            </div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {doctors.map((doctor, index) => (
            <div key={doctor.id} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 fade-in border border-gray-100 hover:border-blue-200 transform hover:-translate-y-1">
              <div className="text-center mb-6">
                <div className="relative">
                  <img 
                    src={doctor.imageUrl} 
                    alt={`${doctor.name} - ${doctor.specialty}`} 
                    className="w-28 h-28 rounded-full mx-auto mb-4 object-cover shadow-lg border-4 border-blue-100" 
                  />
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                    <Badge variant="secondary" className="bg-blue-600 text-white text-xs px-3 py-1 rounded-full shadow-md">
                      {doctor.experience}
                    </Badge>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-black mb-2 mt-4">{doctor.name}</h3>
                <p className="text-blue-600 font-semibold text-base mb-3">{doctor.specialty}</p>
              </div>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-center">
                  <Badge variant="outline" className="bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 text-xs px-3 py-1 border-blue-200">
                    {doctor.education}
                  </Badge>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-blue-500">
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {doctor.bio.length > 180 ? `${doctor.bio.substring(0, 180)}...` : doctor.bio}
                  </p>
                </div>
              </div>
              
              <div className="border-t border-gray-100 pt-4">
                <Button
                  onClick={scrollToBooking}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <CalendarPlus className="mr-2 h-4 w-4" />
                  Book with {doctor.name.split(' ')[1]}
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        {/* Team Excellence Statistics */}
        <div className="mt-16 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl p-8 fade-in text-white shadow-xl">
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-4">
              Evergreen Family Clinic Excellence
            </h3>
            <p className="text-blue-100 mb-8 max-w-3xl mx-auto text-lg">
              Our healthcare providers are committed to delivering personalized, evidence-based care. 
              Each doctor brings unique expertise and specializations to ensure comprehensive medical care for your entire family.
            </p>
            <div className="grid md:grid-cols-4 gap-6 mt-8">
              <div className="text-center bg-white bg-opacity-10 rounded-lg p-6 backdrop-blur-sm">
                <div className="text-4xl font-bold text-white mb-2">9</div>
                <div className="text-sm text-blue-100 font-medium">Medical Professionals</div>
              </div>
              <div className="text-center bg-white bg-opacity-10 rounded-lg p-6 backdrop-blur-sm">
                <div className="text-4xl font-bold text-white mb-2">95+</div>
                <div className="text-sm text-blue-100 font-medium">Years Combined Experience</div>
              </div>
              <div className="text-center bg-white bg-opacity-10 rounded-lg p-6 backdrop-blur-sm">
                <div className="text-4xl font-bold text-white mb-2">100%</div>
                <div className="text-sm text-blue-100 font-medium">Board Certified</div>
              </div>
              <div className="text-center bg-white bg-opacity-10 rounded-lg p-6 backdrop-blur-sm">
                <div className="text-4xl font-bold text-white mb-2">8</div>
                <div className="text-sm text-blue-100 font-medium">Specialty Areas</div>
              </div>
            </div>
            <div className="mt-8 pt-6 border-t border-blue-400">
              <p className="text-blue-100 text-sm">
                Specialties include Family Medicine, Pediatrics, Internal Medicine, Cardiology, Mental Health, Urgent Care, Geriatrics, and Diabetes Care
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
