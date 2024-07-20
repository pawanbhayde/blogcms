"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import { Icons } from "@/components/icons";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    const { error } = await supabase.auth.signUp({ email, password });
    if (error) setError(error.message);
    else
      alert(
        "Signup successful, please check your email for verification link."
      );
  };

  const router = useRouter();

  useEffect(() => {
    const handleAuthChange = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      if (session) {
        router.push("/"); // Redirect to the root page or dashboard
      }
    };

    handleAuthChange();

    const { data: authListener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        if (session) {
          router.push("/");
        }
      }
    );

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, [router]);

  const handleGoogleSignup = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
    });

    if (error) {
      console.error("Error signing up with Google:", error);
    }
  };

  return (
    <div className="h-[100vh] w-full flex justify-center items-center">
      <Card className="mx-auto max-w-sm">
        <CardHeader>
          <CardTitle className="text-xl">Sign Up</CardTitle>
          <CardDescription>
            Enter your information to create an account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSignup}>
            <div className="grid gap-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="first-name">First name</Label>
                  <Input id="first-name" placeholder="Max" required />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="last-name">Last name</Label>
                  <Input id="last-name" placeholder="Robinson" required />
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <Button type="submit" className="w-full">
                Create an account
              </Button>
              {error && <p>{error}</p>}
            </div>
          </form>
          <Button
            onClick={handleGoogleSignup}
            variant="outline"
            className="w-full flex mt-2 gap-3"
          >
            <Icons.google />
            Sign up with Google
          </Button>
          <div className="mt-4 text-center text-sm">
            Already have an account?{" "}
            <Link href="/login" className="underline">
              Sign in
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Signup;
