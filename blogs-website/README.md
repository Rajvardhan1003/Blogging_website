# 📝 Blogging Website (React + Vite)

A fully functional blogging website built using **React**, **Vite**, and **Bootstrap**.  
Users can browse blogs by categories, view trending posts, and read full blog content on dedicated pages.

---

## 📌 Features

### 🔹 Home Page
- Displays a **banner** at the top  
- Shows categories like:
  - Programming  
  - Cooking  
  - Workouts  
  - Health  
  - Travelling  
- Each category card redirects to its dedicated blog list.

### 🔹 Category Page
- Dynamically loads blogs based on URL  
  Example:  
  - `/blogs/programming` → Shows Programming blogs  
  - `/blogs/health` → Shows Health blogs  

### 🔹 Trending Blogs
- Shows a list of trending blogs with preview descriptions

### 🔹 Dedicated Blog Page
- Clicking **“View Post”** opens a full blog view  
- Banner included  
- Displays title, category, and full content  

---

## 🚀 Tech Stack

### **Frontend**
- React.js
- Vite
- JavaScript (ES6+)
- Bootstrap 5
- CSS

### **Routing**
- React Router DOM

---

## 📁 Folder Structure

/
├── src
│ ├── Components
│ │ ├── Banner
│ │ ├── Navbar
│ │ ├── TrendingBlogs
│ ├── Pages
│ │ ├── Home
│ │ ├── Login
│ │ ├── Registration
│ │ ├── categoryBlogs
│ │ ├── DedicatedBlog
│ ├── utils
│ │ └── MockData.js
│ ├── App.jsx
│ ├── main.jsx
└── package.json


Clone the repository:

```bash
git clone https://github.com/YOUR-USERNAME/Blogging_website.git
