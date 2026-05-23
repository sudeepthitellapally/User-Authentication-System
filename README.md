Full Stack Authentication System
Features
User Registration
Secure Login
Password Hashing using bcryptjs
JWT Authentication
Protected Routes
MongoDB Database
React Frontend
Express Backend
Role-based structure ready
Tech Stack
Frontend:
React + Vite
Backend:
Node.js
Express.js
MongoDB
JWT
bcryptjs
Setup Instructions
Backend Setup
```bash
cd backend
npm install
```
Create `.env` file:
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```
Run backend:
```bash
npm run dev
```
Frontend Setup
```bash
cd frontend
npm install
npm run dev
```
Frontend runs on:
http://localhost:5173
Backend runs on:
http://localhost:5000
API Endpoints
Register
POST `/api/auth/register`
Login
POST `/api/auth/login`
Protected Route
GET `/api/auth/profile`
Optional Enhancements
Refresh Tokens
Email Verification
Forgot Password
Admin Role Management
OAuth Login
