const Project = require("../models/Project");

const projects = [
  {
    title: "WanderLust",
    description: "A full-stack Airbnb-style web application where users can list, browse, and book unique stays. Features complete authentication, image uploads to Cloudinary, and interactive Mapbox maps for location visualization.",
    techStack: ["Node.js", "Express.js", "MongoDB", "Mongoose", "Passport.js", "Cloudinary", "Mapbox", "EJS", "Bootstrap"],
    githubUrl: "https://github.com/rahulkumar",
    liveUrl: "#",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&q=80",
    featured: true,
    order: 1,
  },
  {
    title: "Auth System",
    description: "A robust authentication system implementing secure login and signup flows using Passport.js with local strategy and session management. Includes password hashing, protected routes, and persistent sessions.",
    techStack: ["Node.js", "Express.js", "MongoDB", "Passport.js", "express-session", "bcrypt", "EJS"],
    githubUrl: "https://github.com/rahulkumar",
    liveUrl: "#",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&q=80",
    featured: true,
    order: 2,
  },
  {
    title: "Flask Task Manager",
    description: "A clean and functional task management CRUD application built with Python Flask and SQLite. Supports creating, reading, updating, and deleting tasks with a minimalist interface.",
    techStack: ["Python", "Flask", "SQLite", "SQLAlchemy", "HTML", "CSS"],
    githubUrl: "https://github.com/rahulkumar",
    liveUrl: "#",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80",
    featured: false,
    order: 3,
  },
  {
    title: "Mini WhatsApp (CRUD APIs)",
    description: "A RESTful API backend simulating core WhatsApp messaging features. Built entirely with Node.js and Express, implementing full CRUD operations with proper HTTP methods and status codes.",
    techStack: ["Node.js", "Express.js", "REST APIs", "Postman", "UUID"],
    githubUrl: "https://github.com/rahulkumar",
    liveUrl: "#",
    image: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=800&q=80",
    featured: false,
    order: 4,
  },
];

const seedDB = async () => {
  try {
    const count = await Project.countDocuments();
    if (count === 0) {
      await Project.insertMany(projects);
      console.log("🌱 Database seeded with projects");
    }
  } catch (err) {
    console.error("Seed error:", err.message);
  }
};

module.exports = seedDB;
