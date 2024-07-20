import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaFacebook } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { motion } from "framer-motion";

export default function IndexNav() {
  return (
    <div className="absolute z-10 w-full flex flex-col items-center gap-4 bottom-8 md:bottom-16">
      <div>
        <Link href="/the-story" passHref>
          <motion.div
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.1 }}
          >
            <Button size="md" variant="outlined" className=" ">
              Read more
            </Button>
          </motion.div>
        </Link>
      </div>
      <div className="flex gap-4">
        <a
          href="https://www.facebook.com/KamiNamanCampaign/?rdid=rs9ChR3jWpsfjaR0"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook
            className="kn-text-yellow hover:scale-75 ease-in-out duration-500"
            size={40}
          />
        </a>
        <a
          href="https://www.tiktok.com/@kaminaman_?_t=8nIww5urN45&_r=1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTiktok
            className="kn-text-yellow hover:scale-75 ease-in-out duration-500"
            size={40}
          />
        </a>
      </div>
    </div>
  );
}
