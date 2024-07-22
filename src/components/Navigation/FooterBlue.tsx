"use client";
import Link from "next/link";
import Image from "next/image";
import { FaFacebook } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaMobileAlt } from "react-icons/fa";
import { usePathname } from "next/navigation";

interface MenuItem {
  title: string;
  path: string;
}
export default function FooterBlue() {
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
  ];
  return (
    <footer id="footer">
      <div
        className="blue-footer text-white p-8"
        style={{ backgroundImage: 'url("/img/blue-bg.png")' }}
      >
        <div className="max-w-[1224px] w-full m-auto">
          <div className="flex  justify-between flex-wrap gap-4 py-8 sm:py-20">
            <div className=" xl:max-w-[600px] w-full">
              <div className="w-[121px] pb-6">
                <Image
                  src={"/img/logo.png"}
                  alt="Kami Naman logo"
                  width={600}
                  height={277}
                  unoptimized
                />
              </div>
              <p>
                KAMI NAMAN is an interactive Media Campaign organized by
                researchers with the specific objective of highlighting the
                significance and importance of the contributions made by the
                independent Living Program (LIP) to the lives of young
                individuals who have experienced abuse, neglect, and
                abandonment. These youths willingly shared their stories on the
                platform to foster empathy, empower the young individuals who
                have similar situations, raise awareness about the program and
                drive a positive change.
              </p>
            </div>
            <div className="flex flex-wrap gap-8 sm:gap-20 pt-5">
              <div>
                <h3 className="font-black text-xl">Quick Links</h3>
                <div className="flex flex-col gap-3 pt-4">
                  {menus.map((menu, index) => (
                    <Link
                      href={menu.path}
                      key={index}
                      className={` ${
                        menu.path === pathname
                          ? " underline kn-text-yellow"
                          : ""
                      }`}
                    >
                      <span className="">{menu.title}</span>
                    </Link>
                  ))}
                  <Link href={"/sign-petition"}>Sign the Petition</Link>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="font-black text-xl kn-text-yellow pb-1">
                  Get in touch!
                </h3>
                <a
                  href="https://www.facebook.com/share/hpi3C6QKVgShtguA/?mibextid=qi2Omg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="flex gap-1 items-center">
                    <FaFacebook size={20} /> <span>@kaminaman.campaign</span>
                  </div>
                </a>
                <a
                  href="https://www.tiktok.com/@kaminaman_?_t=8nIww5urN45&_r=1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="flex gap-1 items-center">
                    <FaTiktok size={20} /> <span> @kaminaman_</span>
                  </div>
                </a>
                <a href="tel:+639171273944">
                  <div className="flex gap-1 items-center">
                    <FaMobileAlt size={20} />
                    <span>+63-917-127-3944</span>
                  </div>
                </a>
                <a href="mailto:kn.campaign23@gmail.com">
                  <div className="flex gap-1 items-center">
                    <FaEnvelope size={20} />{" "}
                    <span>kn.campaign23@gmail.com</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
