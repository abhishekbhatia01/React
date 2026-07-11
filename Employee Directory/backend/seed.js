const mongoose = require("mongoose");
const Employee = require("./models/Employee");

mongoose.connect("mongodb://127.0.0.1:27017/employeeDB");

const employees = [
  {
    name: "Abhishek Bhatia",
    email: "abhishek@example.com",
    department: "IT",
    designation: "Frontend Developer",
    salary: 65000,
  },
  {
    name: "Rahul Sharma",
    email: "rahul@example.com",
    department: "HR",
    designation: "HR Manager",
    salary: 70000,
  },
  {
    name: "Priya Singh",
    email: "priya@example.com",
    department: "Finance",
    designation: "Accountant",
    salary: 55000,
  },
  {
    name: "Aman Verma",
    email: "aman@example.com",
    department: "Marketing",
    designation: "Marketing Executive",
    salary: 60000,
  },
  {
    name: "Sneha Kapoor",
    email: "sneha@example.com",
    department: "Sales",
    designation: "Sales Executive",
    salary: 58000,
  },
  {
    name: "Rohit Mehta",
    email: "rohit@example.com",
    department: "IT",
    designation: "Backend Developer",
    salary: 80000,
  },
  {
    name: "Anjali Gupta",
    email: "anjali@example.com",
    department: "HR",
    designation: "Recruiter",
    salary: 50000,
  },
  {
    name: "Karan Malhotra",
    email: "karan@example.com",
    department: "Finance",
    designation: "Financial Analyst",
    salary: 72000,
  },
  {
    name: "Neha Arora",
    email: "neha@example.com",
    department: "Marketing",
    designation: "SEO Specialist",
    salary: 62000,
  },
  {
    name: "Vikas Yadav",
    email: "vikas@example.com",
    department: "Sales",
    designation: "Sales Manager",
    salary: 85000,
  },
  {
    name: "Pooja Mishra",
    email: "pooja@example.com",
    department: "IT",
    designation: "Full Stack Developer",
    salary: 90000,
  },
  {
    name: "Arjun Patel",
    email: "arjun@example.com",
    department: "Finance",
    designation: "Finance Manager",
    salary: 95000,
  },
  {
    name: "Simran Kaur",
    email: "simran@example.com",
    department: "HR",
    designation: "HR Executive",
    salary: 48000,
  },
  {
    name: "Nikhil Jain",
    email: "nikhil@example.com",
    department: "Marketing",
    designation: "Content Strategist",
    salary: 61000,
  },
  {
    name: "Ayush Saxena",
    email: "ayush@example.com",
    department: "Sales",
    designation: "Business Development Executive",
    salary: 57000,
  },
  {
    name: "Megha Sharma",
    email: "megha@example.com",
    department: "IT",
    designation: "React Developer",
    salary: 76000,
  },
  {
    name: "Harsh Agarwal",
    email: "harsh@example.com",
    department: "IT",
    designation: "DevOps Engineer",
    salary: 98000,
  },
  {
    name: "Riya Bansal",
    email: "riya@example.com",
    department: "Finance",
    designation: "Tax Consultant",
    salary: 69000,
  },
  {
    name: "Saurabh Kumar",
    email: "saurabh@example.com",
    department: "Marketing",
    designation: "Digital Marketing Manager",
    salary: 88000,
  },
  {
    name: "Ishita Verma",
    email: "ishita@example.com",
    department: "Sales",
    designation: "Sales Coordinator",
    salary: 52000,
  },
];

const seedDatabase = async () => {
  try {
    await Employee.deleteMany();

    await Employee.insertMany(employees);

    console.log("Database Seeded Successfully");

    process.exit();
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

seedDatabase();