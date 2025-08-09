import type { VercelRequest, VercelResponse } from '@vercel/node';
import { storage } from '../server/storage';
import { insertAppointmentSchema } from '../shared/schema';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const validatedData = insertAppointmentSchema.parse(req.body);
    const appointment = await storage.createAppointment(validatedData);
    res.status(201).json(appointment);
  } catch (error) {
    console.error('Error creating appointment:', error);
    if (error instanceof Error) {
      res.status(400).json({ message: error.message });
    } else {
      res.status(500).json({ message: 'Failed to create appointment' });
    }
  }
}
