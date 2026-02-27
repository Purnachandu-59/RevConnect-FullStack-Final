Project Overview

RevConnect is a full-stack monolithic social media web application designed to connect personal users, businesses, and content creators on a single interactive platform.

The platform allows users to:
Create and share posts
Build professional and personal networks
Follow businesses and creators
Receive real-time notifications
Analyze engagement and performance metrics
Manage profiles with role-based access control

The application is built using:

Frontend: Angular
Backend: Spring Boot
Database: SQL (Relational Database)
Build Tool: Maven
Testing: JUnit 4
Logging: Log4J
Version Control: Git

Application Architecture

RevConnect follows a Monolithic Architecture with clear modular separation:
Angular frontend communicates with REST APIs
Spring Boot backend handles business logic
SQL database manages persistent storage
JWT-based authentication for secure access
Role-based access control for Personal, Creator, and Business users

High-Level Architecture Flow:
Angular (Client UI)
        ↓
REST Controllers (Spring Boot)
        ↓
Service Layer
        ↓
Repository Layer (JPA/Hibernate)
        ↓
SQL Database

Team Members & Module Responsibilities

This is a group project of 5 members with modular responsibility distribution:

Module	Description	Team Member
Authentication & Security	Registration, Login, JWT, Role Management	Shakeel
Post & Feed Management	Create/Edit/Delete Posts, Personalized Feed, Hashtags	Sandhiya
Social Networking	Connections, Follow/Unfollow, Comments, Likes, Shares	Poorna
Notification System	Real-time Notifications, Preferences, History	Teja
Analytics & Business Features	Post Analytics, Engagement Metrics, Business Insights	Madumitha

Core Functional Features
Personal User Features
Authentication & Profile
Register with email, username, password
Secure login
Edit profile (bio, location, website, profile picture)
View other profiles
Search users
Post Management
Create text posts with hashtags
Edit/Delete own posts
View personalized feed
Social Interactions
Like/Unlike posts
Comment on posts
View comments
Network Building
Send/Accept/Reject connection requests
View connections
Remove connections
Notifications
Real-time in-app notifications
Unread count
Mark as read
Notification history
Notification preferences
Feed & Discovery
Personalized feed
Trending posts & hashtags
Search by hashtag
Filter feed

Creator & Business Account Features

(Includes all Personal User features plus:)
Enhanced Profile
Business/Creator category
Contact information
Website & social links
Business address & hours
Showcase products/services
Advanced Content
Promotional posts
Call-to-action buttons
Tag products
Schedule posts
Analytics & Insights
Post analytics (likes, comments, shares, reach)
Engagement metrics
Follower demographics
Business Interaction
Customer engagement
Share announcements

Tech Stack
Backend

Java 17+
Spring Boot
Spring Security
JPA/Hibernate
Log4J
JUnit 4
Maven

Frontend

Angular
TypeScript
HTML5 / CSS3
Angular Routing
HTTP Client Module
Database
MySQL

Project Structure
revconnect/
│
├── backend/
│   ├── shared
│   ├── module
│   ├── config
│   ├── test
│   └── pom.xml
│
├── frontend/
│   ├── src/
│   └── angular.json
│
├── ERD/
├── Architecture-Diagram/
├── Testing-Documents/
└── README.md

Security Features

JWT-based Authentication
Role-Based Authorization
Password Encryption (BCrypt)
Input Validation
Secure REST APIs

Testing

Unit Testing using JUnit 4
Service Layer Testing
Controller Testing
Basic Integration Testing
Manual UI Testing
Database Design

The system includes the following main entities:
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
An ERD diagram is included in the repository under /ERD.

Installation & Setup
Backend Setup

Clone the repository:
git clone <https://github.com/Purnachandu-59/RevConnect-FullStack-Final>

Navigate to backend folder:
cd backend
Configure database in application.properties.

Run the application:
mvn spring-boot:run

Backend runs at:
http://localhost:8080

Frontend Setup

Navigate to frontend folder:
cd frontend

Install dependencies:
npm install

Run Angular app:
ng serve

Frontend runs at:
http://localhost:4200
API Documentation

All REST APIs follow standard REST conventions:
GET – Fetch data
POST – Create
PUT – Update
DELETE – Remove
API documentation can be accessed via Swagger.

Definition of Done

✔ Working Web Application Demonstration
✔ Complete Source Code Repository
✔ ERD (Entity Relationship Diagram)
✔ Application Architecture Diagram
✔ README Documentation
✔ Testing Artifacts
✔ Modular Code Structure

 Future Enhancements

Real-time chat module
Mobile application version
AI-based content recommendations
Cloud deployment (AWS/Azure)
CI/CD pipeline integration

License

This project is developed for academic purposes as part of a group full-stack development project.
