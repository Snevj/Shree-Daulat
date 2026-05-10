# Shree Daulat Overseas 🌐

A full-stack business website for **Shree Daulat Overseas**, built with Node.js and Express on the backend and a custom HTML/CSS/JS frontend.

---

## 📁 Project Structure

```
Shree-Daulat/
├── controllers/       # Route handler logic
├── frontend/          # HTML, CSS, JavaScript files
├── routes/            # Express API routes
├── server.js          # Main entry point
├── package.json       # Project dependencies
└── .env               # Environment variables (not committed)
```

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Backend | Node.js, Express.js |
| Frontend | HTML, CSS, JavaScript |
| Environment | dotenv |
| Cross-Origin | cors |

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v14 or higher)
- npm (comes with Node.js)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Snevj/Shree-Daulat.git
   cd Shree-Daulat
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env` file in the root directory:
   ```
   PORT=3000
   # Add your other environment variables here
   ```

4. **Start the server**
   ```bash
   node server.js
   ```

5. **Open in browser**
   ```
   http://localhost:3000
   ```

---

## 📦 Dependencies

```json
{
  "express": "^4.21.2",
  "cors": "^2.8.5",
  "dotenv": "^16.4.7"
}
```

---

## 🔐 Environment Variables

Create a `.env` file in the root of the project. **Never commit this file to GitHub.**

```
PORT=3000
# DATABASE_URL=your_database_url
# Any other secrets or API keys
```

---

## 📄 License

This project is licensed under the **MIT License**.

---

## 👤 Author

**Sneh** — [@Snevj](https://github.com/Snevj)
