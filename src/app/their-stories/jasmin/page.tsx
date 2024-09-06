import Image from "next/image";
import Header1 from "@/components/header-1";
import Header2 from "@/components/header-2";
import Header3 from "@/components/header-3";

export default function Jasmin() {
  return (
    <div className=" w-full  py-4 xl:px-80 ">
      <div className="relative h-full grid xl:grid-cols-2 ">
        <div className="">
          <Image
            src={"/img/jasmin-vector.png"}
            alt="Jasmin's picture"
            width={745}
            height={768}
          />
        </div>
        <div className="min-h-[100vh] px-4">
          <div className=" flex flex-col justify-center items-end md:py-80 ">
            <Header1>
              JASMIN <br /> LOPEZ
            </Header1>
            <div className="text-right flex gap-2 justify-end items-center mr-20 mt-10">
              <Image
                src={"/img/play-button-icon.png"}
                alt={"play-button-icon"}
                width={32}
                height={32}
              />
              <p className="text-white ">Listen to them</p>
            </div>
          </div>
          <div className="text-white text-right py-40">
            <Header2> PART 1:</Header2>
            <Header3>EXPECTATIONS</Header3>
            <p className="pt-4 font-bold">
              Jasmin Lopez, 23 years old, an Independent Living Program graduate
              was transferred to First Love International Ministry shelter in
              Antipolo City in 2017 and stayed there until 2021. Jasmin did not
              disclose the reason for her transfer to the shelter but recalled
              her initial feelings about being transferred to a new environment.
            </p>
            <p className="pt-4">
              Jasmin Lopez, 23 years old, an Independent Living Program graduate
              was transferred to First Love International Ministry shelter in
              Antipolo City in 2017 and stayed there until 2021. Jasmin did not
              disclose the reason for her transfer to the shelter but recalled
              her initial feelings about being transferred to a new environment.
            </p>
            <p className="pt-4">
              Jasmin Lopez, 23 years old, an Independent Living Program graduate
              was transferred to First Love International Ministry shelter in
              Antipolo City in 2017 and stayed there until 2021. Jasmin did not
              disclose the reason for her transfer to the shelter but recalled
              her initial feelings about being transferred to a new environment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
