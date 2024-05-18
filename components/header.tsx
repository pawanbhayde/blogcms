"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import useAuth from "@/lib/useAuth";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";

const SiteHeader = () => {
  const router = useRouter();
  const user = useAuth();
  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.push("/"); // Redirect to the root page after sign-out
  };

  return (
    <div className="container relative h-16 flex items-center justify-between">
      <Link href={"/"}>
        <div className="flex gap-3  items-center">
          <div>
            <Image src="/images/logo.png" width={30} height={30} alt="logo" />
          </div>
          <h2 className="text-xl font-bold">BlogCMS</h2>
        </div>
      </Link>

      <div className="flex gap-4">
        {user ? (
          <>
            <Link href="/dashboard">
              <Button variant="secondary">Dashboard</Button>
            </Link>
            <Button onClick={handleSignOut}>Sign Out</Button>
          </>
        ) : (
          <>
            <Link href="/signup">
              <Button variant="ghost">Sign Up</Button>
            </Link>
            <Link href="/login">
              <Button>Sign In</Button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default SiteHeader;
