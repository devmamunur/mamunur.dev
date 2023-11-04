import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialProvider from 'next-auth/providers/credentials';
import { serverEnv } from '@/config/schemas/serverSchema';

export const authOptions: NextAuthOptions = {
  pages: {
    signIn: '/signin',
  },
  session: {
    strategy: 'jwt',
    maxAge: 86400,
  },
  providers: [
    CredentialProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(
        credentials: Record<'email' | 'password', string> | undefined,
        _req: any
      ): Promise<any> {
        try {
          let user = {
            email: '',
            password: '',
          };
          if (credentials?.email.toLowerCase() == serverEnv.ADMIN_EMAIL) {
            user.email = <string>credentials?.email;
          }
          if (credentials?.password == serverEnv.ADMIN_PASSWORD) {
            user.password = <string>credentials?.password;
          }
          if (user.email && user.password) {
            return user;
          } else {
            return null;
          }
        } catch (error: any) {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user, account }) {
      return { ...token, ...user };
    },
    async session({ session, token }) {
      session.user = token as any;
      console.log('session : ', session);
      return session;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
