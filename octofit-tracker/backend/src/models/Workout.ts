import { Schema, model } from 'mongoose';

export interface WorkoutDocument {
  title: string;
  level: string;
  durationMinutes: number;
  focusArea: string;
  exercises: string[];
}

const workoutSchema = new Schema<WorkoutDocument>(
  {
    title: { type: String, required: true, trim: true },
    level: { type: String, required: true, trim: true },
    durationMinutes: { type: Number, required: true, min: 1 },
    focusArea: { type: String, required: true, trim: true },
    exercises: { type: [String], required: true },
  },
  { timestamps: true },
);

export const Workout = model<WorkoutDocument>('Workout', workoutSchema);