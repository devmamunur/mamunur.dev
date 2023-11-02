const z = require("zod");
require("dotenv").config();

const envSchema = z.object({
    NODE_ENV: z
        .enum(["development", "production", "test"])
        .default("development"),
    GITHUB_ID : z.string().optional(),
    GITHUB_SECRET : z.string().optional(),
});

const serverEnvCheck = envSchema.safeParse(process.env);

if(!serverEnvCheck.success){
    console.error("There is an error with the server environment variables");
    console.error(serverEnvCheck.error.issues);
    process.exit?.(1);
}

console.log("The server environment variables are valid!");

export const serverEnv =  serverEnvCheck.data
