import FooterGreen from "@/components/Navigation/FooterGreen";
import TopNav from "@/components/Navigation/TopNav";
export default function PrimaryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <TopNav />
      <section
        className="min-h-[100vh] bg-cover bg-no-repeat w-full flex justify-center items-center"
        style={{ backgroundImage: 'url("/img/blue-bg.png")' }}
      >
        {children}
      </section>
      <FooterGreen />
    </>
  );
}
