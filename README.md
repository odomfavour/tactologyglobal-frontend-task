# Todo System – Frontend Developer Assignment

This is my implementation of the **Todo System** based on the provided [Figma design](https://www.figma.com/design/y5jco2weGtIH3sdy6BVyMW/T-GLOBAL-TEST?node-id=2001-57594).  
It was built with **Next.js, TypeScript, and Chakra UI**, following the assignment requirements.

## Tech Stack

- [Next.js](https://nextjs.org/) (latest stable)
- [TypeScript](https://www.typescriptlang.org/)
- [Chakra UI](https://chakra-ui.com/)
- [iconsax-reactjs](https://www.npmjs.com/package/iconsax-react)
- [react-icons](https://react-icons.github.io/react-icons/)

## Features

- View todos in **table view** and **card view**
- Mark todos as **completed** (they move to the completed section)
- Show **empty states** and **loading states**
- Responsive design that matches the provided Figma

### Bonus Features

- Add a new todo with the **Add button**
- Live updates (no page reload)
- Simple **localStorage persistence** so todos remain after refresh

## Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/odomfavour/tactologyglobal-frontend-task
cd tactologyglobal-frontend-task
```

2. Install dependencies

```bash
npm install
```

3. Run the development server

```bash
npm run dev
```

The app will be running at http://localhost:3000.

Project Structure

todo-system/
├── components/ # Reusable UI components
├── hooks/ # Custom React hooks (e.g., useOutsideClick)
├── pages/ # Next.js pages (index.tsx, etc.)
├── types/ # TypeScript types and interfaces
├── helpers/ # Utility functions (helpers, constants, formatters)
├── public/ # Static assets (images, icons)
└── README.md # Project documentation

Deployment
[Live Demo](https://tactologyglobal-frontend-task-ogochukwu.vercel.app/)

Author
Ogochukwu Odom
Email
ogochukwuodom@gmail.com
GitHub:
https://github.com/odomfavour/
