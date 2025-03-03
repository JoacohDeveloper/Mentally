import NextAuth, { CredentialsSignin } from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@/prisma";
import * as bcrypt from "bcrypt";
import Credentials from "next-auth/providers/credentials";
import { SALT_ROUND } from "./constants";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  debug: false,
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: "jwt",
  },
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials || !credentials.email || !credentials.password) {
          return null;
        }

        const email = credentials.email as string;
        const password = credentials.password as string;
        const username = credentials.username as string;

        const user = await prisma.user.findFirst({
          where: { Email: email },
        });

        if (!user) {
          const passwordHash = (await bcrypt.hash(
            password,
            SALT_ROUND
          )) as string;

          const newUser = await prisma.user.create({
            data: {
              Email: email,
              Password: passwordHash,
              Username: username,
            },
          });

          return {
            id: newUser.Uuid,
            name: newUser.Username,
            email: newUser.Email,
          };
        } else if (!(await bcrypt.compare(password, user?.Password))) {
          throw new CredentialsSignin("Email o contraseña incorrecto", {
            message: "Email o contraseña incorrecto",
          });
        } else {
          return {
            id: user.Uuid,
            name: user.Username,
            email: user.Email,
          };
        }
      },
    }),
  ],
  callbacks: {
    async session({ session, user, token }: any) {
      if (session && user) {
        session.user.id = user.id;
      }
      return session;
    },
    async jwt({ token, user, session }) {
      if (user) {
        token.user = user;
      }
      return token;
    },
  },
});
