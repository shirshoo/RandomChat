# RandomChat

A modern, responsive real-time chat application built with MERN stack (MongoDB, Express.js, React, Node.js) and Socket.IO.

## Features

- ⚡️ Real-time messaging with Socket.IO
- 🔐 JWT Authentication
- 👤 User profiles with Cloudinary image upload
- 🔍 User search functionality
- 📱 Fully responsive design
- 🎨 Modern UI with Tailwind CSS
- 🖼️ Image sharing in chats
- 🟢 Online/Offline status
- 💾 Message history
- 🔄 Real-time message status updates

## Tech Stack

### Frontend
- React 18 with Vite
- Tailwind CSS for styling
- Socket.IO client for real-time communication
- React Router v6 for navigation
- Axios for API requests
- React Hot Toast for notifications

### Backend
- Node.js & Express.js
- MongoDB with Mongoose
- Socket.IO for real-time features
- JWT for authentication
- Cloudinary for image storage
- Bcrypt for password hashing

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- MongoDB installed and running
- npm or yarn
- Cloudinary account

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/shirshoo/RandomChat.git
   cd RandomChat
   ```

2. Install dependencies for both client and server:
   ```bash
   # Install server dependencies
   cd server
   npm install

   # Install client dependencies
   cd ../client
   npm install
   ```

3. Set up environment variables:
   ```bash
   # In server directory
   cp .env.example .env
   # Update .env with your MongoDB URI, JWT secret, and Cloudinary credentials

   # In client directory
   cp .env.example .env
   # Update .env with your backend URL
   ```

### Running the App

1. Start the server:
   ```bash
   cd server
   npm start
   ```

2. In a new terminal, start the client:
   ```bash
   cd client
   npm run dev
   ```

The client will be available at `http://localhost:5173` and the server at `http://localhost:5000`.

## Project Structure

```
RandomChat/
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── assets/        # Static assets
│   │   ├── components/    # Reusable components
│   │   ├── context/       # React context providers
│   │   ├── pages/         # Page components
│   │   └── lib/          # Utility functions
│   └── public/            # Public assets
│
└── server/                # Backend Node.js server
    ├── controllers/       # Route controllers
    ├── models/           # Mongoose models
    ├── routes/           # API routes
    ├── middleware/       # Custom middleware
    └── lib/             # Utility functions
```

## API Routes

- 🔑 **Auth Routes**
  - POST /api/auth/signup
  - POST /api/auth/login
  - GET /api/auth/check
  - PUT /api/auth/update-profile

- 💬 **Message Routes**
  - GET /api/messages/:userId
  - POST /api/messages/send
  - PUT /api/messages/mark-seen

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


## Acknowledgments

- Socket.IO for real-time capabilities
- Tailwind CSS for the UI framework
- Cloudinary for image hosting
- MongoDB Atlas for database hosting

---
❤️ Made by shirshoo
