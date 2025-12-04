# Practice Interview Platform

A full-stack MERN application designed to connect interviewers and interviewees for real-time practice interviews with video calling and feedback capabilities.

## 🚀 Features

- **Role-Based Access**: Distinct dashboards for Interviewers and Interviewees.
- **Real-Time Matching**: Interviewees can browse and request sessions with available interviewers.
- **Video Interviewing**: Integrated WebRTC video calls using Socket.IO for signaling.
- **Feedback System**: Structured feedback (Rating, Strengths, Improvements) provided by interviewers after sessions.
- **Session History**: Comprehensive history of past interviews and feedback.

## 🛠 Tech Stack

- **Frontend**: React (Vite), TailwindCSS, Axios, Socket.IO Client, Simple-Peer
- **Backend**: Node.js, Express.js, MongoDB, Mongoose, Socket.IO, JWT Authentication
- **DevOps**: Git, GitHub Flow (Simulated)

## 📦 Installation

### Prerequisites
- Node.js (v18+)
- MongoDB (Local or Atlas)

### Backend Setup
1. Navigate to `backend` folder:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create `.env` file:
   ```env
   PORT=5000
   MONGO_URI=mongodb://localhost:27017/interview_platform
   JWT_SECRET=your_secret_key
   ```
4. Start server:
   ```bash
   npm run dev
   ```

### Frontend Setup
1. Navigate to `frontend` folder:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start development server:
   ```bash
   npm run dev
   ```

## 🏗 Architecture

The project follows a modular MVC architecture for the backend and a component-based structure for the frontend.

### Backend Structure
- `controllers/`: Logic for Auth, Sessions, and Users.
- `models/`: Mongoose schemas (User, Session).
- `routes/`: API endpoints.
- `socket/`: Socket.IO event handlers.
- `middleware/`: Auth protection.

### Frontend Structure
- `pages/`: Main views (Login, Dashboard, Room).
- `components/`: Reusable UI elements.
- `context/`: Global state (Auth).
- `utils/`: API helpers.

## 👥 Team Workflow (Simulation)

This project simulates a collaborative effort by 5 developers using Git feature branches:
- `feature/auth-module`: Authentication & User Models
- `feature/profile-system`: User Profiles & Dashboard
- `feature/matching-and-sessions`: Session creation logic
- `feature/webrtc-video-call`: Video implementation
- `feature/feedback-history`: Feedback & History views

## 📝 API Documentation

### Auth
- `POST /api/auth/register`: Register new user
- `POST /api/auth/login`: Login user
- `GET /api/auth/interviewers`: Get list of interviewers

### Sessions
- `POST /api/sessions`: Create new session
- `GET /api/sessions`: Get user sessions
- `POST /api/sessions/:id/feedback`: Submit feedback

## 📄 License
MIT