'use client';
import React, { ChangeEvent, useState } from 'react';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';
import ToastHelper from '@/helpers/toastHelper';
import { z } from 'zod';

const signInSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

interface FormErrors {
  email: string | null;
  password: string | null;
}

const SignIn: React.FC = () => {
  const router = useRouter();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [formErrors, setFormErrors] = useState<FormErrors>({
    email: null,
    password: null,
  });
  const formSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      signInSchema.parse({ email, password });
      setFormErrors({ email: null, password: null });
      const result = await signIn('credentials', {
        email,
        password,
        redirect: false,
      });
      if (result!.ok) {
        ToastHelper.success('Successfully signin');
        router.push('/dashboard/home');
      } else {
        ToastHelper.error("Credentials doesn't match");
      }
    } catch (e) {
      if (e instanceof z.ZodError) {
        e.errors.forEach(err => {
          if (err.path[0] === 'email') {
            setFormErrors(prevErrors => ({
              ...prevErrors,
              email: err.message,
            }));
          } else if (err.path[0] === 'password') {
            setFormErrors(prevErrors => ({
              ...prevErrors,
              password: err.message,
            }));
          }
        });
      }
    }
  };
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
        {formErrors.email && (
          <p className="text-red-500 text-xs mb-2">{formErrors.email}</p>
        )}
        <input
          type="password"
          placeholder="Password"
          name="password"
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            setPassword(event.target.value)
          }
          className="w-full p-2 mb-4 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
        />
        {formErrors.password && (
          <p className="text-red-500 text-xs mb-2">{formErrors.password}</p>
        )}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700 focus:outline-none"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default SignIn;
