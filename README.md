---

# **GPAweb (not the final name yet)**

GPAweb is a modern, responsive web application using react and vite (with tailwindcss) designed to help students manage and calculate thier various GPA's and course grades and keep them at one place.

---

## **Table of Contents**
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [File Structure](#file-structure)
- [Future Plans](#future-plans)
- [Contributing](#contributing)
- [License](#license)
---

## **Features**
- 🎓 **GPA Calculator**: Enter course grades and credits to calculate your current GPA.
- 🧾 **Course Management**: Add, edit, and delete courses seamlessly.
- 📈 **Data Visualization**: View GPA trends (coming soon).
- 🌐 **Responsive Design**: Fully optimized for mobile and desktop. (future feature).
- 🛠 **Offline Support**: Save data locally and sync later (future feature).
- 🔐 **Account management**: Save data online and sync for access on any device (future device).
- 🚀 **Modern UI**: Clean, intuitive interface powered by Tailwind CSS.

---

## **Tech Stack**
### **Frontend**
- [React](https://reactjs.org/) (via Vite) – user interface.
- [Tailwind CSS](https://tailwindcss.com/) – styling.
- [React Router](https://reactrouter.com/) – page navigation.

### **Build Tools**
- [Vite](https://vitejs.dev/)

---

## **Installation**

Follow these steps to run GPAweb locally on your machine.

### **Prerequisites**
- [Node.js](https://nodejs.org/) (v14+ used)
- [Git](https://git-scm.com/)

### **Clone the Repository**
```bash
git clone https://github.com/yourusername/GPAweb.git
cd GPAweb
```

### **Install Dependencies**
```bash
npm install
```

### **Start the Development Server**
```bash
npm run dev
```

### **Build for Production**
To create a production build:
```bash
npm run build
```

---

## **Usage (not really useful at all right now)**
1. Run the app using `npm run dev`.
2. Open the app in your browser at `http://localhost:xxxx`.
3. Navigate between the Home and Dashboard pages using the navigation bar.
4. Add courses, input grades, and credits on the Dashboard page.
5. View the calculated GPA in real time.

---

## **File Structure**
Here’s a brief overview of the project structure:
```plaintext
GPAweb/
├── public/                 # Static files (e.g., favicon)
├── src/                    # Source code
│   ├── components/         # Reusable React components (e.g., Navbar, CourseForm)
│   ├── pages/              # Page components (e.g., HomePage, DashboardPage)
│   ├── styles/             # Global styles (e.g., index.css)
│   ├── App.jsx             # Main App component
│   ├── main.jsx            # Entry point
│   └── ...
├── tailwind.config.js      # Tailwind CSS configuration
├── postcss.config.js       # PostCSS configuration
├── vite.config.js          # Vite configuration
├── package.json            # Project metadata and dependencies
└── ...
```

---

## **Future Plans**
- 🌟 Setting the actual **functionality** to work atleast the rudimentary aspects first.
- 🌟 Add **data visualization** with charts for GPA trends.
- 🌟 Implement **user accounts** with local and online data synchronization (e.g., Firebase).
- 🌟 Introduce **dark mode** for better accessibility.
- 🌟 Use **React Three Fiber** for a 3D, immersive user interface (really in the future).

---

Feel free to adjust this README as your project evolves! Let me know if you need help setting up your Git repository or refining this further. 😊
