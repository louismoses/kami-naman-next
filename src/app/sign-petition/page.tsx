import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function SignPetition() {
  return (
    <div className=" min-h-[100vh] w-full m-auto max-w-[1032px] p-8 pt-40 text-white">
      <div className="flex gap-8">
        <div className="w-full flex flex-col gap-4 flex-auto">
          <h1 className="text-4xl kn-text-yellow font-black drop-shadow-lg">
            SIGN THE PETITION
          </h1>
          <p className="">
            To make the movement profound, join raising a petition in support of
            the Independent Living Program. Click the link to sign!
          </p>

          <a
            href="https://www.change.org/p/kami-naman-raising-awareness-about-the-importance-of-independent-living-program?utm_medium=custom_url&utm_source=share_petition&recruited_by_id=497f57a0-2e48-11ef-82ab-ad37978b9c45&fbclid=IwZXh0bgNhZW0CMTEAAR22oYNtW-MVCFkUEENvnPA6tiNtG5UQ5QR9FtIevT-gBlTh0ifPnRQsv68_aem_dO8LCclA_g9X3PXpsKAWLg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant={"knBlue"}>Sign Here</Button>
          </a>
          <p>or scan the QR Code</p>
          <Image
            src={"/img/petition-qrcode.png"}
            width={108}
            height={108}
            alt="petition qr code"
          />
        </div>
        <div>
          {" "}
          <Image
            src={"/img/petition-poster.png"}
            alt="Petition Poster"
            width={1920}
            height={1080}
            className="max-w-[565px]"
          />
        </div>
      </div>
    </div>
  );
}
