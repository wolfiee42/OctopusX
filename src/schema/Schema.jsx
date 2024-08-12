import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .min(1, "Name is required")
    .regex(
      /^[a-zA-Z\s]+$/,
      "Name should not contain numbers or special characters"
    ),
  email: z.string().min(1, "Email is required").email("Invalid email address"),
  message: z
    .string()
    .min(1, "Message is required")
    .refine((val) => !/<[^>]*>/.test(val), {
      message: "Message should not contain HTML tags",
    }),
});
