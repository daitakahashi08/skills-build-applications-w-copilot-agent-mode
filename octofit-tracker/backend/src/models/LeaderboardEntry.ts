import { Schema, model } from 'mongoose';

export interface LeaderboardEntryDocument {
  username: string;
  team: string;
  rank: number;
  points: number;
  weeklyMinutes: number;
}

const leaderboardEntrySchema = new Schema<LeaderboardEntryDocument>(
  {
    username: { type: String, required: true, trim: true },
    team: { type: String, required: true, trim: true },
    rank: { type: Number, required: true, min: 1 },
    points: { type: Number, required: true, min: 0 },
    weeklyMinutes: { type: Number, required: true, min: 0 },
  },
  { timestamps: true },
);

export const LeaderboardEntry = model<LeaderboardEntryDocument>('LeaderboardEntry', leaderboardEntrySchema);