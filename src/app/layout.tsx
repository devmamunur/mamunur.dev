import './globals.css';
import { JetBrains_Mono } from 'next/font/google';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

config.autoAddCss = false;

const jetBrains_Mono = JetBrains_Mono({
  weight: ['300', '400', '500', '600', '700', '800'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${jetBrains_Mono.className} bg-slate-900`}>
        {children}
        <ToastContainer />
      </body>
    </html>
  );
}
