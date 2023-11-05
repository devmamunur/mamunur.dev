import './globals.css';
import { JetBrains_Mono } from 'next/font/google';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import NavBar from '@/components/NavBar';
import React from 'react';
import Footer from '@/components/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

config.autoAddCss = false;

const jetBrains_Mono = JetBrains_Mono({
  weight: ['300', '400', '500', '600', '700', '800'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: '@devmamunur | Mamunur Rashid Software Developer',
  description:
    'I am Full Stack Web Developer | Open Source Enthusiast | JavaScript, TypeScript, Node.js, React.js, Vue.js | 4 years of industry experience.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${jetBrains_Mono.className} bg-slate-900`}>
        <NavBar />
        {children}
        <Footer />
        <ToastContainer />
      </body>
    </html>
  );
}
