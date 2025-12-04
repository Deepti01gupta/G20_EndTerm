# Documentation

## Project Overview

This is a recruitment portal application built with React and Vite. The application serves multiple user roles including employers, job seekers, interviewers, and interviewees.

## Project Structure

### Root Level
- `Recruitment-portal-frontend/` - Main frontend application
- `src/` - Alternative source directory
- `package.json` - Project dependencies and scripts
- `vite.config.js` - Vite configuration
- `eslint.config.js` - ESLint configuration

### Frontend Structure (Recruitment-portal-frontend/src/)

#### Components
- `ApplicationCard.jsx` - Component for displaying job applications
- `EmployerNavbar.jsx` - Navigation bar for employers
- `IntervieweeNavbar.jsx` - Navigation bar for interviewees
- `InterviewerNavbar.jsx` - Navigation bar for interviewers
- `JobseekerNavbar.jsx` - Navigation bar for job seekers
- `LandingNavbar.jsx` - Navigation bar for landing page
- `JobCard.jsx` - Component for displaying job listings
- `Footer.jsx` - Footer component

#### Layouts
- `EmployerLayout.jsx` - Layout for employer pages
- `IntervieweeLayout.jsx` - Layout for interviewee pages
- `InterviewerLayout.jsx` - Layout for interviewer pages
- `JobseekerLayout.jsx` - Layout for job seeker pages
- `LandingLayout.jsx` - Layout for landing pages

#### Pages

##### Employer
- `EmployerDashboard.jsx` - Dashboard for employers
- `EmployerProfile.jsx` - Employer profile page
- `EmployerSettings.jsx` - Employer settings
- `PostJob.jsx` - Job posting page
- `ViewJobs.jsx` - View posted jobs
- `ManageApplications.jsx` - Manage job applications

##### Jobseeker
- `JobseekerDashboard.jsx` - Dashboard for job seekers
- `JobseekerProfile.jsx` - Job seeker profile page
- `JobseekerSettings.jsx` - Job seeker settings
- `Jobs.jsx` - Job listings page
- `MyApplications.jsx` - View applications submitted

##### Interviewee
- `IntervieweeDashboard.jsx` - Dashboard for interviewees
- `IntervieweeProfile.jsx` - Interviewee profile
- `FindInterviewer.jsx` - Find interviewer page
- `IntervieweeSessions.jsx` - Interview sessions

##### Interviewer
- `InterviewerDashboard.jsx` - Dashboard for interviewers
- `InterviewerProfile.jsx` - Interviewer profile

##### Shared
- `ApplicationCard.jsx` - Reusable application card component
- `JobCard.jsx` - Reusable job card component

#### Other
- `App.jsx` - Main application component
- `ProtectedRoute.jsx` - Protected route component for authentication
- `main.jsx` - Application entry point
- `index.css` - Global styles
- `Data/JobsData.jsx` - Job data mock/source

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Linting

```bash
npm run lint
```

## User Roles

1. **Employer** - Post jobs, manage applications, view candidates
2. **Job Seeker** - Apply for jobs, manage applications, view profile
3. **Interviewer** - Conduct interviews, manage sessions
4. **Interviewee** - Prepare for interviews, find interviewers, manage sessions

## Key Features

- Multi-role authentication and authorization
- Job posting and application management
- Interview scheduling and management
- User profiles and settings
- Responsive design

## Technologies Used

- React
- Vite
- JavaScript (ES6+)
- CSS

## Configuration Files

- `vite.config.js` - Vite build and dev server configuration
- `eslint.config.js` - Code quality and style rules
- `vercel.json` - Deployment configuration for Vercel
- `package.json` - Project metadata and dependencies

## Deployment

The project is configured for deployment on Vercel. See `vercel.json` for deployment settings.
