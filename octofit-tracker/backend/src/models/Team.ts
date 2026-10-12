import { Schema, model } from 'mongoose';

export interface TeamDocument {
  name: string;
  mascot: string;
  memberCount: number;
  weeklyGoalMinutes: number;
}

const teamSchema = new Schema<TeamDocument>(
  {
    name: { type: String, required: true, unique: true, trim: true },
    mascot: { type: String, required: true, trim: true },
    memberCount: { type: Number, required: true, min: 1 },
    weeklyGoalMinutes: { type: Number, required: true, min: 1 },
  },
  { timestamps: true },
);

export const Team = model<TeamDocument>('Team', teamSchema);