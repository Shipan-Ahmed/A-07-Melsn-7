# 👥 KeenKeeper — Keep Your Friendships Alive

KeenKeeper is a modern web application designed to help you maintain meaningful relationships by tracking your interactions with friends. It reminds you when to reconnect and provides insights into your communication habits.

---

## 🌐 Live Demo

👉  https://a-07-melsn-7.vercel.app/


## 💻 GitHub Repository

👉 https://github.com/Shipan-Ahmed/A-07-Melsn-7

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
KEENKEEPER/
│── public/
│   ├── favicon.svg
│   ├── friends.json
│   └── icons.svg
│
│── src/
│   ├── assets/
│   │   ├── call.png
│   │   ├── facebook.png
│   │   ├── instagram.png
│   │   ├── logo-xl.png
│   │   ├── logo.png
│   │   ├── text.png
│   │   ├── twitter.png
│   │   └── video.png
│   │
│   ├── Components/
│   │   ├── CustomsContext/
│   │   │   └── FriendsContextData.jsx
│   │   ├── Banner.jsx
│   │   ├── Error.jsx
│   │   ├── Footer.jsx
│   │   ├── Friend.jsx
│   │   ├── Friends.jsx
│   │   ├── FriendsDetails.jsx
│   │   └── Navber.jsx
│   │
│   ├── Layouts/
│   │   └── MainLayout.jsx
│   │
│   ├── Pages/
│   │   ├── Homepages/
│   │   │   └── HomePage.jsx
│   │   ├── States/
│   │   │   └── States.jsx
│   │   ├── TimeLine/
│   │   │   └── TimeLine.jsx
│   │   └── Route/
│   │       └── Root.jsx
│   │
│   ├── index.css
│   └── main.jsx
│
│── index.html
│── package.json
│── package-lock.json
│── vite.config.js
│── eslint.config.js
│── .gitignore
│── README.md
```



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

📸 UI Preview

Homepage:
<img width="1918" height="831" alt="image" src="https://github.com/user-attachments/assets/423788ef-f10c-4118-ad82-22a6a1b807ad" />


Friends Section:
<img width="1918" height="867" alt="image" src="https://github.com/user-attachments/assets/c6a3b3c6-8f87-4942-b1b6-3f31079adcda" />

Friend Details Section:
<img width="1917" height="817" alt="image" src="https://github.com/user-attachments/assets/e51bb5ed-f39f-4579-9e36-11694e38bc36" />

Timeline Section: 
<img width="1913" height="871" alt="image" src="https://github.com/user-attachments/assets/0a1bd7a9-5fab-4b88-ad9d-a0a5bb59a2e3" />

States Section:
<img width="1916" height="865" alt="image" src="https://github.com/user-attachments/assets/b9428a09-fc41-4229-9b63-dfdde1cc5ba6" />

Footer Section:
<img width="1918" height="412" alt="image" src="https://github.com/user-attachments/assets/a90649ea-f971-4546-80ae-fa0e76613e22" />



## 📦 Installation & Setup

```bash
# Clone the repository
git clone https://github.com/Shipan-Ahmed/A-07-Melsn-7.git

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

Developed by Shipan Ahmed

---

## ⭐ Acknowledgment

This project was built as part of a front-end assignment to demonstrate skills in React, state management, and UI design.

---

💡 *Keep your friendships alive, one interaction at a time!*
