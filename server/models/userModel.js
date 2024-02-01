import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  mobileNo: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  destination: {
    type: String,
    required: true,
  },
  totalMembers: {
    type: Number,
    required: true,
  },
  totalDays: {
    type: Number,
    required: true,
  },
  transportationPreference: {
    type: String,
    required: true,
    enum: ['bus', 'train', 'plane'],
  },
  foodPreference: {
    type: String,
    enum: ['veg', 'non-veg', 'jain-veg'],
    required: true,
  },
  MaxBudgetConstraint: {
    type: Number,
  },
  isDisabledPersonCount: {
    type: Number,
    default: 0,
  }
}, {
  timestamps: true,
});

const User = mongoose.model('User', userSchema);

export default User;
