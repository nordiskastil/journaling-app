# Final project
This is a so called mono-repo, meaning it includes both frontend and backend. You will find three README files in this project, and how you decide to structure the information about your project is up to you.

---

Replace this readme with your own information about the project. You can include things like:

- Brief description of the assignment
Build a full-stack web application of your own choice that showcases your skills in both frontend and backend development. The app should be visually appealing, responsive across devices, and have clean code. We were free to define our own project idea and decide the focus. 

Technical Requirements
Frontend: Built with React
Backend: Built with Node.js and Express
Database: MongoDB
Routing: Use React Router
Global State: Manage with Context API or Zustand
Deployment: Both frontend and backend should be deployed and linked in your README
Cross-browser support: Must work in Chrome, Firefox, and Safari

Design Requirements
Responsive design for mobile, tablet, and desktop (320px–1600px)
Clear layout using box model, with consistent margins/padding
Consistent use of headings (h1–h6) and color scheme
Prioritize mobile usability

- How you approached the task, what tools and techniques you used, and how you planned it
I created this journaling app with the goal of helping users reflect on their day, practice gratitude, and build consistent routines. I satrted planning out functionality, designing a user-friendly interface, and building a structured application. 

Features and Functionality
The app allows users to:
- Register and log in securely using authentication.
- Create daily journal entries, gratitude notes, and routines.
- I implemented error handling, so users are alerted if something goes wrong. 

Design
I wanted the app to feel clean, calm and welcoming. I used a simple, minimalist layout with soft colors and added some illustrations. I also ensured the app is responsive and easy to use. 

Code
The project has a separation between frontend and backend:

Frontend (React):
Components: Split into JournalPage, GratitudePage, RoutinePage, and inputs.
Context: I used AuthContext to manage user authentication state globally.
Routing: React Router is used to navigate between journaling views.

Backend (Node.js + Express + MongoDB):
Routes: I created modular routes for /auth (login/register) and /journal, /gratitude, /routines.
Models: Mongoose schemas define the data structure for users and entries.
Security: Passwords are hashed with bcrypt, and JWT handles secure sessions.
Environment Variables: Stored sensitive data like the MongoDB URI and secret in a .env file.
I also used Postman during development to test and debug the API endpoints.

Challenges
I faced many challenges around authentication and syncing the frontend and backend data structures. For example, early on I was sending user the wrong way (string), causing a lot of errors. Debugging with console logs, chat GTP and using Postman helped.

I really wanted to give the users the opportunity to edit and update existing entries based on the selected date and return to previous entries. But I did not get it to work and crashed my app multiple times trying. I have added a alert with text like: Gratitude saved! even though the server doesn't actually store the information. 

I also tried to add the ability to add emoticons several times, but it just created chaos and errors. 

- If you had more time, what would be next?
I really want to enable the user to save their daily journals in the database an the ability to open them again later. 
I’d like to add more features like:
- Tags or categories for routines (morning routine, workout routine,..)
- The ability for users to add emoijicons
Mood tracking
Dark mode and theme personalization

- How to run the project locally


## View it live
Every project should be deployed somewhere. Be sure to include the link to the deployed project so that the viewer can click around and see what it's all about.


## Getting Started with the Project

### Dependency Installation & Startup Development Server

Once cloned, navigate to the project's root directory and this project uses npm (Node Package Manager) to manage its dependencies.

The command below is a combination of installing dependencies, opening up the project on VS Code and it will run a development server on your terminal.

```bash
npm i && code . && npm run dev
```