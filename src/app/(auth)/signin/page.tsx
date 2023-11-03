"use client";
import { signIn } from "next-auth/react";
import { useRouter } from 'next/navigation';
import React, {ChangeEvent, useState} from "react";

const LoginPage = () => {
    const router = useRouter();
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const formSubmit = async (event : React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const result = await signIn("credentials", {
            email,
            password,
            redirect: false,
        });
        if (result!.ok) {
            console.log('success');
            router.push('/');
        } else {
            console.log('field');
        }
    }
    return (
        <div className="bg-dark p-8 rounded-md max-w-md mx-auto mt-20">
            <h1 className="text-2xl font-bold mb-4 text-white">Login</h1>
            <form onSubmit={formSubmit}>
                <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    onChange={(event: ChangeEvent<HTMLInputElement>) =>
                        setEmail(event.target.value)
                    }
                    className="w-full p-2 mb-4 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
                />
                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    onChange={(event: ChangeEvent<HTMLInputElement>) =>
                        setPassword(event.target.value)
                    }
                    className="w-full p-2 mb-4 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
                />
                <button type="submit" className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700 focus:outline-none">
                    Login
                </button>
            </form>
        </div>
    );
};
export default LoginPage;
