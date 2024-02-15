import { Schema, model, models } from "mongoose";

const AccountSchema = new Schema({
    clerkId: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    username: { type: String, required: true, unique: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    image: { type: String, required: true },
    category: { type: String, required: true },
    description: { type: String, required: false }
})

const Account = models.Account || model('Account', AccountSchema)

export default Account