export default function Header3({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-2xl md:text-4xl font-bold drop-shadow-[8px_8px_10.5px_hwb(0deg_0%_100%/_25%)] kn-text-yellow">
      {children}
    </h2>
  );
}
