import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function LendAHand() {
  return (
    <div className=" min-h-[50vh] w-full m-auto max-w-[1032px] p-8 pt-40 text-white">
      <div>
        <h1 className="text-4xl kn-text-yellow font-black drop-shadow-lg">
          LEND A HAND
        </h1>
        <p className=" pt-4">
          Want to be a part of the movement, volunteer, or sponsor for a
          charity? Here are the NGO Foundation shelters in Antipolo City Rizal
          offering the Independent Living Program, and check them out!
        </p>
      </div>
      <div className="py-20">
        <div className="flex flex-wrap gap-3 md:gap-8">
          <Image
            src={"/img/cribsfoundation-logo.png"}
            alt="CRIBS Foundation"
            width={288}
            height={109}
          />
          <div className="flex flex-col gap-3">
            <div className="flex flex-wrap md:gap-8">
              <span className="kn-text-yellow font-black drop-shadow-lg w-[80px]">
                Email:
              </span>
              <p>cribsfoundation@yahoo.com</p>
            </div>
            <div className="flex flex-wrap md:gap-8">
              <span className="kn-text-yellow font-black drop-shadow-lg w-[80px]">
                Contact:
              </span>
              <p>+632 86582807/+63 9175112742</p>
            </div>
            <div className="flex flex-wrap md:gap-8">
              <span className="kn-text-yellow font-black drop-shadow-lg w-[80px]">
                Website:
              </span>
              <p>cribsfoundationinc.org</p>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-3 md:gap-8 pt-8">
          <Image
            src={"/img/childrengarden.png"}
            alt="Children Garden"
            width={288}
            height={109}
          />
          <div className="flex flex-col gap-3">
            <div className="flex flex-wrap md:gap-8">
              <span className="kn-text-yellow font-black drop-shadow-lg w-[80px]">
                Email:
              </span>
              <p>info@childrensgarden.ph</p>
            </div>
            <div className="flex  flex-wrap gap-8">
              <span className="kn-text-yellow font-black drop-shadow-lg w-[80px]">
                Contact:
              </span>
              <p>+63 9194794880</p>
            </div>
            <div className="flex  flex-wrap gap-8">
              <span className="kn-text-yellow font-black drop-shadow-lg w-[80px]">
                Website:
              </span>
              <p>childrensgarden.ph</p>
            </div>
          </div>
        </div>
        {/* sign here */}
        <div className="py-20 flex flex-col gap-2">
          <p>You can also sign for a change!</p>
          <div>
            <Link href={"/sign-petition"}>
              <Button variant={"knBlue"}>Sign the Petition</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
