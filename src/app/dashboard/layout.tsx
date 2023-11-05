import React from 'react';
import DashboardNavBar from '@/components/Dashboard/DashboardNavBar';
import DashboardFooter from '@/components/Dashboard/DashboardFooter';

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
      <DashboardNavBar />
      {children}
      <DashboardFooter />
    </>
  );
}
