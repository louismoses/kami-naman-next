import { NextPage } from "next";

interface Props {}

const OurStory = ({}) => {
  return (
    <div className=" min-h-screen w-full m-auto max-w-[1016px] p-8 pt-40 text-white">
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
    </div>
  );
};

export default OurStory;
