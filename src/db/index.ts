import { drizzle } from 'drizzle-orm/neon-http';

if (!process.env.DATABASE_URL) {
	throw new Error("DATABASE_URL is not defined in the environment variables.");
}

// Initialize the database connection
export const db = drizzle(process.env.DATABASE_URL);

// Example usage of the db variable
console.log("Database initialized:", db);
