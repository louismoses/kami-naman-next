import FooterBlue from "@/components/Navigation/FooterBlue";
import TopNav from "@/components/Navigation/TopNav";

export default function Home() {
  return (
    <>
      <TopNav />
      <section className="w-full h-screen bg-neutral-400 p-8">
        this is the story
      </section>
      <section className="w-full h-screen bg-green-400">section 2</section>

      <FooterBlue />
    </>
  );
}
