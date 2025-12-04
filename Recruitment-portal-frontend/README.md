# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## 🚀 Recruitment Portal – React + Vite Frontend

![Vite](https://img.shields.io/badge/Vite-4.5.0-yellow?logo=vite&logoColor=white)
![React](https://img.shields.io/badge/React-18.2.0-blue?logo=react&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3-purple?logo=bootstrap&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow?logo=javascript&logoColor=black)
![License](https://img.shields.io/badge/License-MIT-green)
[![Live Demo](https://img.shields.io/badge/Live-Demo-blue?logo=appveyor&logoColor=white)](https://recruitment-portal-frontend-react.vercel.app/)

---

## 🌟 Recruitment Portal – Overview

Welcome to the **Recruitment Portal**! 🎯  
A **React + Vite frontend** application built for job seekers and employers. The portal offers a **clean, responsive interface**, ready API integration, and smooth navigation across all devices.  

> “A professional recruitment experience, fully responsive and easy to use.”  

---

## 📌 Table of Contents

1. [Features](#-features)  
2. [Technologies Used](#-technologies-used)  
3. [Project Structure](#-project-structure)  
4. [Getting Started](#-getting-started)  
5. [Usage](#-usage)  
6. [API Integration](#-api-integration)  
7. [Screenshots](#-screenshots)  
8. [Future Enhancements](#-future-enhancements)  
9. [Crafted by](#-crafted-by)  

---

## ✨ Features

- **Job Seeker:** Browse jobs, apply, track applications ✅  
- **Employer:** Post jobs, manage applicants, view applications 📋

- **Authentication:** Secure login & registration flow

- **Responsive UI:** Mobile-first design with Bootstrap 📱  
- **Dynamic Frontend:** React Hooks with Vite for fast, efficient rendering ⚡  
- **API Integration:** Connects seamlessly with backend endpoints 🔗  

---

## 🛠 Technologies Used

| Category | Technology |
|----------|-----------|
| Frontend | React.js, Vite, React Hooks |
| Styling | Bootstrap 5, CSS, ReactBootstrap |
| Routing | React Router DOM |
| HTTP Requests | Axios / Fetch API |
| Icons & UI | Font Awesome / React Icons |

---

## 📂 Project Structure

```bash
Recruitment-portal-frontend-react/
│
├── public/             
│
├── src/
│   ├── components/                               
│   ├── pages/           
│   ├── services/        
│   ├── App.jsx          
│   ├── main.jsx         
│   └── styles/          
│
├── package.json         
├── vite.config.js       
└── README.md   
```

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository

```bash
git clone <your-repo-url>
cd recruitment-portal
```

### 2️⃣ Install Dependencies

```bash
Copy code

npm install
```

### 3️⃣ Run Development Server

```bash
Copy code

npm run dev
```

### 4️⃣ Open in Browser

```bash
Vite will provide a local URL (default: http://localhost:5173)
```

---

## 💻 Usage

🔑 Login/Register as a job seeker or employer

📝 Job seekers can browse jobs and apply via /dashboard

🏢 Employers can post/manage jobs via /employer-dashboard

📱 Fully responsive design for mobile and desktop

---

## 🔗 API Integration

| Feature            | Endpoint                     | Method |
| ------------------ | ---------------------------- | ------ |
| Get Jobs           | `/api/jobs`                  | GET    |
| Apply for Job      | `/api/applications`          | POST   |
| User Login         | `/api/auth/login`            | POST   |
| User Register      | `/api/auth/register`         | POST   |
| Employer Post Job  | `/api/employer/jobs`         | POST   |
| Fetch Applications | `/api/employer/applications` | GET    |

⚠️ Replace /api/... with your actual backend URLs

---

## 🖼 Screenshots

### 📊 Hireup Homepage

![Homepage](./src/assets/hireup%20homepage.JPG)

### 🔑 Login Page

![Login Page](./src/assets/hireup%20login%20page.JPG)

### Register Page

![Register Page](./src/assets/hireup%20register%20page.JPG)

### 📊 Job Seeker Dashboard

![Job Seeker Dashboard](./src/assets/jobseeker%20dash%201.JPG)
![Job Seeker Dashboard](./src/assets/jobseeker%20dash%202.JPG)

### 🏢 Employer Dashboard

![Employer Dashboard](./src/assets/employer%20dashboardpage.JPG)

### Jobseeker Available Jobs

![Available jobs](./src/assets/available%20jobs%20jobseeker.JPG)

---

## 🌟 Future Enhancements

🔔 Real-time notifications for job updates & applications

📄 Resume upload & parsing for job seekers

🌐 Multi-language support

---

## 👨‍💻 Crafted by

### Shaik Mohammed Hussain

📧 Email: [ mohammedhussainshaik76@gmail.com ]

💼 LinkedIn: [Shaik Mohammed Hussain](https://www.linkedin.com/in/shaik-mohammed-hussain-8878b9236?trk=contact-info)

🐱 GitHub: [https://github.com/Hussainshaik-devv](https://github.com/Hussainshaik-devv)

### Made with ❤️ using React, Vite, and Bootstrap
