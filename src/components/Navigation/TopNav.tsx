"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";

interface MenuItem {
  title: string;
  path: string;
}

const TopNav = ({}) => {
  const pathname = usePathname();
  const menus: MenuItem[] = [
    {
      title: "The Story",
      path: "/the-story",
    },
    {
      title: "Our Story",
      path: "/our-story",
    },
    {
      title: "Their Stories",
      path: "/their-stories",
    },
    {
      title: "Lend a Hand",
      path: "/lend-a-hand",
    },
    {
      title: "Get in Touch",
      path: "#footer",
    },
  ];
  return (
    <nav className="fixed p-8 flex w-full max-w-[1224px] m-auto left-0 right-0  items-center justify-between">
      <Link href={"/"} className="w-[80px]">
        <Image
          src={"/img/logo.png"}
          alt="Kami Naman logo"
          width={600}
          height={277}
          priority
        />
      </Link>
      <div className="flex gap-7 text-white items-center">
        {menus.map((menu, index) => (
          <Link
            href={menu.path}
            key={index}
            className={`font-semibold text-sm hover:kn-text-yellow ${
              menu.path === pathname ? " underline kn-text-yellow" : ""
            }`}
          >
            <span className="hover:kn-text-yellow">{menu.title}</span>
          </Link>
        ))}
        <Link href={"/sign-petition"}>
          <Button variant={"knYellow"}>Sign the Petition</Button>
        </Link>
      </div>
    </nav>
  );
};

export default TopNav;
