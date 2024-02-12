<h1 align="center">
Pet Pal

<img alt="Capture.PNG" src="https://github.com/QuinnPeterson/QuinnPeterson/blob/main/projects/real%20estate/Capture.PNG?raw=true" data-hpc="true" class="Box-sc-g0xbh4-0 kzRgrI">

</h1>

<h4 align="center">PetPal is a Full Stack Social Media App for pet lovers to connect worldwide, share pictures, and celebrate their furry friends.</h4>

## Technologies Used
- **Frontend**:
  - React
  - Material UI 
  - React Router
  - Vite

- **Backend**:
  - NodeJs
  - Express
  - Cors
  - Nodemon

- **Database**:
  - MongoDB

## Key Features
- **User Login and Registration**: Using JSON Web Tokens (JWT) for secure authentication and middleware to ensure protected routes.
- **User Profiles**: Create and manage profiles for your pets.
- **Posts and Pictures**: Users can create posts and share pictures of their pets.
- **Interaction with Posts**: After posting you can like and comment on posts.
- **Light and Dark Theme Toggle**
- **Mobile Responsive**


## Prerequisites

Before you begin, ensure you have downloaded the following requirements:

- [NodeJs](https://nodejs.org/en/download/) installed on your machine.

## Installation

To clone and run this application, you will need [Git](https://git-scm.com) installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/quinnpeterson/pet-pal

# Install frontend dependencies:
$ cd client
$ npm install

# Install backend dependencies:
$ cd server
$  npm install

#Set up environment variables:
Create a .env file in the root directory of the server and add necessary configuration like MongoDB connection string, secret keys, etc.

# Start the frontend:
$cd client
$npm run dev
# Start the backend:
$cd server
$npm start

# The application will be accessible at http://localhost:5173

```

> **Note**
> If you're using Linux Bash for Windows, [see this guide](https://www.howtogeek.com/261575/how-to-run-graphical-linux-desktop-applications-from-windows-10s-bash-shell/) or use `node` from the command prompt.

## Register, Sign In and Dark Mode




## Create Post and Like Posts




## User Profiles and Comments






> GitHub [@QuinnPeterson](https://github.com/QuinnPeterson) &nbsp;&middot;&nbsp;
> LinkedIn [@QuinnPeterson](https://www.linkedin.com/in/quinn-peterson-software-engineer/)


#Project Structure
The .NET server  is organized into the following folders:

#_QUINN
Contains the requests and responses to the server.

#Controllers
Define the end points/routes for the API, controller action methods are the entry points into the API for client applications via HTTP requests.

#Models
Represent request and response models for controller methods, request models define the parameters for incoming requests, and response models define the returned data.

#Services
Contains business logic, validation, and database access code.

#Properties
Contains the launchSettings.json file that sets the environment `(ASPNETCORE_ENVIRONMENT)` to Development by default when running the API on your local machine.
---

