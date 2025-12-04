 Practice Interview Platform (Matching 
Interviewer and Interviewee)  
1. Background  
Job seekers and students often struggle to prepare for interviews due to lack of feedback 
and opportunities to practice with experienced professionals. Meanwhile, experienced 
interviewers may want to contribute or mentor but have no centralized platform to connect 
with candidates.  
Your challenge is to build a full-stack Practice Interview Platform that matches 
interviewees with suitable interviewers based on skills, experience, and availability, 
enabling realistic interview practice sessions, feedback, and progress tracking.  
2. Challenge  
Design and develop a web/mobile platform where users can:  
● Register as either an interviewer or interviewee.  
● Create and manage profiles with skills, experience, and availability.  
● Schedule and join practice interview sessions via video or audio.  
● Provide and receive structured feedback on performance.  
● Track interview history, ratings, and improvements over time.  
The system should include real-time communication, matching logic, scheduling, and 
analytics to help users improve their interview skills efficiently.  
3. User Roles & Flow  
Interviewee  
● Registers and logs into the platform.  
● Creates a profile with skills, experience, and areas for improvement.  
● Browses available interviewers or requests automatic matching based on skills and 
availability.  
● Schedules and attends practice interviews via video/audio sessions.  
● Receives structured feedback, ratings, and improvement suggestions.  
● Reviews previous interview sessions and tracks progress over time.  
Interviewer  
● Registers and logs into the platform.  
● Creates a profile detailing expertise, industry experience, and availability.  
● Receives interview requests or is automatically matched with interviewees.  
● Conducts live practice interviews via video/audio.  
● Provides feedback, ratings, and guidance after each session.  
● Views interview history for assigned interviewees.  
Admin  
● Manages users, sessions, and platform settings.  
● Monitors activity for quality and misuse.  
● Generates analytics on usage, most active users, and skill trends.  
4. Core Requirements  
Functional  
● User Profiles: Detailed profiles with skills, experience, and preferences.  
● Matching System: Automatic or manual pairing of interviewees with interviewers 
based on skills, availability, and preferences.  
● Scheduling & Calendar: Book sessions, receive reminders, and sync with external 
calendars.  
● Real-Time Video/Audio: Conduct interviews with low latency.  
● Feedback & Ratings: Structured feedback forms and rating system after each 
session.  
● Interview History: Track sessions, progress, and performance analytics.  
● Notifications: Alerts for session requests, upcoming interviews, and feedback 
received.  
Non-Functional  
● Scalability: Support thousands of simultaneous users and multiple concurrent 
interviews.  
● Low Latency: Video/audio sessions must have minimal delay (<3 seconds).  
● Security & Privacy: End-to-end encrypted sessions, secure login, and role-based 
access.  
● Cross-Platform: Accessible via responsive web app or mobile apps.  
● Reliability: Auto-reconnect for dropped sessions and persistence of feedback data.  
5. Technical Hints (Teams may choose their own stack)  
● Frontend: React/Next.js, Vue, Angular, or Flutter  
● Backend: Node.js/Express, Django, or Spring Boot with WebSocket support  
● Database: PostgreSQL/MySQL for users, sessions, and feedback; Redis for caching 
and matchmaking  
● Real-Time Communication: WebRTC, Socket.IO, or Agora SDK  
● Notifications: Firebase Cloud Messaging, Twilio, or email services  
● Cloud/Infra: AWS, GCP, or Azure with scalable hosting and storage  
● Optional Features: AI-based skill recommendations, interview templates, or 
analytics dashboards  
6. Hackathon Deliverables  
● Working Prototype:  
○ User registration and profile management  
○ Real-time interviewer-interviewee matching  
○ Video/audio practice sessions with feedback system  
○ Scheduling and notifications  
● Technical Documentation:  
○ Architecture diagram  
○ API documentation  
○ Database schema and real-time flow  
● Demo & Pitch: 5–7 minute live demonstration showing end-to-end interview workflow  
7. Judging Criteria  
Category  
User Experience & Interface  
Real-Time Communication Performance  
Weight  
25%  
25%  
Scalability & Architecture  
Completeness (Matching, Scheduling, Feedback, History)  
Innovation (analytics, skill recommendations, gamification)  
20%  
20%  
10%  
8. Outcome  
A robust practice interview platform that connects interviewees with skilled interviewers, 
enabling realistic practice, structured feedback, and progress tracking. The system helps 
users prepare confidently for real-world interviews while fostering mentorship and skill 
development. 