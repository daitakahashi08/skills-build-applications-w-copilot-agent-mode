import { Schema, model } from 'mongoose';

export interface UserDocument {
  username: string;
  email: string;
  fullName: string;
  team: string;
  goal: string;
  joinedAt: Date;
}

const userSchema = new Schema<UserDocument>(
  {
    username: { type: String, required: true, unique: true, trim: true },
    email: { type: String, required: true, unique: true, trim: true },
    fullName: { type: String, required: true, trim: true },
    team: { type: String, required: true, trim: true },
    goal: { type: String, required: true, trim: true },
    joinedAt: { type: Date, required: true },
  },
  { timestamps: true },
);

export const User = model<UserDocument>('User', userSchema);