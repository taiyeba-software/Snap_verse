# 📸 Snapverse — A Scalable MERN App with AI Captioning & Secure Post Uploads

Snapverse is a full-stack MERN application designed to let users upload images, generate AI-powered captions, and share posts securely. Built with JWT authentication, cookie-based session management, and Cloudinary integration, Snapverse is your playground for backend mastery and real-world deployment.

---

## 🚀 Features

- 🔐 **User Registration & Login** with hashed passwords using `bcrypt`
- 🍪 **JWT Token + Secure Cookies** for authentication
- 🖼️ **Image Uploads** via `multer` and `Cloudinary`
- 🧠 **AI Captioning** using Gemini API (`gemini-2.5-flash`)
- 🧾 **Protected Routes** with custom middleware
- 🗃️ **MongoDB Models** for users and posts
- 📦 **Modular Structure** with controllers, routes, services, and middleware

---

## 🗂️ Project Structure

MINIINSTA/
├── src/
│ ├── controllers/
│ │ ├── auth.controller.js # Register & Login logic
│ │ └── post.controller.js # Post creation logic (AI + upload)
│ ├── db/
│ │ └── db.js # MongoDB connection
│ ├── middlewares/
│ │ └── auth.middleware.js # JWT token verification
│ ├── models/
│ │ ├── user.model.js # User Schema
│ │ └── post.models.js # Post Schema (Image + Caption + User ref)
│ ├── routes/
│ │ ├── auth.routes.js # /register & /login routes
│ │ └── post.routes.js # /create (Protected) route
│ └── service/
│ └── ai.service.js # Gemini API integration
│
├── .env # Environment variables
├── app.js # Express app setup
├── server.js # Main server entry point
├── package.json
├── .gitignore
└── README.md

2️⃣ Install dependencies
bash
Copy code
npm install
3️⃣ Setup your .env file
Create a .env file in the root folder and add:

ini
Copy code
MONGO_URI=your_mongodb_connection_string
GEMINI_API_KEY=your_gemini_api_key
jwtSecret=your_jwt_secret
4️⃣ Run the server
bash
Copy code
npx nodemon server.js
🔑 Authentication Flow
User registers → password hashed using bcrypt

A JWT token is generated and stored in HTTP-only cookie

When user logs in, new token is issued and cookie updated

Protected routes (like post upload) require valid token
Middleware: auth.middleware.js → verifies token → attaches user info → continues to controller

📦 API Endpoints
Method	Endpoint	Description
POST	/register	Register a new user
POST	/login	Login existing user
POST	/create	Create post with image + AI caption (Protected)
GET	/profile/:id	View user profile
PUT	/like/:postId	Like or unlike a post (Planned)

🧠 AI Caption Flow
User uploads image via frontend

Backend (via post.controller.js) converts image to Base64

Sends image to Gemini API through ai.service.js

Receives AI-generated caption

Saves both image URL + caption + user reference in MongoDB

☁️ Cloud Storage (Optional)
You can connect any cloud storage like:

Cloudinary (easiest for beginners)

Firebase Storage

AWS S3

Your Multer middleware will upload files → get back a cloud URL → store that in MongoDB instead of local file path.

🧪 Example .env file
env
Copy code
PORT=5000
MONGO_URI=mongodb+srv://<your-db>
jwtSecret=mysecretkey
GEMINI_API_KEY=AIzaSyD......
CLOUDINARY_URL=cloudinary://<api_key>:<secret>@<cloud_name>


💬 Future Enhancements
💌 Comments on posts

🧑‍🤝‍🧑 Follow system

🌐 Cloud image storage (Cloudinary/Firebase)

🧭 Pagination and search

⚡ Frontend with React (MERN Integration)