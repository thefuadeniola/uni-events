import * as z from 'zod';

export const eventFormValidation = z.object({
    title: z.string().min(2, {message: "Username must be at least 2 caharacters"}),
    description: z.string().min(2, {message: "Username must be at least 2 caharacters"}).max(400, 'Description should be less than 400 characters'),
    location: z.string().min(3, 'Location must be at least 3 characters'),
    imageUrl: z.string(),
    startDateTime: z.date(),
    endDateTime: z.date(),
    categoryId: z.string(),
    price: z.string(),
    isFree: z.boolean(),
    url: z.string().url()
})
