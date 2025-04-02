# MindForward Africa

## Project Overview

MindForward Africa is a mental health support platform designed to connect African youth with mental health professionals and support groups.

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (version 18.x or later)
- npm (version 9.x or later)
- Git

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Emmanuel-kwizera/MindForward_Africa.git
cd MindForward_Africa
```

### 2. Environment Configuration

1. Copy the `.env.example` file to `.env`
2. Fill in the required Supabase credentials:
   ```
   VITE_SUPABASE_URL=your_supabase_project_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

### 3. Install Dependencies

```bash
npm install
```

### 4. Run the Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Project Structure

- `src/`: Source code directory
  - `components/`: React components
  - `contexts/`: React context providers
  - `App.tsx`: Main application component
  - `main.tsx`: Application entry point

## Key Technologies

- React 18
- TypeScript
- Vite
- Supabase
- Tailwind CSS
- React Router

## Authentication

The project uses Supabase for authentication. Ensure you have:
- Enabled Email/Password authentication
- Created the necessary user table in your Supabase project

## Deployment

### Build for Production

```bash
npm run build
```

## Environment Variables

Required environment variables:
- `VITE_SUPABASE_URL`: Supabase project URL
- `VITE_SUPABASE_ANON_KEY`: Supabase anonymous key


