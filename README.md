Learning Management System (LMS) - Frontend Application
Overview
This is a React-based Learning Management System (LMS) frontend application that allows users to browse, enroll in, and track their progress in various courses. The application uses localStorage for data persistence and comes pre-filled with sample data when first launched.

Features

Profile Management: View and update user profile

Course Browsing: View available courses with filtering options

Course Enrollment: Enroll in available courses

Progress Tracking: Track completion status of enrolled courses

Learning History: View completed courses and progress history

Search Functionality: Search courses by title, category, or keywords

Admin Features
Automatic initialization of sample data

Responsive design for various screen sizes

Technical Details
Data Structure
The application uses the following data schema stored in localStorage:

Users
javascript
{
  id: string,
  name: string,
  email: string,
  enrolledCourses: array,
  completedCourses: array
}
Courses
javascript
{
  id: string,
  title: string,
  description: string,
  category: string,
  duration: number, // in minutes
  isFree: boolean,
  prerequisites: array, // course IDs
  content: array // lesson objects
}
Initialization
When the application is launched for the first time (no existing data in localStorage), it automatically:

Creates a default user with pre-filled details

Initializes five sample courses across various categories:

Web Development

Data Science

Mobile Development

Design

Business

Setup Instructions
Clone the repository

bash
git clone [repository-url]
cd lms-frontend
Install dependencies

bash
npm install
Run the development server

bash
npm start
Open your browser and navigate to http://localhost:3000

Available Scripts
npm start: Runs the app in development mode

npm test: Launches the test runner

npm run build: Builds the app for production

npm run eject: Ejects from Create React App (not recommended)

Dependencies
React

React Router

Bootstrap (for styling)

Font Awesome (for icons)

date-fns (for date manipulation)

Folder Structure
/src
  /components - Reusable UI components
  /context - Application context providers
  /data - Initial data setup
  /pages - Main application pages
  /services - Data management services
  /utils - Utility functions
Testing Credentials
Use the following default credentials to log in:

Email: user@example.com

Password: password123

Notes
All data persists in browser's localStorage

Refreshing the page will maintain the application state

Clearing browser storage will reset to initial state with sample data