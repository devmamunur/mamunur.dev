const z = require('zod');
require('dotenv').config();

const envSchema = z.object({
  NEXT_PUBLIC_BASE_URL: z.string().url().default('http://localhost:3000'),
});

const clientEnvCheck = envSchema.safeParse(process.env);

if (!clientEnvCheck.success) {
  console.error('There is an error with the server environment variables');
  console.error(clientEnvCheck.error.issues);
  process.exit?.(1);
}

console.log('The server environment variables are valid!');

export const clientEnv = clientEnvCheck.data;
