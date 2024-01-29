// The following pattern is a technique used in node js applications especially in serverless environments like vercel.
// This technique is used to cache a database connection across multiple invocations of serverless api routes in next js

import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI

let cached = (global as any).mongoose || { conn: null, promise: null }

export const connectToDatabase = async () => {
    if (cached.conn) return cached.conn;

    if (!MONGODB_URI) throw new Error('MONGODB_URI is missing')

    cached.promise = cached.promise || mongoose.connect(MONGODB_URI, {
        dbName: 'Uni Events App',
        bufferCommands: false
    })

    cached.conn = await cached.promise;

    return cached.conn
}