import { NextPage } from "next";

interface Props {}

const OurStory = ({}) => {
  return (
    <div className=" min-h-screen w-full m-auto max-w-[1032px] p-8 pt-40 text-white">
      <div>
        <h1 className="text-4xl kn-text-yellow font-black drop-shadow-lg">
          OUR STORY
        </h1>
        <p className=" pt-4">
          KAMI NAMAN is an Interactive Media Campaign organized by researchers
          with the specific objective of highlighting the significance and
          importance of the contributions made by the Independent Living Program
          (ILP) to the lives of young individuals who have experienced abuse,
          neglect, and abandonment. These youths willingly shared their stories
          on the platform to foster empathy, empower the young individuals who
          have similar situations, raise awareness about the program, and drive
          a positive change.
        </p>
      </div>
      <div className="grid lg:grid-cols-2 gap-20  my-20">
        <div>
          <h2 className="text-2xl kn-text-yellow font-black drop-shadow-lg">
            MISSION
          </h2>
          <p className=" pt-4">
            Raise awareness and empower youth living inside the residential
            shelters for both NGO and governmental to have support and guidance
            through the Independent Living Program, nurturing and encouraging
            the youth.
          </p>
        </div>
        <div>
          <h2 className="text-2xl kn-text-yellow font-black drop-shadow-lg">
            VISION
          </h2>
          <p className=" pt-4">
            Be a significant movement and one of the supports for the lives of
            the youth who are living inside the residential shelters, supporting
            the Independent Living Program nationwide.
          </p>
        </div>
        <div className="font-bold">
          <h2 className="text-2xl kn-text-yellow font-black drop-shadow-lg">
            PROPONENTS
          </h2>
          <p className=" pt-4">Cruz, Kyle Gabriel</p>
          <p>Dizon, Catherine Alessandra</p>
          <p>Espero, Redson Tranx </p>
          <p>Ignacio, Kiziah Hanaiel</p>
        </div>
      </div>
    </div>
  );
};

export default OurStory;
