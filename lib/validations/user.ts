import * as z from 'zod';

export const userValidation = z.object({
    profile_photo: z.string().url().nonempty(),
    name: z.string().min(3, { message: 'Min 3 characters' }).max(30),
    lastName: z.string().min(3, { message: 'Min 3 characters' }).max(30),
    username: z.string().min(3, { message: 'Min 3 characters' }).max(30),
    category: z.string(),
    description: z.string()
})