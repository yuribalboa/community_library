import {z} from 'zod';

const userSchema = z.object({
    username: z.string().min(3, "Username is required"),
    email: z.string.email("Invalid Email"),
    password: z.string.min(6, "Password must be at least 6 characters long"),
    avatar: z.string.url("Invalid URL").optiomal()
});

export {userSchema}