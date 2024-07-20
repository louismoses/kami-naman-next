export default function IndexVideo() {
  return (
    <div
      id="video-teaser"
      className=" max-w-[1920px] m-auto w-full min-h-[80vh] flex items-center justify-center bg-neutral-800"
    >
      <video height={50} controls>
        <source src="video/intro-video.mp4" />
      </video>
    </div>
  );
}
