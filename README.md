# GEATYM - Premium Fitness Fashion E-commerce

<div align="center">

![GEATYM Logo](./images/logo.png)

**Premium Gear for the Relentless**

A modern, responsive e-commerce website for premium fitness fashion and accessories.

[Live Demo](#) | [Features](#features) | [Getting Started](#getting-started)

</div>

---

## 📋 Table of Contents

- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Development](#development)
- [Building for Production](#building-for-production)
- [Deployment](#deployment)
- [Contributing](#contributing)

---

## 🎯 About

GEATYM is a premium e-commerce platform specializing in high-performance fitness fashion and accessories. Built with modern web technologies, it offers a seamless shopping experience with a focus on performance, aesthetics, and user experience.

## ✨ Features

- 🛍️ **Product Catalog** - Browse premium fitness products with detailed information
- 🛒 **Shopping Cart** - Add, remove, and manage items with persistent cart state
- 📱 **Responsive Design** - Optimized for all devices (mobile, tablet, desktop)
- 🎨 **Modern UI/UX** - Dark mode design with smooth animations
- ⚡ **Fast Performance** - Built with Vite for lightning-fast development and production builds
- 🔍 **Product Details** - Comprehensive product pages with specifications
- 🧭 **Easy Navigation** - Intuitive routing with React Router

## 🛠️ Tech Stack

- **Frontend Framework**: [React 19](https://react.dev/) with TypeScript
- **Build Tool**: [Vite 6](https://vitejs.dev/)
- **Routing**: [React Router DOM 7](https://reactrouter.com/)
- **Styling**: Custom CSS with modern design patterns
- **Type Safety**: TypeScript 5.8
- **State Management**: React Context API

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher) - [Download](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn**

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/GEATYM.git
   cd GEATYM
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**

   Navigate to `http://localhost:3000` to view the application.

## 📁 Project Structure

```
GEATYM/
├── components/          # Reusable React components
│   ├── Footer.tsx
│   ├── Header.tsx
│   └── ProductCard.tsx
├── pages/              # Page components
│   ├── Home.tsx
│   ├── Product.tsx
│   ├── Cart.tsx
│   └── ...
├── src/
│   └── constants/      # Constants and configuration
│       └── assets.ts   # Asset paths
├── images/             # Static images
├── App.tsx             # Main application component
├── CartContext.tsx     # Shopping cart state management
├── index.tsx           # Application entry point
├── index.html          # HTML template
├── vite.config.ts      # Vite configuration
├── tsconfig.json       # TypeScript configuration
└── package.json        # Project dependencies

```

## 💻 Development

### Available Scripts

- **`npm run dev`** - Start development server (with hot reload)
- **`npm run build`** - Build for production
- **`npm run preview`** - Preview production build locally

### Development Workflow

1. **Start the dev server**: `npm run dev`
2. **Make your changes** in the appropriate files
3. **Test your changes** in the browser (auto-reloads on save)
4. **Build for production** when ready: `npm run build`

### Adding New Features

1. Create new components in the `components/` directory
2. Create new pages in the `pages/` directory
3. Update routing in `App.tsx` if adding new pages
4. Add assets to the `images/` directory and update `src/constants/assets.ts`

## 🏗️ Building for Production

To create an optimized production build:

```bash
npm run build
```

This will:
- Compile TypeScript to JavaScript
- Bundle and minify all assets
- Optimize images and code
- Generate a `dist/` folder with production-ready files

To preview the production build locally:

```bash
npm run preview
```

## 🚀 Deployment

### Deploy to GitHub Pages

1. **Update `vite.config.ts`** with your repository name:

   ```typescript
   export default defineConfig({
     base: '/GEATYM/', // Replace with your repo name
     // ... other config
   })
   ```

2. **Build the project**:

   ```bash
   npm run build
   ```

3. **Deploy using GitHub Actions** or manually push the `dist/` folder to the `gh-pages` branch.

### Deploy to Vercel

1. **Install Vercel CLI**:

   ```bash
   npm install -g vercel
   ```

2. **Deploy**:

   ```bash
   vercel
   ```

### Deploy to Netlify

1. **Build the project**: `npm run build`
2. **Drag and drop** the `dist/` folder to [Netlify Drop](https://app.netlify.com/drop)

Or use the Netlify CLI:

```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add some amazing feature'`)
5. Push to the branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request

## 📝 License

This project is licensed under the MIT License.

## 📧 Contact

For questions or support, please contact [your-email@example.com](mailto:your-email@example.com)

---

<div align="center">
Made with ❤️ by the GEATYM Team
</div>
