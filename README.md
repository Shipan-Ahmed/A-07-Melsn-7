# 👥 KeenKeeper — Keep Your Friendships Alive

KeenKeeper is a modern web application designed to help you maintain meaningful relationships by tracking your interactions with friends. It reminds you when to reconnect and provides insights into your communication habits.

---

## 🌐 Live Demo

👉 [Add your live link here]

## 💻 GitHub Repository

👉 [Add your repo link here]

---

## 🚀 Features

### 👫 Friend Management

* View all your friends in a clean card layout
* Each friend includes profile picture, tags, status, and contact details
* Click any friend to see detailed information

### 👤 Friend Details Page

* View full profile including bio, email, and relationship goal
* Quick action buttons:

  * 📞 Call
  * 💬 Text
  * 🎥 Video
* Automatically logs interactions into the timeline

### 📜 Timeline

* Displays all interaction history
* Shows:

  * 📅 Date
  * 🔣 Interaction type (Call/Text/Video)
  * 📝 Title (e.g., "Call with John")
* 🔍 Filter interactions by type (Call, Text, Video)

### 📊 Friendship Analytics

* Pie chart visualization using Recharts
* Shows distribution of Call / Text / Video interactions

### 🔔 Notifications

* Toast messages appear when actions are performed

### 📱 Fully Responsive

* Works on:

  * 📱 Mobile
  * 💻 Desktop
  * 📟 Tablet

---

## 🛠️ Technologies Used

* ⚛️ React.js
* 🌐 React Router DOM
* 🎨 Tailwind CSS + DaisyUI
* 📊 Recharts
* 🔔 React Toastify (or similar)

---

## 📂 Project Structure

```bash
src/
│── components/
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── Friend.jsx
│   └── Context/
│       └── FriendsContextData.jsx
│
│── pages/
│   ├── Home.jsx
│   ├── FriendsDetails.jsx
│   ├── Timeline.jsx
│   ├── States.jsx
│   └── NotFound.jsx
│
│── data/
│   └── friends.json
```

---

## ⚡ Key Functionalities

* ✅ Dynamic data fetching from JSON
* ✅ Context API for global state management
* ✅ Real-time timeline updates
* ✅ Filtering system for timeline
* ✅ Interactive pie chart analytics

---

## 🧪 Additional Features

* 🔍 Search & filter timeline entries
* 📅 Date formatting for better readability
* 🎯 Conditional rendering (loading spinner, empty state)
* ⚠️ 404 page for invalid routes

---

## 📦 Installation & Setup

```bash
# Clone the repository
git clone https://github.com/your-username/keenkeeper.git

# Navigate into the project
cd keenkeeper

# Install dependencies
npm install

# Run the project
npm run dev
```

---

## 🚀 Deployment

You can deploy this project on:

* Vercel
* Netlify
* Cloudflare Pages

---

## 🧠 Future Improvements

* ⏱️ “Time ago” format (e.g., 2 hours ago)
* 🔄 Sort timeline by newest/oldest
* 🌙 Dark mode support
* ☁️ Backend integration for persistent data

---

## 👨‍💻 Author

Developed by [Your Name]

---

## ⭐ Acknowledgment

This project was built as part of a front-end assignment to demonstrate skills in React, state management, and UI design.

---

💡 *Keep your friendships alive, one interaction at a time!*
