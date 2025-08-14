<<<<<<< HEAD
# XTodo App (TypeScript)

A simple and modern to-do application built with React, TypeScript, Vite, and Tailwind CSS.

## Features

- Add, complete, and manage your todos
- Clean and responsive UI
- Keyboard shortcuts for quick entry (Enter/Escape)
- Built with TypeScript for type safety
- Styled with Tailwind CSS

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Start the development server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to view the app.

### 3. Build for production

```bash
npm run build
```

### 4. Preview the production build

```bash
npm run preview
```

## Deployment

### Deploying to Netlify

1. Build the project:

   ```bash
   npm run build
   ```

2. The build files will be in the `dist/` folder

3. On Netlify:
   - Set **Build command**: `npm run build`
   - Set **Publish directory**: `dist`
   - The project includes `netlify.toml` and `_redirects` files for proper SPA routing

### Manual Deployment

Simply upload the contents of the `dist/` folder to your hosting provider.

## Troubleshooting

- **Blank page on deployment**: The project includes redirect rules in `netlify.toml` and `public/_redirects` to handle SPA routing
- **Build fails**: Ensure all dependencies are installed with `npm install`

## Project Structure

```
Assignment 78.1/
├── public/
│   └── _redirects          # Netlify redirect rules for SPA
├── src/
│   ├── App.tsx             # Main React component with TypeScript
│   ├── main.tsx            # Entry point
│   ├── index.css           # Global styles with Tailwind CSS
│   └── vite-env.d.ts       # TypeScript declarations for Vite
├── node_modules/           # Dependencies (ignored by git)
├── .gitignore              # Git ignore rules
├── index.html              # HTML template
├── netlify.toml            # Netlify deployment configuration
├── package.json            # Project dependencies and scripts
├── package-lock.json       # Lock file for exact dependency versions
├── postcss.config.js       # PostCSS configuration for Tailwind
├── README.md               # Project documentation
├── tailwind.config.js      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
└── vite.config.ts          # Vite bundler configuration
```

## License

MIT
=======
# XTodo App (TypeScript)

A simple and modern to-do application built with React, TypeScript, Vite, and Tailwind CSS.

## Features
- Add, complete, and manage your todos
- Clean and responsive UI
- Keyboard shortcuts for quick entry (Enter/Escape)
- Built with TypeScript for type safety
- Styled with Tailwind CSS

## Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Start the development server
```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to view the app.

### 3. Build for production
```bash
npm run build
```

### 4. Preview the production build
```bash
npm run preview
```

## Project Structure
```
├── src/
│   ├── App.tsx
│   ├── main.tsx
│   ├── index.css
│   └── vite-env.d.ts
├── index.html
├── package.json
├── tsconfig.json
├── tailwind.config.js
├── postcss.config.js
├── vite.config.ts
└── README.md
```

## License
MIT
>>>>>>> e4836bb66f0478e84bc862588c40496068bb3f21
