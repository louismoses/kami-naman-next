export default function Header3({ children }: { children: React.ReactNode }) {
  return (
    <h1 className="text-6xl md:text-8xl font-black drop-shadow-[8px_8px_10.5px_hwb(0deg_0%_100%/_25%)]  text-right kn-text-yellow">
      {children}
    </h1>
  );
}
