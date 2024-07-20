import ScrollUp40 from "./motion/ScrollUp40";
import ScrollDown80 from "./motion/ScrollDown80";

export default function IndexHero() {
  return (
    <div
      className="text-white min-h-[100vh] w-full bg-cover bg-no-repeat flex justify-center  items-center relative"
      style={{ backgroundImage: "url('gif/intro-bg.gif')" }}
    >
      <div className="max-w-[1224px] flex w-full">
        <ScrollDown80>
          <div className="p-8 mb-10 max-w-[748px]">
            <h2 className="text-4xl font-black">
              Did you know that only about 237 children are adopted and fostered
              each year, out of 5 to 7 million children that are neglected,
              orphaned, and abused in the Philippines?
            </h2>
            <h3 className="text-2xl font-black">(Philstar Global, 2023)</h3>
          </div>
        </ScrollDown80>
      </div>
      <div className=" absolute bottom-8 p-8">
        <ScrollUp40>
          <span className="text-2xl font-medium italic text-yellow">
            Scroll down to play the video
          </span>
        </ScrollUp40>
      </div>
    </div>
  );
}
