# ☕ Coffee Land

A modern, elegant, and fully responsive coffee shop web app built with **Next.js 14**, **React**, and **TypeScript**.  
Enjoy seamless shopping experience, category filtering, animations, cart management, and more.

## 🖼️ Preview

### 🏠 Home Page  
![Image](https://github.com/user-attachments/assets/2b653798-be04-4f2b-a12d-1649a9706aa2)

### 🍽️ Menu Page  
![Image](https://github.com/user-attachments/assets/01be5bf7-cb53-4c02-8900-227dea2cfeef)

## 🚀 Live Demo

👉 [View Deployed Project on Vercel](https://coffee-shop-navy-five.vercel.app/)

---

## ✨ Features

- ⚡️ Fully responsive design
- 🛒 Shopping cart with persistent Zustand store
- 🔍 Category filtering and search
- 🧠 State management with Zustand & React Query
- 🖼 Smooth animations with Framer Motion
- 🔐 Ready for auth integration (Login UI included)
- 🚫 Custom 404 page
- 🎨 Clean and modern UI with Tailwind CSS
- 🌐 Dynamic routing with loading/error states

---

## 🛠️ Stack

| Tech              | Description                        |
| ---------------- | ---------------------------------- |
| Next.js 14       | App router, dynamic routes         |
| React 18         | Client components, Suspense        |
| TypeScript       | Strongly typed everywhere          |
| Tailwind CSS     | Utility-first styling              |
| Zustand          | Global state management (cart)     |
| React Query      | Data fetching and caching          |
| Framer Motion    | UI animations                      |
| Vercel           | Deployment                         |

---

## 🧪 Notes

- 🔐 Login is UI-only; no backend/auth included.
- 🧩 No database/API — data is mocked from static files or internal APIs.
- 🛑 If API call fails, fallback error component (ErrorMessage) is shown.


## 🧪 How to Run Locally

```bash
# Clone the repo
git clone https://github.com/your-username/coffee-land.git

# Install dependencies
cd coffee-land
npm install

# Run the development server
npm run dev
