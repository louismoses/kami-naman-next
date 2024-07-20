export default function IndexVideo() {
  return (
    <div className=" max-w-[1920px] m-auto w-full min-h-[100vh] flex items-center justify-center bg-black">
      <video height={50} controls>
        <source src="video/intro-video.mp4" />
      </video>
    </div>
  );
}
