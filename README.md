 Sweet Shop Management System

A full-stack web application for managing a sweet shop inventory with secure authentication, role-based access, and inventory operations. The system allows users to browse and purchase sweets, while administrators manage sweets, stock levels, and pricing through a dedicated admin panel.

 Project Overview

The Sweet Shop Management System demonstrates full-stack development with a clean backend architecture, RESTful API design, secure authentication, and a responsive frontend interface.
The project is built to showcase scalability, security best practices, and real-world CRUD workflows.

 Key Features
 Authentication & Authorization

User registration and login using JWT

Secure password hashing with bcrypt

Role-based access control (Admin & User)

Protected routes for admin and dashboard features

Admin Features

Add, update, delete sweets

Restock inventory

Manage pricing

Stock validation to prevent overselling

User Features

View available sweets

Purchase sweets

Inventory-aware purchase flow

Secure logout

System Features

Inventory management with real-time stock checks

RESTful backend APIs

Clean and responsive UI

Backend developed using Test-Driven Development (TDD)

Tech Stack
Frontend

React

Vite

Custom CSS

Axios for API integration

Backend

Node.js

Express.js

MongoDB with Mongoose

JWT Authentication

bcrypt for password hashing

Testing

Jest

Supertest

mongodb-memory-server

Tools

Git & GitHub

Postman

 Assignment Alignment

This project fulfills the Full-Stack Developer Intern assignment requirements by implementing:

JWT-based authentication with secure password hashing

Protected routes and role-based authorization

Dashboard-driven CRUD operations on a sample entity (sweets)

Backend APIs for user management and inventory operations

Database integration using MongoDB

Clean, modular project structure designed for scalability

 Local Setup Instructions
Prerequisites

Node.js (v18 or above)

npm

MongoDB (local or Atlas)

🔹 Backend Setup
cd backend
npm install
npm start


Run backend tests:

npm test

🔹 Frontend Setup
cd frontend
npm install
npm run dev


The frontend will run on http://localhost:5173 by default.

 Scalability & Production Considerations

Environment-based configuration using .env

Stateless JWT authentication for horizontal scaling

Modular backend structure for easy feature expansion

Separate frontend and backend deployments

Database indexing for frequently accessed fields

Easy migration to Next.js or TailwindCSS if required

Repository Structure
/
├── frontend/   # React + Vite frontend
├── backend/    # Node.js + Express backend
├── .gitignore
└── README.md
