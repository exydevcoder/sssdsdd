import { z } from 'zod';

export const formValidation = z.object({
  name: z
    .string()
    .min(1, 'Name is required')
    .min(2, 'Name must be at least 2 characters'),
  email: z
    .string()
    .min(1, 'Email is required')
    .email('Please enter a valid email address'),
  additionalInfo: z
    .string()
    .optional()
});

export type FormValidationData = z.infer<typeof formValidation>;