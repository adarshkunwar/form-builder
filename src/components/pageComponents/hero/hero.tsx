import React from "react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function BackgroundBeamsWithCollisionDemo() {
  return (
    <BackgroundBeamsWithCollision>
      <h2 className=" relative z-20 flex flex-col text-center font-sans text-2xl font-bold tracking-tight text-black md:text-4xl lg:text-7xl dark:text-white">
        Dynamic form builder{" "}
        <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
          <div className="absolute left-0 top-px bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 bg-clip-text bg-no-repeat py-4 text-transparent [text-shadow:0_0_rgba(0,0,0,0.1)]">
            <span className="">Made By Adarsh.</span>
          </div>
          <div className="relative bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 bg-clip-text bg-no-repeat py-4 text-transparent">
            <span className="">Made By Adarsh.</span>
          </div>
        </div>
        <Button variant="outline" asChild size="lg" className="mt-8">
          <Link href={"/form"}>Get Started</Link>
        </Button>
      </h2>
    </BackgroundBeamsWithCollision>
  );
}
