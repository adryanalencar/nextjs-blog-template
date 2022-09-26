import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export default NextAuth({
    adapter: PrismaAdapter(prisma),
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID || "",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
            authorization: {
                params: {
                    scope: [
                        "openid",
                        "email",
                        "profile"
                    ].join(" ")
                },
            },
        }),
    ],
    secret: process.env.NEXTAUTH_SECRET || "",
    pages: {
        signIn: "/auth/sign-in",
    },
})