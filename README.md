RevConnect – Social Media Networking Platform

A comprehensive full-stack social media web application built with Spring Boot and Angular, designed to connect personal users, businesses, and content creators on a unified interactive platform.

Table of Contents

Overview
Features
Technology Stack
Architecture
Design Patterns
Team & Module Responsibilities
Prerequisites
Installation
Configuration
Running the Application
API Documentation
Project Structure
Security Features
Testing
Database Design
Future Enhancements
License

Overview
RevConnect is a full-stack monolithic social networking application that enables users to:
Create and share posts
Connect with other users
Follow creators and businesses
Engage through likes, comments, and shares
Receive real-time notifications
Analyze engagement metrics
Manage role-based profiles (Personal, Creator, Business)
The platform provides a responsive UI, secure authentication, and scalable backend architecture.

Features
Personal User Features
Authentication & Profile
User registration (Email, Username, Password)
Secure login with JWT authentication
Profile creation and editing
Public/Private profile settings
User search functionality
Post Management
Create text posts with hashtags
Edit/Delete own posts
Personalized feed
View trending hashtags
Social Interaction
Like/Unlike posts
Comment on posts
View comments
Send/Accept/Reject connection requests
Remove connections
Notifications
Real-time in-app notifications
Unread notification counter
Notification history
Notification preference settings

Creator & Business Features
(Includes all Personal User features plus:)
Enhanced Profiles
Business/Creator category
Contact details
Website & social media links
Business address & working hours
Product/Service showcase
Advanced Content Features
Promotional posts
Call-to-action buttons
Product tagging
Scheduled posts
Analytics & Insights
Post engagement analytics
Likes, comments, shares tracking
Reach and engagement metrics
Follower insights

Technology Stack
Backend
Java 17+
Spring Boot
Spring Security
JWT Authentication
Spring Data JPA / Hibernate
MySQL
Log4J
JUnit 4
Maven

Frontend
Angular
TypeScript
Angular Router
HTTP Client Module
HTML5 / CSS3
Version Control
Git & GitHub
Architecture
RevConnect follows a Layered Monolithic Architecture.

┌─────────────────────────────────────┐
│          Angular Frontend           │
│  (Components, Services, Guards)     │
└─────────────────┬───────────────────┘
                  │ HTTP/REST APIs
┌─────────────────▼───────────────────┐
│        Spring Boot Backend          │
├─────────────────────────────────────┤
│ Controller Layer (REST APIs)        │
│ Service Layer (Business Logic)      │
│ Repository Layer (JPA/Hibernate)    │
│ Security Layer (JWT + RBAC)         │
└─────────────────┬───────────────────┘
                  │
┌─────────────────▼───────────────────┐
│            MySQL Database           │
└─────────────────────────────────────┘

Design Patterns
MVC Pattern
DTO Pattern
Repository Pattern
Service Layer Pattern
Dependency Injection
Global Exception Handling
Role-Based Access Control (RBAC)
Team & Module Responsibilities

This project was developed by a team of 5 members with modular ownership:

Module	Responsibilities	Team Member
Authentication & Security	JWT, Registration, Login, Role Management	Shakeel
Post & Feed Management	Post CRUD, Feed Personalization, Hashtags	Sandhiya
Social Networking	Connections, Follow/Unfollow, Likes, Comments	Poorna
Notification System	Real-time Notifications, Preferences	Teja
Analytics & Business Features	Engagement Metrics, Business Insights	Madumitha
Prerequisites

Ensure the following are installed:

Java 17+
Node.js 18+
npm 9+
MySQL 8+
Maven 3.6+
Angular CLI

Installation
1️⃣ Clone Repository
git clone https://github.com/Purnachandu-59/RevConnect-FullStack-Final
cd RevConnect-FullStack-Final
2️⃣ Database Setup
CREATE DATABASE revconnect_db;
3️⃣ Backend Setup
cd backend
mvn clean install
4️⃣ Frontend Setup
cd frontend
npm install
Configuration

Edit application.properties:

# Server
server.port=8080

# Database
spring.datasource.url=jdbc:mysql://localhost:3306/revconnect_db
spring.datasource.username=root
spring.datasource.password=root

# JPA
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true

# JWT
jwt.secret=revconnect_secret_key_2026
jwt.expiration=86400000
Running the Application
Start Backend
mvn spring-boot:run

Backend URL:

http://localhost:8080
Start Frontend
cd frontend
ng serve

Frontend URL:

http://localhost:4200
API Documentation

If Swagger is enabled:

http://localhost:8080/swagger-ui.html

API supports:

GET – Fetch data
POST – Create
PUT – Update
DELETE – Delete

Project Structure
Backend Structure
src/main/java/org/example/fullstackrevconnect/
├── config/
├── modules/
│   ├── controller/
│   ├── service/
│   ├── repository/
│   ├── dto/
│   ├── entity/
│   └── enums/
├── exception/
└── security/
Frontend Structure
frontend/src/app/
├── core/
├── features/
│   ├── auth/
│   ├── post/
│   ├── connections/
│   ├── notifications/
│   └── analytics/
└── shared/
Security Features

JWT Token Authentication
BCrypt Password Encryption
Role-Based Access Control
CORS Configuration
Secure REST APIs
Global Exception Handling
Testing

Backend Testing:
mvn test

Includes:
Unit Testing (JUnit 4)
Service Layer Testing
Controller Testing
Basic Integration Testing
Database Design

Main Entities:

User
Role
Post
Comment
Like
Connection
Follow
Notification
Analytics
BusinessProfile
Product/Service

ERD Diagram available in:

/ERD
Future Enhancements
Real-time chat system
AI-based feed recommendation
Mobile application
Cloud deployment (AWS/Azure)
CI/CD pipeline
WebSocket-based live notifications

Definition of Done

✔ Working Web Application
✔ Complete Repository
✔ ERD Diagram
✔ Architecture Diagram
✔ Modular Code Structure
✔ Testing Artifacts
✔ Role-Based Access Control

License

This project is developed for academic purposes as part of a full-stack group development project.
