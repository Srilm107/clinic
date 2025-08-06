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
        specialty: "Family Medicine & Women's Health",
        bio: "Board-certified family physician with 12+ years of experience providing comprehensive care for patients of all ages. Dr. Johnson specializes in preventive medicine, chronic disease management, women's health, and geriatric care. She is passionate about building long-term relationships with her patients and their families, focusing on preventive care to maintain optimal health. Dr. Johnson completed her residency at Massachusetts General Hospital and is certified by the American Board of Family Medicine.",
        education: "MD, Johns Hopkins University School of Medicine",
        experience: "12+ Years",
        imageUrl: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300"
      },
      {
        name: "Dr. Michael Chen",
        specialty: "Pediatrics & Adolescent Medicine",
        bio: "Dr. Chen is a dedicated pediatrician with extensive expertise in child development, behavioral pediatrics, immunizations, and adolescent medicine. He provides compassionate care for infants, children, and teenagers, working closely with families to ensure healthy development. Dr. Chen is fluent in English and Mandarin, making him an excellent choice for diverse families in our community. He completed his pediatric residency at UCSF Benioff Children's Hospital and is board-certified by the American Board of Pediatrics.",
        education: "MD, Stanford University School of Medicine",
        experience: "8 Years",
        imageUrl: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300"
      },
      {
        name: "Dr. Robert Martinez",
        specialty: "Internal Medicine & Cardiology",
        bio: "Dr. Martinez is an experienced internal medicine physician specializing in adult primary care, cardiovascular health, diabetes management, and preventive medicine. With over 15 years of clinical experience, he has helped thousands of patients manage chronic conditions and maintain optimal health. Dr. Martinez is particularly skilled in managing complex medical conditions and coordinating care with specialists when needed. He completed his internal medicine residency at UCLA Medical Center and holds board certifications in both Internal Medicine and Cardiovascular Disease.",
        education: "MD, UCLA David Geffen School of Medicine",
        experience: "15+ Years",
        imageUrl: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300"
      },
      {
        name: "Dr. Emily Rodriguez",
        specialty: "Family Medicine & Mental Health",
        bio: "Dr. Rodriguez is a family medicine physician with special training in behavioral health and mental wellness. She provides comprehensive primary care while addressing the mental health needs of her patients, including anxiety, depression, and stress management. Dr. Rodriguez believes in treating the whole person, not just symptoms, and is committed to creating a safe, supportive environment for all patients. She completed dual residencies in Family Medicine and Psychiatry at the University of California San Francisco.",
        education: "MD, University of California San Francisco",
        experience: "10 Years",
        imageUrl: "https://images.unsplash.com/photo-1594824475360-d95b0ac7d36b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300"
      },
      {
        name: "Dr. James Wilson",
        specialty: "Urgent Care & Sports Medicine",
        bio: "Dr. Wilson specializes in urgent care medicine and sports medicine, providing immediate care for non-life-threatening injuries and illnesses. He has extensive experience treating sprains, fractures, lacerations, infections, and other acute medical conditions. Dr. Wilson also provides comprehensive sports medicine services, including injury prevention, performance optimization, and rehabilitation. He is certified in Advanced Cardiac Life Support (ACLS) and serves as our clinic's urgent care director.",
        education: "MD, University of Washington School of Medicine",
        experience: "9 Years",
        imageUrl: "https://images.unsplash.com/photo-1566308087-a6cc3ba16cf4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300"
      },
      {
        name: "Dr. Lisa Thompson",
        specialty: "Nurse Practitioner & Chronic Care",
        bio: "Dr. Thompson is a board-certified Family Nurse Practitioner with expertise in chronic disease management, diabetes care, and preventive health. She works collaboratively with our physicians to provide comprehensive care, specializing in patient education and lifestyle counseling. Dr. Thompson has a particular interest in helping patients manage diabetes, hypertension, and other chronic conditions through evidence-based treatment plans and ongoing support.",
        education: "DNP, University of Pennsylvania",
        experience: "7 Years",
        imageUrl: "https://images.unsplash.com/photo-1638202993928-7267aad84c31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300"
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
