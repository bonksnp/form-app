# User Data Collection Form

A simple application that collects user data (name, email, and phone number) and stores it in a Supabase database.

## Features

- Form with validation
- Data storage in Supabase
- Real-time feedback on submission

## Setup

1. Clone this repository
2. Install dependencies:
   ```
   npm install
   ```
3. Run the development server:
   ```
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Technology Stack

- Next.js
- React
- Tailwind CSS
- Supabase (Backend as a Service)

## Environment Variables

The Supabase URL and API key are hardcoded in the `lib/supabase.js` file. In a production environment, you should use environment variables.

## Database Structure

The application uses a table called `form_submissions` with the following structure:

- `id`: UUID (Primary Key, auto-generated)
- `name`: Text (Required)
- `email`: Text (Required)
- `phone_number`: Text (Required)
- `created_at`: Timestamp with timezone (Auto-generated) 