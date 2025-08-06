import { UserRound, Baby, Video, FlaskConical, Syringe, Heart } from "lucide-react";

const services = [
  {
    icon: UserRound,
    title: "Family Medicine",
    description: "Comprehensive primary care for patients of all ages, including preventive care, chronic disease management, and wellness exams.",
    color: "bg-blue-100 text-blue-500"
  },
  {
    icon: Baby,
    title: "Pediatric Care",
    description: "Specialized healthcare for infants, children, and adolescents, including immunizations, growth monitoring, and developmental assessments.",
    color: "bg-green-100 text-green-500"
  },
  {
    icon: Video,
    title: "Telemedicine",
    description: "Convenient virtual consultations for routine follow-ups, prescription refills, and minor health concerns from the comfort of your home.",
    color: "bg-yellow-100 text-yellow-600"
  },
  {
    icon: FlaskConical,
    title: "Laboratory Services",
    description: "On-site lab testing for blood work, urinalysis, and other diagnostic tests with quick turnaround times for faster results.",
    color: "bg-blue-100 text-blue-500"
  },
  {
    icon: Syringe,
    title: "Immunizations",
    description: "Complete vaccination services for all ages, including routine childhood vaccines, travel vaccines, and annual flu shots.",
    color: "bg-green-100 text-green-500"
  },
  {
    icon: Heart,
    title: "Chronic Care Management",
    description: "Ongoing support for chronic conditions like diabetes, hypertension, and heart disease with personalized treatment plans.",
    color: "bg-yellow-100 text-yellow-600"
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center fade-in">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Healthcare Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From routine check-ups to specialized care, we offer a full range of medical services to keep your family healthy.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow fade-in">
              <div className={`w-16 h-16 ${service.color} rounded-lg flex items-center justify-center mb-6`}>
                <service.icon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
