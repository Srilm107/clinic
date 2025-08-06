import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const faqs = [
  {
    id: "1",
    question: "What insurance plans do you accept?",
    answer: "We accept most major insurance plans including Blue Cross Blue Shield, Aetna, Cigna, UnitedHealthcare, and Medicare. Please contact our office to verify your specific plan coverage before your appointment."
  },
  {
    id: "2",
    question: "How do I schedule a telemedicine appointment?",
    answer: "You can book a telemedicine appointment through our online booking system above or by calling our office. We'll send you a secure link to join the video consultation using Google Meet. Make sure you have a stable internet connection and a device with a camera."
  },
  {
    id: "3",
    question: "What should I bring to my first appointment?",
    answer: "Please bring a valid photo ID, insurance card, list of current medications, any previous medical records, and a completed patient intake form (available on our website). If you're seeing a specialist, bring any relevant test results or referrals."
  },
  {
    id: "4",
    question: "What are your office hours?",
    answer: "Monday - Friday: 8:00 AM - 6:00 PM\nSaturday: 9:00 AM - 2:00 PM\nSunday: Closed\n\nFor urgent after-hours needs, please call our main number for our answering service or visit the nearest emergency room for emergencies."
  },
  {
    id: "5",
    question: "How can I access my test results?",
    answer: "Test results are typically available within 2-3 business days through our secure patient portal. You'll receive an email notification when results are ready. For urgent results, our staff will contact you directly by phone."
  },
  {
    id: "6",
    question: "Do you offer same-day appointments?",
    answer: "Yes, we reserve time slots each day for same-day appointments and urgent care needs. Please call our office before 2:00 PM to check availability. Telemedicine consultations often have more flexible same-day scheduling."
  }
];

export default function FAQ() {
  const [openFaqs, setOpenFaqs] = useState<string[]>([]);

  const toggleFaq = (id: string) => {
    setOpenFaqs(prev => 
      prev.includes(id) 
        ? prev.filter(faqId => faqId !== id)
        : [...prev, id]
    );
  };

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center fade-in">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Find answers to common questions about our services, appointments, and policies.
          </p>
        </div>
        
        <div className="space-y-4 fade-in">
          {faqs.map((faq) => (
            <div key={faq.id} className="bg-gray-50 rounded-lg">
              <Button
                onClick={() => toggleFaq(faq.id)}
                variant="ghost"
                className="w-full p-6 text-left justify-between hover:bg-gray-100 rounded-lg h-auto"
              >
                <h3 className="text-lg font-semibold text-gray-900 text-left">
                  {faq.question}
                </h3>
                {openFaqs.includes(faq.id) ? (
                  <ChevronUp className="h-5 w-5 text-gray-400 flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-400 flex-shrink-0" />
                )}
              </Button>
              {openFaqs.includes(faq.id) && (
                <div className="px-6 pb-6">
                  <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
