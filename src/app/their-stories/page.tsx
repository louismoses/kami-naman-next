"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { title } from "process";

import { initializeTooltips } from "@/lib/tooltip";
import Link from "next/link";

interface KidIllustration {
  title: string;
  path: string;
}
const CaseLower = (str: string) => {
  return str.toLowerCase();
};

export default function TheirStories() {
  const kids: KidIllustration[] = [
    {
      title: "Jasmin",
      path: "/img/jasmin-full-illustration.png",
    },
    {
      title: "Kristine",
      path: "/img/kristine-full-illustration.png",
    },
    {
      title: "DANIELA",
      path: "/img/daniela-full-illustration.png",
    },
    {
      title: "REYNALDO",
      path: "/img/rey-full-illustration.png",
    },
    {
      title: "Wilson",
      path: "/img/wilson-full-illustration.png",
    },
    {
      title: "Sheilamay",
      path: "/img/sheila-full-illustration.png",
    },
    {
      title: "Laizanny",
      path: "/img/laizanny-full-illustration.png",
    },
  ];
  return (
    <>
      <div className="flex flex-col">
        <h1 className="text-5xl kn-text-yellow font-bold drop-shadow-lg text-center">
          KNOW THEIR STORIES
        </h1>
        <div className="flex relative illustration-container">
          {kids.map((kid, index) => (
            <Link
              href={`/their-stories/${CaseLower(kid.title)}`}
              key={index}
              id={`${CaseLower(kid.title)}-container`}
              className="relative"
            >
              <div className="tooltip-container"></div>
              <Image
                id={CaseLower(kid.title)}
                key={index}
                src={kid.path}
                width={217}
                height={355}
                alt={kid.title}
                unoptimized
              />
            </Link>
          ))}
        </div>
        <div className="flex justify-between">
          <Button variant={"knBlue"}>Know Our Story</Button>
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
