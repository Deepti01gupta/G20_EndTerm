# G20_EndTerm

# 🎯 Practice Interview Platform  
**Matching Interviewer & Interviewee for Real-World Mock Interviews**

A full-stack web platform that connects **interviewees** with **experienced interviewers** for real-time mock interviews, structured feedback, and performance tracking. This platform helps students and job seekers prepare confidently for real interviews while enabling professionals to mentor and guide them.

---

## 🚀 Problem Statement

Job seekers and students often struggle to prepare for interviews due to lack of real-time feedback and realistic practice opportunities. Meanwhile, experienced professionals want to mentor but lack a centralized platform to connect with learners.

This project solves that gap by providing a **Practice Interview Platform** that:
- Matches interviewees with suitable interviewers
- Enables real-time video/audio interviews
- Allows structured feedback & ratings
- Tracks interview history & performance improvement

---

## 👥 User Roles

### ✅ Interviewee
- Register & login
- Create profile with skills & improvement areas
- Request or auto-match with interviewers
- Schedule & attend live interviews
- Receive structured feedback and ratings
- Track progress over time

### ✅ Interviewer
- Register & login
- Create professional profile with expertise
- Accept or get matched with interviewees
- Conduct live mock interviews
- Give feedback & guidance
- View interview history

### ✅ Admin
- Manage users & sessions
- Monitor platform activity
- View platform analytics & skill trends

---

## 🧩 Core Features

### 🔹 Functional Features
- User Authentication (Interviewer / Interviewee / Admin)
- Profile Management
- Smart Matching System (skills + availability)
- Scheduling & Calendar Integration
- Real-Time Video/Audio Interviews
- Feedback & Rating System
- Interview History & Progress Tracking
- Notifications & Alerts

### 🔹 Non-Functional Features
- Scalable architecture
- Low-latency communication
- Secure authentication
- Cross-platform responsive UI
- Reliable data persistence

---

## 🛠️ Tech Stack

### Frontend
- React (Vite)
- Tailwind CSS
- Axios
- React Router DOM
- Context API

### Backend
- Node.js
- Express.js
- MongoDB + Mongoose
- JWT Authentication
- Socket.IO (for real-time features)

### Real-Time Communication
- Jitsi / WebRTC (Video Interviews)

### Tools & Platform
- GitHub
- Postman
- Cloud Hosting (AWS / Render / Vercel)

---

## 🏗️ System Architecture

```text
React Frontend  →  Express API  →  MongoDB
        ↓                  ↓
  Video (Jitsi)        Socket.IO




Team Members

This project was developed by the G20 team:

Name	Email	Role
Deepti Gupta	deepti.gupta_cs23@gla.ac.in
	Captain
Kirti Chaudhary	(email not provided)	Member
Yachna Raghav	(email not provided)	Member
Aditya Varshney	(email not provided)	Member
Sanskar Khandelwal	(email not provided)	Member