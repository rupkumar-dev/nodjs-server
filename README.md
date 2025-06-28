# User Manager API

A production-ready Node.js + Express + MongoDB backend for handling user registration, login, and authentication using JWT. Follows clean architecture with modular folder structure and best practices.

---

## ⚒️ Tech Stack

* **Node.js** (v18+)
* **Express.js**
* **MongoDB + Mongoose**
* **JWT Authentication**
* **Dotenv for configuration**
* **Bcrypt for password hashing**
* **Modular MVC structure**

---

## 🚀 Features

* ✅ User registration with hashed password
* ✅ Login with phone & password
* ✅ JWT token generation & verification
* ✅ Auth-protected routes (get profile)
* ✅ Clean, scalable folder structure
* ✅ Centralized error handler

---

## 📂 Folder Structure

```
user-manager/
├── config/         # MongoDB connection
├── controllers/    # Business logic
├── middlewares/    # JWT auth
├── models/         # Mongoose schemas
├── routes/         # API route handlers
├── services/       # (Optional) service layer logic
├── utils/          # Reusable helpers (errorHandler)
├── .env            # Environment variables
├── server.js       # Entry point
└── package.json
```

---

## 🔧 Installation

### 1. Clone the repo

```bash
git clone https://github.com/your-username/user-manager.git
cd user-manager
```

### 2. Install dependencies

```bash
npm install
```

### 3. Create `.env` file

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/user-manager
JWT_SECRET=your_jwt_secret_key
```

### 4. Start the server

```bash
npm run dev   # for development with nodemon
# or
npm start     # for production
```

---

## 📮 API Endpoints

### 🔐 Auth Routes

| Method | Endpoint             | Description             |
| ------ | -------------------- | ----------------------- |
| POST   | `/api/auth/register` | Register a new user     |
| POST   | `/api/auth/login`    | Login and get JWT token |

### 👤 User Routes

| Method | Endpoint        | Description                          |
| ------ | --------------- | ------------------------------------ |
| GET    | `/api/users/me` | Get current user info (requires JWT) |

---

## 🎓 Learnings / Best Practices

* Use a separate Auth and User model (scalable)
* Use middleware for auth checking (`auth.middleware.js`)
* Avoid logic in routes, keep it in controllers/services
* Handle errors in a centralized place (`errorHandler.js`)

---

## 📅 License

MIT License

---

## 🙏 Contribution

Feel free to fork this repo and submit pull requests.
