# 🏗️ Practice Interview Platform — Architecture Overview

This document describes the **frontend architecture** of the Practice Interview Platform built using **React, Vite, and TailwindCSS**. It outlines the component organization, data flow, technology stack, and integration design.

---

## 🧱 1. High-Level Architecture

┌────────────────────────┐
│ Frontend UI │
│ (React + Vite + TW) │
└──────────┬─────────────┘
│
▼
┌────────────────────────┐
│ React Components │
│ Pages + UI Elements │
└──────────┬─────────────┘
│
▼
┌──────────────────────────────┐
│ Context Layer (Auth) │
│ - Auth state (login/logout) │
│ - User role (interviewee/er) │
└──────────┬───────────────────┘
│
▼
┌──────────────────────────────┐
│ API Layer (Axios) │
│ authAPI, userAPI, matchAPI │
│ scheduleAPI, feedbackAPI │
└──────────┬───────────────────┘
│ HTTP Requests
▼
┌────────────────────────┐
│ Backend (Node/Express) │
│ Auth, Profile, Matching │
│ Scheduling, Feedback │
└────────────────────────┘


The frontend fully decouples UI logic from backend using a clean **API abstraction layer**.

---

## 🧩 2. Folder Structure



src/
│
├── api/ # Axios API wrappers
│ ├── authAPI.js
│ ├── userAPI.js
│ ├── matchAPI.js
│ ├── scheduleAPI.js
│ ├── feedbackAPI.js
│ └── axiosInstance.js
│
├── components/
│ ├── ui/ # Shared UI elements
│ │ ├── Button.jsx
│ │ ├── Input.jsx
│ │ └── Card.jsx
│ │
│ ├── Navbar.jsx
│ ├── ProfileForm.jsx
│ ├── InterviewerCard.jsx
│ ├── VideoChat.jsx
│ └── FeedbackForm.jsx
│
├── pages/ # Route-based pages
│ ├── Register.jsx
│ ├── Login.jsx
│ ├── Dashboard.jsx
│ ├── Match.jsx
│ ├── Schedule.jsx
│ ├── InterviewRoom.jsx
│ └── History.jsx
│
├── context/
│ └── AuthContext.jsx # Auth state management
│
├── utils/
│ ├── socket.js # WebRTC/Socket placeholder
│ └── validators.js # Reusable validation helpers
│
├── hooks/
│ └── useWebRTC.js # Ready for WebRTC integration
│
├── App.jsx # App router + protected routes
├── main.jsx
└── index.css # Tailwind CSS styles


---

## 🧠 3. Component Architecture

### UI Layer
Reusable UI components:
- `Button`
- `Input`
- `Card`

These ensure consistency and speed of development.

### Feature Components
- `ProfileForm` → Profile setup for both roles  
- `InterviewerCard` → Cards in the matching system  
- `FeedbackForm` → Post-interview evaluation  
- `VideoChat` → Placeholder for Google Meet / WebRTC  

---

## 🔐 4. Authentication Architecture

The AuthContext provides:
- Logged-in user  
- Token management  
- Role (interviewee / interviewer)

Flow:



Login/Register ➝ AuthContext.login() ➝ Store user in localStorage ➝ ProtectedRoute checks auth


This ensures secure routing and local persistence.

---

## 🔌 5. API Layer Architecture

Each module handles one feature area:



authAPI.js → login, register
userAPI.js → profile CRUD
matchAPI.js → fetch interviewers
scheduleAPI.js → create sessions, fetch sessions
feedbackAPI.js → submit/view feedback


All requests pass through:



axiosInstance.js →
attaches token
sets base URL
handles errors


This creates a clean separation between UI and backend.

---

## 🎨 6. Styling Architecture

- TailwindCSS utility classes for rapid design  
- Theme customization in `tailwind.config.js`  
- Consistent components with shared styles  

Tailwind ensures:
- Fast styling
- Consistent dark UI
- No CSS clutter or duplication

---

## 🌐 7. Routing Architecture

Routes defined in `App.jsx`:



/register
/login
/dashboard
/match
/schedule/:interviewerId
/interview/:sessionId
/history


ProtectedRoute ensures only authenticated users access main features.

---

## 🎥 8. Interview Session Architecture

Currently MVP-compatible:



VideoChat Component
|
└── loads Google Meet Link (from backend)


Later, you can extend `useWebRTC.js` for:
- Direct peer connection  
- Custom interview room UI  
- Whiteboard or code editor  

---

## 📅 9. Scheduling Architecture

Flow:



Select Interviewer → Pick Date/Time → POST to backend → Session ID created


Backend may auto-generate:



Google Meet link
Session status (pending/accepted)


---

## ⭐ 10. Feedback Architecture

Flow:



Interviewer joins interview → completes FeedbackForm → stored per session
Interviewee History page uses feedbackAPI.getMyHistory()


Supports:
- Rating  
- Strengths  
- Weaknesses  
- Suggestions  

---

## 🔮 11. Future Architecture Enhancements

1. **Socket.IO**
   - Real-time session updates  
   - Typing indicators  
   - Live interviewer availability  

2. **WebRTC Integration**
   - Custom-built video interview rooms  
   - Screen sharing  
   - Candidate collaboration editor  

3. **AI Architectures**
   - Skill gap analysis  
   - Auto-generated interview questions  
   - Interview scoring engine  

4. **Analytics**
   - Progress dashboards  
   - Trends based on skills  
   - Interviewers' performance metrics  

---

## 📝 12. Summary

The architecture is:

- Clean  
- Modular  
- Extensible  
- Optimized for rapid MVP development  

This document serves as a clear guide for developers, contributors, and hackathon judges reviewing your code structure.
