
import User from '../models/userModel.js';

export const test = (req, res) => {
  res.json({
    message: "Hello Programmer",
  });
};

export const CreatePlan = async (req, res) => {
  try {
    console.log(req.body);
    const {
      username,
      mobileNo,
      email,
      destination,
      totalMembers,
      totalDays,
      transportationPreference,
      foodPreference,
      MaxBudgetConstraint,
      isDisabledPersonCount,
    } = req.body;

    const newUser = new User({
      username,
      mobileNo,
      email,
      destination,
      totalMembers,
      totalDays,
      transportationPreference,
      foodPreference,
      MaxBudgetConstraint,
      isDisabledPersonCount,
    });

    await newUser.save();

    res.status(201).json({ message: 'User created successfully', user: newUser });
  } catch (error) {
    console.error('Error creating user:', error.message);
    res.status(500).json({ error: 'Internal Server Error', message: 'An error occurred during user creation.' });
  }
};