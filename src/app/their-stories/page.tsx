"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Tooltip from "@/components/motion/ToolTip";

export interface KidIllustration {
  title: string;
  name: string;
  quote: string;
  path: string;
  variant: string;
}
const CaseLower = (str: string) => {
  return str.toLowerCase();
};

export const kids: KidIllustration[] = [
  {
    title: "Jasmin",
    name: "Jasmin Lopez",
    quote: `"It saved me, na realize ko na ang dami kong potential na pwedeng ibahagi."`,
    path: "/img/jasmin-full-illustration.png",
    variant: "fadeInToLeft",
  },
  {
    title: "Kristine",
    name: "Kristine Villanueva",
    quote:
      '"Kanya kanya tayo ng laban at nilalaban, pero kahit ganun, makakayanan parin tumayo sa sariling mga paa."',
    path: "/img/kristine-full-illustration.png",
    variant: "fadeInToTop",
  },
  {
    title: "DANIELA",
    name: "Daniela Peno",
    quote: `"Marami nang pagsubok ang nakayanan, ngayon ka pa ba susuko, kayang kaya 'to."`,
    path: "/img/daniela-full-illustration.png",
    variant: "fadeInToBottom",
  },
  {
    title: "REYNALDO",
    name: "Reynaldo Buena",
    quote: `"Magiging inspirasyon ako sa mga kabataang katulad ko."`,
    path: "/img/rey-full-illustration.png",
    variant: "fadeInToBottom",
  },
  {
    title: "Wilson",
    name: "Wilson Torilyo",
    quote: `"Once na kailangan nila tutulong din ako."`,
    path: "/img/wilson-full-illustration.png",
    variant: "fadeInToBottom",
  },
  {
    title: "Sheilamay",
    name: "Sheilamay Arroyo",
    quote: `"Masaya akong sabihin na isa akong matatag na nalampasan ang lahat ng nangyari sa aking nakaraan"`,
    path: "/img/sheila-full-illustration.png",
    variant: "fadeInToTop",
  },
  {
    title: "Laizanny",
    name: "Laizanny Munda",
    quote: `"Takot na takot akong mabuhay mag isa pero dahil sa ILP, nalagpasan ko 'yun at proud ako."`,
    path: "/img/laizanny-full-illustration.png",
    variant: "fadeInToRight",
  },
];

export default function TheirStories() {
  return (
    <>
      <div className="flex flex-col px-4 py-[160px] lg:py-0 xl:px-0">
        <h1 className="text-5xl kn-text-yellow font-bold drop-shadow-lg text-center">
          KNOW THEIR STORIES
        </h1>

        <div className="flex flex-wrap md:flex-nowrap justify-center md:justify-none relative illustration-container">
          {kids.map((kid, index) => (
            <Link
              href={`/their-stories/${CaseLower(kid.title)}`}
              key={index}
              id={`${CaseLower(kid.title)}-container`}
              className="relative"
            >
              <Tooltip key={index} kid={kid} />
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
