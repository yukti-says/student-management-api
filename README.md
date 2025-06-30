# 📚 Student Management System API

A role-based RESTful API built with Node.js, Express, and MongoDB for managing students, teachers, reports, and assignments — using MVC architecture and JWT authentication.

---

## 🚀 Features

- ✅ **User Roles:** Teacher and Student
- ✅ **JWT Authentication**
- ✅ **Secure Routing with Role-based Access**
- ✅ **Teachers can:**
  - Add, Update, Delete, Get student by ID
- ✅ **Students can:**
  - View their Assignments by student ID
- ✅ **Clean Folder Structure using MVC**
- ✅ Built with: `Node.js`, `Express`, `MongoDB`, `Mongoose`

---

## 🧱 Tech Stack

| Layer     | Technology       |
|-----------|------------------|
| Runtime   | Node.js          |
| Framework | Express.js       |
| Database  | MongoDB (Mongoose) |
| Auth      | JWT + bcryptjs   |
| Structure | MVC + Service Layer |

---

## 📂 Folder Structure

/backend
├── /models
├── /controllers
├── /routes
├── /services
├── /middlewares
├── /config
├── server.js
└── .env

yaml
Copy
Edit

---

## 🔐 Roles

| Role    | Access                                          |
|---------|-------------------------------------------------|
| Teacher | Can add, delete, update, and search students    |
| Student | Can view their assignments by ID                |

---

## 🧪 API Endpoints

### 🔐 Auth

- `POST /api/auth/register` – Register with role (teacher/student)
- `POST /api/auth/login` – Login and receive JWT

### 👨‍🏫 Teacher (Requires JWT + Role: teacher)

- `POST /api/teacher/add`
- `PUT /api/teacher/update/:id`
- `DELETE /api/teacher/delete/:id`
- `GET /api/teacher/student/:id`
- `GET /api/teacher/students` *(future enhancement)*

### 👩‍🎓 Student (Requires JWT + Role: student)

- `GET /api/student/assignments/:id`

---

## 🛠️ Setup & Run Locally

```bash
git clone https://github.com/YOUR-USERNAME/student-management-api.git
cd student-management-api
npm install
```
### 🔧 Configure .env

```ini


PORT=5000
MONGO_URI=mongodb://localhost:27017/studentDB
JWT_SECRET=yourSecretKey
```

### ✅ Run Project


```npm run dev```

## 🧠 Learnings

MVC structure and clean code practices

JWT authentication + role-based middleware

Real-world API structure using Node.js & MongoDB

How to handle routes securely with middlewares

## 💡 Future Enhancements

Report model + view

Assignment submissions

PDF generation

MongoDB Atlas hosting

Admin panel UI

## 🤝 Connect with Me

Yukti Sahu

<p align="center">

  <a href="https://www.linkedin.com/in/yukti-sahu2004/">
    <img src="https://img.shields.io/badge/LinkedIn-blue?logo=linkedin&logoColor=white" />
  </a>
  <a href="https://github.com/yukti-says">
    <img src="https://img.shields.io/badge/GitHub-000?logo=github&logoColor=white" />
  </a>
</p>
<p align="center">
  <a href="https://x.com/YuktiSahu234">
    <img src="https://img.shields.io/badge/Twitter-1DA1F2?logo=twitter&logoColor=white" alt="Twitter" />
  </a>
</p>




