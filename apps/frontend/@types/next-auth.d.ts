import { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      passkey: string; // Passkey associated with the user
    } & DefaultSession["user"];
  }
  interface User {
    passkey: string; // Passkey associated with the user
  }
}
