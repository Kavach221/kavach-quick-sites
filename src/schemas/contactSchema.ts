import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be less than 50 characters")
    .regex(/^[a-zA-Z\s]+$/, "Name can only contain letters and spaces"),
  email: z
    .string()
    .email("Please enter a valid email address")
    .max(100, "Email must be less than 100 characters"),
  project: z
    .string()
    .min(10, "Project details must be at least 10 characters")
    .max(1000, "Project details must be less than 1000 characters")
});

export type ContactFormData = z.infer<typeof contactSchema>;