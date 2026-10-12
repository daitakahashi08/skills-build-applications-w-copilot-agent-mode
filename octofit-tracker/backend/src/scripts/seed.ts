import mongoose from 'mongoose';
import { Activity } from '../models/Activity.js';
import { LeaderboardEntry } from '../models/LeaderboardEntry.js';
import { Team } from '../models/Team.js';
import { User } from '../models/User.js';
import { Workout } from '../models/Workout.js';

const connectionString = process.env.MONGODB_URI || 'mongodb://localhost:27017/octofit_db';

const teams = [
  { name: 'Trailblazers', mascot: 'Comet', memberCount: 4, weeklyGoalMinutes: 720 },
  { name: 'Core Crushers', mascot: 'Atlas', memberCount: 3, weeklyGoalMinutes: 600 },
  { name: 'Sprint Squad', mascot: 'Bolt', memberCount: 5, weeklyGoalMinutes: 840 },
];

const users = [
  {
    username: 'maya_runner',
    email: 'maya.runner@example.com',
    fullName: 'Maya Chen',
    team: 'Trailblazers',
    goal: 'Run a sub-25 minute 5K',
    joinedAt: new Date('2026-09-02'),
  },
  {
    username: 'leo_lifts',
    email: 'leo.lifts@example.com',
    fullName: 'Leo Martinez',
    team: 'Core Crushers',
    goal: 'Build consistent strength training habits',
    joinedAt: new Date('2026-08-18'),
  },
  {
    username: 'ari_cycles',
    email: 'ari.cycles@example.com',
    fullName: 'Ari Patel',
    team: 'Sprint Squad',
    goal: 'Cycle 100 miles per week',
    joinedAt: new Date('2026-07-25'),
  },
  {
    username: 'sam_swims',
    email: 'sam.swims@example.com',
    fullName: 'Sam Rivera',
    team: 'Trailblazers',
    goal: 'Improve cardio endurance',
    joinedAt: new Date('2026-10-01'),
  },
];

const activities = [
  {
    username: 'maya_runner',
    activityType: 'Running',
    durationMinutes: 42,
    caloriesBurned: 410,
    activityDate: new Date('2026-10-10T07:30:00Z'),
  },
  {
    username: 'leo_lifts',
    activityType: 'Strength Training',
    durationMinutes: 55,
    caloriesBurned: 360,
    activityDate: new Date('2026-10-10T18:00:00Z'),
  },
  {
    username: 'ari_cycles',
    activityType: 'Cycling',
    durationMinutes: 75,
    caloriesBurned: 640,
    activityDate: new Date('2026-10-11T06:45:00Z'),
  },
  {
    username: 'sam_swims',
    activityType: 'Swimming',
    durationMinutes: 38,
    caloriesBurned: 315,
    activityDate: new Date('2026-10-11T12:15:00Z'),
  },
];

const leaderboard = [
  { username: 'ari_cycles', team: 'Sprint Squad', rank: 1, points: 1280, weeklyMinutes: 210 },
  { username: 'maya_runner', team: 'Trailblazers', rank: 2, points: 1135, weeklyMinutes: 185 },
  { username: 'leo_lifts', team: 'Core Crushers', rank: 3, points: 980, weeklyMinutes: 165 },
  { username: 'sam_swims', team: 'Trailblazers', rank: 4, points: 820, weeklyMinutes: 138 },
];

const workouts = [
  {
    title: '5K Tempo Builder',
    level: 'Intermediate',
    durationMinutes: 35,
    focusArea: 'Running endurance',
    exercises: ['Warm-up jog', 'Tempo intervals', 'Cooldown walk'],
  },
  {
    title: 'Full-Body Strength Circuit',
    level: 'Beginner',
    durationMinutes: 30,
    focusArea: 'Functional strength',
    exercises: ['Goblet squats', 'Push-ups', 'Dumbbell rows', 'Plank holds'],
  },
  {
    title: 'Cycling Power Climb',
    level: 'Advanced',
    durationMinutes: 50,
    focusArea: 'Cycling power',
    exercises: ['Cadence warm-up', 'Hill repeats', 'Recovery spin'],
  },
];

/**
 * Seed the octofit_db database with test data
 */
async function seedDatabase() {
  try {
    await mongoose.connect(connectionString);

    console.log('Connected to octofit_db');
    console.log('Seed the octofit_db database with test data');

    await Promise.all([
      User.deleteMany({}),
      Team.deleteMany({}),
      Activity.deleteMany({}),
      LeaderboardEntry.deleteMany({}),
      Workout.deleteMany({}),
    ]);

    await Promise.all([
      User.insertMany(users),
      Team.insertMany(teams),
      Activity.insertMany(activities),
      LeaderboardEntry.insertMany(leaderboard),
      Workout.insertMany(workouts),
    ]);

    console.log('Database seeding complete');
    await mongoose.disconnect();
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();
