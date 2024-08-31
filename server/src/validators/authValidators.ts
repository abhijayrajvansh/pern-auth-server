import { z } from 'zod';

export const authSchema = z.object({
  body: z.object({
    email: z.string().min(1, 'email is required').email('invalid email'),
    password: z.string().min(1, 'password is required').min(6, 'password must be at least 6 characters')
  })
})
