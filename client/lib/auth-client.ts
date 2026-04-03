import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000",
  basePath: "/api/auth",
  fetchOptions: {
    credentials: "include",
  },
});

export async function signIn(email: string, password: string) {
  const { data, error } = await authClient.signIn.email({
    email,
    password,
  });
  if (error) throw error;
  return data;
}

export async function signUp(email: string, password: string, name: string) {
  const { data, error } = await authClient.signUp.email({
    email,
    password,
    name,
  });
  if (error) throw error;
  return data;
}

export const {
  useSession,
  signOut,
  signIn: emainSingIn,
  signUp: emailSignUp,
} = authClient;
