import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import type { InsertContactMessage } from "@shared/schema";

export default function Contact() {
  const [formData, setFormData] = useState<InsertContactMessage>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "none",
    message: ""
  });
  
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContactMessage) => {
      const response = await apiRequest('POST', '/api/contact', data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Message Sent",
        description: "Thank you for contacting us. We'll respond within 24 hours.",
      });
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        subject: "none",
        message: ""
      });
      queryClient.invalidateQueries({ queryKey: ['/api/contact'] });
    },
    onError: (error) => {
      toast({
        title: "Send Failed",
        description: error instanceof Error ? error.message : "Failed to send message. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    contactMutation.mutate(formData);
  };

  const updateFormData = (field: keyof InsertContactMessage, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center fade-in">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Contact Us
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            We're here to help. Get in touch with our friendly staff for any questions or to schedule your appointment.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="fade-in">
            <div className="bg-white rounded-xl p-8 shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mr-4">
                    <Phone className="h-5 w-5 text-blue-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                    <p className="text-gray-600">(555) 123-CARE</p>
                    <p className="text-sm text-gray-500">Monday - Friday: 8AM - 6PM</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0 mr-4">
                    <Phone className="h-5 w-5 text-red-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Emergency</h4>
                    <p className="text-gray-600">(555) 911-HELP</p>
                    <p className="text-sm text-gray-500">24/7 Emergency Line</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 mr-4">
                    <Mail className="h-5 w-5 text-green-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                    <p className="text-gray-600">info@evergreenfamilyclinic.com</p>
                    <p className="text-sm text-gray-500">We'll respond within 24 hours</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0 mr-4">
                    <MapPin className="h-5 w-5 text-yellow-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Address</h4>
                    <p className="text-gray-600">
                      123 Evergreen Way<br />
                      Greenfield, CA 94301
                    </p>
                    <p className="text-sm text-gray-500">Free parking available</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                  <Clock className="h-5 w-5 mr-2" />
                  Office Hours
                </h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="font-medium text-gray-900">Monday - Friday</div>
                    <div className="text-gray-600">8:00 AM - 6:00 PM</div>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Saturday</div>
                    <div className="text-gray-600">9:00 AM - 2:00 PM</div>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Sunday</div>
                    <div className="text-gray-600">Closed</div>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Holidays</div>
                    <div className="text-gray-600">Limited Hours</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="fade-in">
            <div className="bg-white rounded-xl p-8 shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
              
              <form onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <Label htmlFor="firstName" className="text-sm font-semibold text-gray-900 mb-2">
                      First Name *
                    </Label>
                    <Input
                      id="firstName"
                      type="text"
                      required
                      placeholder="John"
                      value={formData.firstName}
                      onChange={(e) => updateFormData('firstName', e.target.value)}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName" className="text-sm font-semibold text-gray-900 mb-2">
                      Last Name *
                    </Label>
                    <Input
                      id="lastName"
                      type="text"
                      required
                      placeholder="Doe"
                      value={formData.lastName}
                      onChange={(e) => updateFormData('lastName', e.target.value)}
                      className="mt-1"
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <Label htmlFor="contactEmail" className="text-sm font-semibold text-gray-900 mb-2">
                      Email *
                    </Label>
                    <Input
                      id="contactEmail"
                      type="email"
                      required
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => updateFormData('email', e.target.value)}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="contactPhone" className="text-sm font-semibold text-gray-900 mb-2">
                      Phone
                    </Label>
                    <Input
                      id="contactPhone"
                      type="tel"
                      placeholder="(555) 123-4567"
                      value={formData.phone || ""}
                      onChange={(e) => updateFormData('phone', e.target.value)}
                      className="mt-1"
                    />
                  </div>
                </div>
                
                <div className="mb-4">
                  <Label className="text-sm font-semibold text-gray-900 mb-2">
                    Subject
                  </Label>
                  <Select value={formData.subject || ""} onValueChange={(value) => updateFormData('subject', value)}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select a topic" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="none">Select a topic</SelectItem>
                      <SelectItem value="appointment">Appointment Question</SelectItem>
                      <SelectItem value="insurance">Insurance Question</SelectItem>
                      <SelectItem value="medical-records">Medical Records Request</SelectItem>
                      <SelectItem value="billing">Billing Question</SelectItem>
                      <SelectItem value="general">General Question</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="mb-6">
                  <Label htmlFor="contactMessage" className="text-sm font-semibold text-gray-900 mb-2">
                    Message *
                  </Label>
                  <Textarea
                    id="contactMessage"
                    rows={4}
                    required
                    placeholder="How can we help you today?"
                    value={formData.message}
                    onChange={(e) => updateFormData('message', e.target.value)}
                    className="mt-1"
                  />
                </div>
                
                <Button 
                  type="submit"
                  disabled={contactMutation.isPending}
                  className="w-full healthcare-primary"
                >
                  <Send className="mr-2 h-4 w-4" />
                  {contactMutation.isPending ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
