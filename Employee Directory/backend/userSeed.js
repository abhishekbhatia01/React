const mongoose = require("mongoose");
const dotenv = require("dotenv");
const User = require("./models/User");

dotenv.config();

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

const users = [
  {
    name: "Abhishek",
    email: "abhishek@gmail.com",
    password: "123456",
  },
  {
    name: "Rahul",
    email: "rahul@gmail.com",
    password: "123456",
  },
  {
    name: "Aman",
    email: "aman@gmail.com",
    password: "123456",
  },
  {
    name: "Priya",
    email: "priya@gmail.com",
    password: "123456",
  },
];

const seedUsers = async () => {
  try {
    // Delete old users
    await User.deleteMany();

    // Insert new users
    await User.insertMany(users);

    console.log("Users Seeded Successfully ✅");

    process.exit();
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

seedUsers();