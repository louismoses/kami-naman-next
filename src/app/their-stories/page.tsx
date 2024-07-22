"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function TheirStories() {
  return (
    <>
      <div className="flex flex-col">
        <h1 className="text-5xl kn-text-yellow font-bold drop-shadow-lg">
          KNOW THEIR STORIES
        </h1>
        <div>
          <Image
            src={"/img/jasmin-full-illustration.png"}
            width={90}
            height={90}
            alt="jasmine"
            unoptimized
          />
        </div>
        <div className="flex justify-between">
          <Button>Know Our Story</Button>
          <div>
            <p className="text-right text-white">
              Want to share your ILP story? <br />
              <span className="kn-text-yellow font-bold"> Message us!</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
