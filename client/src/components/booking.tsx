import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Calendar, Video, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import type { InsertAppointment } from "@shared/schema";

export default function Booking() {
  const [formData, setFormData] = useState<InsertAppointment>({
    patientName: "",
    phoneNumber: "",
    email: "",
    dateOfBirth: "",
    preferredDoctor: "any",
    appointmentType: "in-person",
    reasonForVisit: ""
  });
  const [agreed, setAgreed] = useState(false);
  
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const bookingMutation = useMutation({
    mutationFn: async (data: InsertAppointment) => {
      const response = await apiRequest('POST', '/api/appointments', data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Appointment Booked",
        description: "Your appointment has been successfully scheduled. We'll contact you soon to confirm the details.",
      });
      setFormData({
        patientName: "",
        phoneNumber: "",
        email: "",
        dateOfBirth: "",
        preferredDoctor: "any",
        appointmentType: "in-person",
        reasonForVisit: ""
      });
      setAgreed(false);
      queryClient.invalidateQueries({ queryKey: ['/api/appointments'] });
    },
    onError: (error) => {
      toast({
        title: "Booking Failed",
        description: error instanceof Error ? error.message : "Failed to book appointment. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreed) {
      toast({
        title: "Agreement Required",
        description: "Please agree to the Privacy Policy and Terms of Service.",
        variant: "destructive",
      });
      return;
    }
    bookingMutation.mutate(formData);
  };

  const updateFormData = (field: keyof InsertAppointment, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="booking" className="py-20 bg-blue-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center fade-in">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Book Your Appointment
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Schedule your visit online 24/7 or choose a telemedicine consultation for your convenience.
          </p>
        </div>
        
        <div className="bg-white rounded-xl shadow-lg p-8 fade-in">
          <form onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <Label htmlFor="patientName" className="text-sm font-semibold text-gray-900 mb-2">
                  Patient Name *
                </Label>
                <Input
                  id="patientName"
                  type="text"
                  required
                  placeholder="Enter your full name"
                  value={formData.patientName}
                  onChange={(e) => updateFormData('patientName', e.target.value)}
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="phoneNumber" className="text-sm font-semibold text-gray-900 mb-2">
                  Phone Number *
                </Label>
                <Input
                  id="phoneNumber"
                  type="tel"
                  required
                  placeholder="(555) 123-4567"
                  value={formData.phoneNumber}
                  onChange={(e) => updateFormData('phoneNumber', e.target.value)}
                  className="mt-1"
                />
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <Label htmlFor="email" className="text-sm font-semibold text-gray-900 mb-2">
                  Email Address *
                </Label>
                <Input
                  id="email"
                  type="email"
                  required
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) => updateFormData('email', e.target.value)}
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="dateOfBirth" className="text-sm font-semibold text-gray-900 mb-2">
                  Date of Birth *
                </Label>
                <Input
                  id="dateOfBirth"
                  type="date"
                  required
                  value={formData.dateOfBirth}
                  onChange={(e) => updateFormData('dateOfBirth', e.target.value)}
                  className="mt-1"
                />
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <Label className="text-sm font-semibold text-gray-900 mb-2">
                  Preferred Doctor
                </Label>
                <Select value={formData.preferredDoctor || ""} onValueChange={(value) => updateFormData('preferredDoctor', value)}>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Any Available Doctor" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="any">Any Available Doctor</SelectItem>
                    <SelectItem value="dr-sarah-johnson">Dr. Sarah Johnson - Family Medicine & Women's Health</SelectItem>
                    <SelectItem value="dr-michael-chen">Dr. Michael Chen - Pediatrics & Adolescent Medicine</SelectItem>
                    <SelectItem value="dr-robert-martinez">Dr. Robert Martinez - Internal Medicine & Cardiology</SelectItem>
                    <SelectItem value="dr-emily-rodriguez">Dr. Emily Rodriguez - Family Medicine & Mental Health</SelectItem>
                    <SelectItem value="dr-james-wilson">Dr. James Wilson - Urgent Care & Sports Medicine</SelectItem>
                    <SelectItem value="dr-lisa-thompson">Dr. Lisa Thompson - Nurse Practitioner & Chronic Care</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label className="text-sm font-semibold text-gray-900 mb-2">
                  Appointment Type
                </Label>
                <Select value={formData.appointmentType} onValueChange={(value) => updateFormData('appointmentType', value)}>
                  <SelectTrigger className="mt-1">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="in-person">In-Person Visit</SelectItem>
                    <SelectItem value="telemedicine">Telemedicine Consultation</SelectItem>
                    <SelectItem value="routine-checkup">Routine Checkup</SelectItem>
                    <SelectItem value="follow-up">Follow-up Appointment</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="mb-6">
              <Label htmlFor="reasonForVisit" className="text-sm font-semibold text-gray-900 mb-2">
                Reason for Visit
              </Label>
              <Textarea
                id="reasonForVisit"
                rows={4}
                placeholder="Please describe your symptoms or reason for the visit..."
                value={formData.reasonForVisit || ""}
                onChange={(e) => updateFormData('reasonForVisit', e.target.value)}
                className="mt-1"
              />
            </div>
            
            <div className="mb-6">
              <div className="flex items-start space-x-2">
                <Checkbox
                  id="agreement"
                  checked={agreed}
                  onCheckedChange={(checked) => setAgreed(checked as boolean)}
                  className="mt-1"
                />
                <Label htmlFor="agreement" className="text-sm text-gray-600 leading-relaxed">
                  I acknowledge that I have read and agree to the 
                  <a href="#" className="text-blue-500 hover:underline ml-1">Privacy Policy</a> and 
                  <a href="#" className="text-blue-500 hover:underline ml-1">Terms of Service</a>. 
                  I understand that this clinic follows HIPAA compliance for protecting patient information.
                </Label>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                type="submit" 
                disabled={bookingMutation.isPending}
                className="flex-1 healthcare-primary text-lg px-8 py-4 h-auto"
              >
                <Calendar className="mr-2 h-5 w-5" />
                {bookingMutation.isPending ? 'Scheduling...' : 'Schedule Appointment'}
              </Button>
              <Button 
                type="button"
                variant="outline"
                onClick={() => updateFormData('appointmentType', 'telemedicine')}
                className="flex-1 border-2 border-blue-500 text-blue-500 hover:bg-blue-50 text-lg px-8 py-4 h-auto"
              >
                <Video className="mr-2 h-5 w-5" />
                Book Telemedicine
              </Button>
            </div>
          </form>
          
          {/* Emergency Notice */}
          <div className="mt-8 p-4 bg-red-50 border border-red-200 rounded-lg">
            <div className="flex items-start">
              <AlertTriangle className="h-5 w-5 text-red-500 mt-1 mr-3 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-red-900 mb-1">Medical Emergency?</h4>
                <p className="text-red-700 text-sm">
                  If you are experiencing a medical emergency, please call 911 immediately or visit your nearest emergency room. 
                  Do not use this form for urgent medical situations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
