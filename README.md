# 🔐 Job Portal - Auth Service

Authentication and authorization microservice for the **Job Portal** application. This service manages user registration, login, password recovery, JWT generation, authentication workflows, and communication with other microservices through Kafka. It also integrates with PostgreSQL, Redis, and the Utils Service for handling user-related operations.

---

## ✨ Features

- 🔑 User Registration
- 🔐 Secure Login with JWT Authentication
- 🔒 Password Hashing using bcrypt
- 🍪 HTTP-Only Cookie Support
- 🔄 Access & Refresh Token Generation
- 📧 Forgot Password & Reset Password Flow
- ☁️ Resume Upload through Utils Service
- 📨 Kafka Producer Integration
- 🗄️ PostgreSQL Database Integration
- ⚡ Redis Integration for Temporary Data/Caching
- 🐳 Dockerized Deployment
- 📝 Request Validation & Error Handling
- 📂 TypeScript Support

---

## 🏗️ Architecture

```text
                    Client
                       │
                       ▼
               Auth Service (Express)
                       │
        ┌──────────────┼──────────────┐
        │              │              │
        ▼              ▼              ▼
 PostgreSQL         Redis          Kafka
        │                             │
        │                             ▼
        │                   Other Microservices
        │
        ▼
 Utils Service (Resume Upload)
```

The Auth Service acts as the authentication gateway of the Job Portal system. It manages user credentials, generates authentication tokens, stores user information in PostgreSQL, communicates with Redis for temporary storage, and publishes events through Kafka for other services.

---

# 🛠️ Tech Stack

| Category | Technologies |
|----------|--------------|
| Runtime | Node.js |
| Language | TypeScript |
| Framework | Express.js |
| Database | PostgreSQL |
| Cache | Redis |
| Authentication | JWT |
| Password Security | bcrypt |
| Messaging | Kafka |
| File Upload | Multer |
| Environment | dotenv |
| Deployment | Docker |

---

# 📁 Project Structure

```text
auth-service/
│
├── src/
│   ├── controllers/
│   ├── middleware/
│   ├── routes/
│   ├── templates/
│   ├── utils/
│   ├── app.ts
│   ├── index.ts.ts
│   └── producer.ts
│
├── Dockerfile
├── package.json
├── tsconfig.json
└── README.md
```

---

# 🌐 API Endpoints

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | `/register` | Register a new user |
| POST | `/login` | Authenticate user |
| POST | `/forgot` | Send password reset email |
| POST | `/reset/:token` | Reset user password |

---

# 🔑 Authentication

The service uses **JWT (JSON Web Tokens)** for authentication.

It generates:

- Access Token
- Refresh Token

Passwords are securely hashed using **bcrypt** before being stored in the database.

---

# 📨 Kafka Integration

This service acts as a Kafka producer to communicate authentication-related events with other microservices.

Typical events include:

- Password Recovery
- User Notifications

---

# ☁️ Resume Upload

Instead of directly handling file storage, the Auth Service delegates file upload operations to the **Utils Service**.

Benefits:

- Separation of concerns
- Independent scaling
- Centralized file management
- Cleaner authentication service

---

# ⚡ Redis

Redis is used for handling temporary authentication-related data such as:

- Password reset information
- Cached authentication data
- Session-related operations

---

# 🐳 Docker

The project is fully containerized using Docker, enabling consistent deployments across different environments.

The Docker image packages the application along with all required dependencies for production-ready execution.


---

# 📦 Dependencies

Some of the primary packages used include:

- Express
- PostgreSQL
- JWT
- bcrypt
- Redis
- KafkaJS
- Multer
- dotenv
- TypeScript

---

# 🛡️ Error Handling

The service includes centralized error handling for:

- Invalid credentials
- Duplicate users
- Authentication failures
- Token expiration
- Validation errors
- Database exceptions
- Internal server errors

---

# 🔗 Related Microservices

| Service | Description |
|----------|-------------|
| User Service | Manages user profiles and related information |
| Job Service | Handles job postings and applications |
| Payment Service | Processes subscriptions and payments |
| Utils Service | File uploads and utility operations |
