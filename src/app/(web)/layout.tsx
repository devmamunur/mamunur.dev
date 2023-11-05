import NavBar from '@/components/Web/NavBar';
import React from 'react';
import Footer from '@/components/Web/Footer';

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
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
}
