# 🧠 Medication Management System – Backend

This is the **backend** for the Medication Management System, powered by **Node.js** and **SQLite**. It supports user authentication, medication CRUD, and serves data to the role-based frontend (patients & caretakers).

📦 **GitHub Repo**: [meds-buddy-check](https://github.com/shyamwl/meds-buddy-check)

---

## 🚀 Features

- 🔐 User authentication using SQLite + bcrypt
- 💊 CRUD APIs for medication data
- 🧑‍⚕️ Role-based access support (Patient / Caretaker)
- 🍪 JWT tokens stored in cookies for secure sessions
- 🗃️ SQLite database (lightweight, fast)

---

## 🛠 Tech Stack

- **Node.js**
- **Express**
- **SQLite**
- **bcrypt** (password hashing)
- **JWT**
- **cookie-parser**

---

## 📦 API Endpoints

### 🔑 Authentication

| Method | Endpoint       | Description         |
|--------|----------------|---------------------|
| POST   | `/register`    | Register a new user |
| POST   | `/login`       | Login and receive JWT |
| GET    | `/user/`       | Get current user info |

> Note: All protected routes require a valid `jwt_token` cookie.

