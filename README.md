# 📰 UrgentNews - Dockerized Web Application  

UrgentNews is a simple web-based platform that displays the most recent **urgent news articles** using **Docker**. The application runs on **three containers**:  

---

## **🛢️ MySQL Database**  
📌 **Image:** `xxmohammadxx/news-app-docker-db`  
- Based on **MySQL 8**.  
- Creates a database named **newsDB**.  
- Loads `init.sql` to create a **News** table and insert **3 sample articles**.  
- Exposes **port 3306**.  

---

## **🔧 Backend API (Node.js + Express + MySQL2)**  
📌 **Image:** `xxmohammadxx/news-app-docker-backend`  
- Based on **Node.js 18**.  
- Provides an API (`/news`) that **fetches news from the database**.  
- Uses **environment variables** (`DB_HOST`, `DB_USER`, `DB_PASSWORD`, `DB_NAME`) to connect to MySQL.  
- Exposes **port 4000**.  

---

## **🌐 Frontend (Apache + Static HTML/CSS/JS)**  
📌 **Image:** `xxmohammadxx/news-app-docker-frontend`  
- Based on **Apache HTTP Server 2.4**.  
- Serves a **static HTML/CSS/JS** page.  
- Fetches news from the backend API.  
- Exposes **port 80** (mapped to **8080** via Docker Compose).  

---

# 🏗️ How to Run the Application  

## **1️⃣ Pull the Docker images from Docker Hub:**  
```bash
docker pull xxmohammadxx/news-app-docker-db
docker pull xxmohammadxx/news-app-docker-backend
docker pull xxmohammadxx/news-app-docker-frontend
