# DigitalPro - Next.js Frontend

This is a Next.js application converted from React + Vite. It provides SEO tools and digital marketing solutions.

## Getting Started

### Installation

1. Install dependencies:
```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Build

Build the application for production:

```bash
npm run build
```

### Start Production Server

Start the production server:

```bash
npm start
```

## Project Structure

- `app/` - Next.js App Router pages and layouts
- `components/` - Reusable React components
- `hooks/` - Custom React hooks
- `public/` - Static assets

## Features

- **Authentication**: Login and signup with protected routes
- **SEO Tools**: 
  - Meta Tag Generator
  - Blog Title Generator
  - Schema Markup Generator
  - Keyword Suggestion Tool
  - Backlink Checker
- **Dashboard**: User profile management
- **Responsive Design**: Mobile-friendly interface

## API Configuration

The application connects to a backend API running on `http://localhost:3001`. Make sure your backend server is running and configured with CORS to accept requests from the frontend.

## Technologies

- Next.js 14
- React 18
- Bootstrap 5
- Axios
- CSS Modules

## Notes

- All routes are protected except `/login` and `/signup`
- The application uses cookies for authentication (withCredentials: true)
- Make sure your backend API is running on port 3001

