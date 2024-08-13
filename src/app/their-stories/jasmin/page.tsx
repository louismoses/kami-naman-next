import Image from "next/image";
export default function Jasmin() {
  return (
    <div className=" w-full  py-4 px-32">
      <div className="relative h-full grid xl:grid-cols-2 ">
        <div className="">
          <Image
            src={"/img/jasmin-vector.png"}
            alt="Jasmin's picture"
            width={745}
            height={768}
          />
        </div>
        <div className="min-h-[100vh]">
          <div className=" flex flex-col justify-center items-end py-80">
            <h1 className="text-8xl font-black drop-shadow-[8px_8px_10.5px_hwb(0deg_0%_100%/_25%)]  text-right kn-text-yellow">
              JASMIN <br /> LOPEZ
            </h1>
            <div className="text-right flex gap-2 justify-end items-center mr-20 mt-10">
              <Image
                src={"/img/play-button-icon.png"}
                alt={"play-button-icon"}
                width={32}
                height={32}
              />
              <p className="text-white">Listen to them</p>
            </div>
          </div>
          <div className="text-white text-right">
            <h2>PART 1:</h2>
            <h3>EXPECTATIONS</h3>
            <p>
              Jasmin Lopez, 23 years old, an Independent Living Program graduate
              was transferred to First Love International Ministry shelter in
              Antipolo City in 2017 and stayed there until 2021. Jasmin did not
              disclose the reason for her transfer to the shelter but recalled
              her initial feelings about being transferred to a new environment.
            </p>
            <p>
              Jasmin Lopez, 23 years old, an Independent Living Program graduate
              was transferred to First Love International Ministry shelter in
              Antipolo City in 2017 and stayed there until 2021. Jasmin did not
              disclose the reason for her transfer to the shelter but recalled
              her initial feelings about being transferred to a new environment.
            </p>
            <p>
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
