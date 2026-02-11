import NextAuth from "next-auth";
import { auhtOptions } from "@/lib/auth";

const handler = NextAuth(auhtOptions);

export { handler as GET, handler as POST }