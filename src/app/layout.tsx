import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Kami Naman Campaign",
  description:
    "Kami Naman Campaign is raising awareness about the importance of Independent Living Program for youth.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="img/favicon.png" type="image/x-icon" />
      </head>
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
