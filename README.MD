# 📸 Snapverse – Mini Instagram Backend

Snapverse is a lightweight Instagram-style app where users can register, log in, create posts with images, and receive AI-generated captions. Built with Express and MongoDB.

## 🚀 Features

- 🔐 User Authentication (Register/Login)
- 👤 Profile View
- 📸 Post Creation with Image Upload
- 🤖 AI Caption Generation (Gemini API)
- ❤️ Like Posts

## 🛠️ Tech Stack

- Node.js + Express
- MongoDB + Mongoose
- Multer (Image Upload)
- Gemini AI API (Captioning)
- dotenv (Environment Variables)

## 📁 Folder Structure

MINIINSTA/
├── src/
│   ├── db/
│   │   ├── db.js
│   │   └── app.js
├── .env
├── server.js
├── package.json
├── .gitignore


## 🔧 Setup Instructions

1. Clone the repo  
   `git clone https://github.com/yourusername/snapverse-backend.git`

2. Install dependencies  
   `npm install`

3. Create a `.env` file  
MONGO_URI=your_mongodb_uri
GEMINI_API_KEY=your_gemini_api_key


4. Run the server  
`npx nodemon server.js`

## 📦 API Endpoints

| Method | Endpoint         | Description              |
|--------|------------------|--------------------------|
| POST   | /register        | Register a new user      |
| POST   | /login           | Login user               |
| POST   | /create          | Create post with image   |
| GET    | /profile/:id     | View user profile        |
| PUT    | /like/:postId    | Like a post              |

## 🧠 AI Caption Flow

1. User uploads image via frontend
2. Backend receives image → converts to base64
3. Sends to Gemini API → receives caption
4. Saves post with caption in MongoDB


