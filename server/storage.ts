import { type Doctor, type InsertDoctor, type Appointment, type InsertAppointment, type ContactMessage, type InsertContactMessage } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  // Doctors
  getDoctors(): Promise<Doctor[]>;
  getDoctorById(id: string): Promise<Doctor | undefined>;
  createDoctor(doctor: InsertDoctor): Promise<Doctor>;
  
  // Appointments
  getAppointments(): Promise<Appointment[]>;
  createAppointment(appointment: InsertAppointment): Promise<Appointment>;
  
  // Contact Messages
  getContactMessages(): Promise<ContactMessage[]>;
  createContactMessage(message: InsertContactMessage): Promise<ContactMessage>;
}

export class MemStorage implements IStorage {
  private doctors: Map<string, Doctor>;
  private appointments: Map<string, Appointment>;
  private contactMessages: Map<string, ContactMessage>;

  constructor() {
    this.doctors = new Map();
    this.appointments = new Map();
    this.contactMessages = new Map();
    
    // Initialize with sample doctors
    this.initializeDoctors();
  }

  private async initializeDoctors() {
    const sampleDoctors: InsertDoctor[] = [
      {
        name: "Dr. Sarah Johnson",
        specialty: "Family Medicine",
        bio: "Board-certified family physician with 12+ years of experience. Specializes in preventive care, chronic disease management, and women's health.",
        education: "MD, Johns Hopkins",
        experience: "12+ Years",
        imageUrl: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300"
      },
      {
        name: "Dr. Michael Chen",
        specialty: "Pediatrics",
        bio: "Dedicated pediatrician with expertise in child development, immunizations, and adolescent medicine. Fluent in English and Mandarin.",
        education: "MD, Stanford",
        experience: "8 Years",
        imageUrl: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300"
      },
      {
        name: "Dr. Robert Martinez",
        specialty: "Internal Medicine",
        bio: "Internal medicine specialist focusing on adult care, diabetes management, and cardiovascular health. 15+ years of clinical experience.",
        education: "MD, UCLA",
        experience: "15+ Years",
        imageUrl: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300"
      }
    ];

    for (const doctor of sampleDoctors) {
      await this.createDoctor(doctor);
    }
  }

  // Doctors
  async getDoctors(): Promise<Doctor[]> {
    return Array.from(this.doctors.values());
  }

  async getDoctorById(id: string): Promise<Doctor | undefined> {
    return this.doctors.get(id);
  }

  async createDoctor(insertDoctor: InsertDoctor): Promise<Doctor> {
    const id = randomUUID();
    const doctor: Doctor = { ...insertDoctor, id };
    this.doctors.set(id, doctor);
    return doctor;
  }

  // Appointments
  async getAppointments(): Promise<Appointment[]> {
    return Array.from(this.appointments.values());
  }

  async createAppointment(insertAppointment: InsertAppointment): Promise<Appointment> {
    const id = randomUUID();
    const appointment: Appointment = { 
      ...insertAppointment, 
      id, 
      preferredDoctor: insertAppointment.preferredDoctor || null,
      reasonForVisit: insertAppointment.reasonForVisit || null,
      createdAt: new Date() 
    };
    this.appointments.set(id, appointment);
    return appointment;
  }

  // Contact Messages
  async getContactMessages(): Promise<ContactMessage[]> {
    return Array.from(this.contactMessages.values());
  }

  async createContactMessage(insertMessage: InsertContactMessage): Promise<ContactMessage> {
    const id = randomUUID();
    const message: ContactMessage = { 
      ...insertMessage, 
      id, 
      phone: insertMessage.phone || null,
      subject: insertMessage.subject || null,
      createdAt: new Date() 
    };
    this.contactMessages.set(id, message);
    return message;
  }
}

export const storage = new MemStorage();
