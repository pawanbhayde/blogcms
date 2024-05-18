"use client";
import { ChevronRight, Ghost } from "lucide-react";
import AnimatedGradientText from "./ui/animated-gradient-text";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { HeroImage } from "./heroimage";
import Link from "next/link";
import useAuth from "@/lib/useAuth";

const SiteHero = () => {
  const user = useAuth();
  return (
    <div className="container relative py-20 flex flex-col items-center justify-center">
      <AnimatedGradientText>
        🎉 <hr className="mx-2 h-4 w-[1px] shrink-0 bg-gray-300" />{" "}
        <span
          className={cn(
            `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`
          )}
        >
          Introducing BlogCMS
        </span>
        <ChevronRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
      </AnimatedGradientText>
      <h1 className="text-2xl lg:text-5xl font-bold mt-4 leading-tight max-w-[720px] text-center lg:pt-6">
        Powerfull Open-Source CMS for Bloggers
      </h1>
      <p className="lg:text-lg pt-2 lg:pt-4 font-semibold text-center text-muted-foreground">
        Empowering Bloggers, Unleashing Creativity: Your Ultimate Open-Source
        CMS
      </p>
      <div className="pt-6 flex gap-4 items-center">
        {user ? (
          <Link href="/dashboard">
            <Button className="text-md">Dashboard</Button>
          </Link>
        ) : (
          <Link href="/signup">
            <Button className="text-md">Dashboard</Button>
          </Link>
        )}

        <Button variant="ghost" className="text-md">
          Demo Video
        </Button>
      </div>
      <div className="pt-16 rounded-xl ">
        <HeroImage />
      </div>
    </div>
  );
};

export default SiteHero;
