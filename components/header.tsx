"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

const SiteHeader = () => {
  return (
    <div className="container relative h-16 flex items-center justify-between">
      <div className="flex gap-3 items-center">
        <div>
          <Image src="/images/logo.png" width={40} height={40} alt="logo" />
        </div>
        <h2 className="text-xl font-bold">BlogCMS</h2>
      </div>
      <div className="flex gap-3 items-center">
        <Link href="/signup">
          <Button variant={"ghost"}>Sign Up</Button>
        </Link>
        <Link href="/login">
          <Button>Login</Button>
        </Link>
      </div>
    </div>
  );
};

export default SiteHeader;
