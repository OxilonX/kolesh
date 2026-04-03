"use client";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import {
  Select,
  SelectGroup,
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";

import { useState } from "react";
import { signUp, updateUserProfile } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export function SignupForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const [loading, setLoading] = useState(false);
  const [gender, setGender] = useState("MALE");
  const router = useRouter();
  const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData(e.currentTarget);
      const name = formData.get("name") as string;
      const email = formData.get("email") as string;
      const password = formData.get("password") as string;
      const age = formData.get("age") as string;

      const userData = await signUp(email, password, name);

      if (!userData || !userData.user) {
        throw new Error("Signup failed: no user data returned");
      }

      await updateUserProfile(
        userData.user.id,
        age.toString(),
        gender as "MALE" | "FEMALE",
      );

      toast.success("Account created successfully", {
        description: "Welcome to Kolesh! Redirecting you to login...",
        position: "bottom-center",
      });
      setTimeout(() => router.push("/login"), 1500);
    } catch (err: any) {
      toast.error("Sign up failed", {
        description:
          err.message || "An unexpected error occurred. Check your connection.",
        position: "bottom-center",
      });
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-xl">Create your account</CardTitle>
          <CardDescription>
            Enter your email below to create your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSignUp}>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="name">Full Name</FieldLabel>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="John Doe"
                  required
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="m@example.com"
                  required
                />
              </Field>
              <div className="grid grid-cols-2 gap-4">
                <Field>
                  <FieldLabel>Gender</FieldLabel>
                  <Select
                    name="gender"
                    value={gender}
                    onValueChange={setGender}
                  >
                    <SelectTrigger className="w-full ">
                      <SelectValue placeholder="Select a Gender" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Gender</SelectLabel>
                        <SelectItem value="MALE">Male</SelectItem>
                        <SelectItem value="FEMALE">Female</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </Field>

                <Field>
                  <FieldLabel htmlFor="age">Age</FieldLabel>
                  <Input
                    id="age"
                    defaultValue={"18"}
                    type="text"
                    name="age"
                    placeholder="18"
                    required
                  />
                </Field>
              </div>
              <Field>
                <Field className="grid grid-cols-1">
                  <Field>
                    <FieldLabel htmlFor="password">Password</FieldLabel>

                    <Input
                      id="password"
                      type="password"
                      name="password"
                      required
                    />
                  </Field>
                </Field>
                <FieldDescription>
                  Must be at least 8 characters long.
                </FieldDescription>
              </Field>
              <Field>
                <Button type="submit">
                  {loading ? "Creating Account..." : "Sign Up"}
                </Button>
                <FieldDescription className="text-center">
                  Already have an account? <a href="login">Sign in</a>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
      <FieldDescription className="px-6 text-center">
        By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
        and <a href="#">Privacy Policy</a>.
      </FieldDescription>
    </div>
  );
}
