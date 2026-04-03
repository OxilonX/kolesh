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

interface SignUpResponse {
  user: {
    id: string;
    email: string;
    name: string;
    emailVerified: boolean;
    createdAt: Date;
    updatedAt: Date;
    image?: string | null;
  };
}

export async function signUp(
  email: string,
  password: string,
  name: string,
): Promise<SignUpResponse> {
  const { data, error } = await authClient.signUp.email({
    email,
    password,
    name,
  });
  if (error) {
    console.error("Signup error details:", error);
    throw error;
  }
  if (!data) throw new Error("Signup failed: no data returned");
  return data as SignUpResponse;
}

export async function updateUserProfile(
  userId: string,
  age: string,
  gender: "MALE" | "FEMALE",
) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/users/${userId}/profile`,
    {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ age, gender }),
    },
  );
  if (!response.ok) throw new Error("Failed to update profile");
  return response.json();
}

export const {
  useSession,
  signOut,
  signIn: emainSingIn,
  signUp: emailSignUp,
} = authClient;
