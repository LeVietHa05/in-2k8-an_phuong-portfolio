import type { Metadata } from "next";
import { Playfair } from "next/font/google";
import "./globals.css";

const playfairSans = Playfair();

export const metadata: Metadata = {
  title: "My Portfolio - An Phuong",
  description: "I’m An Phuong, a senior based in Hanoi, Vietnam. My poetry is a result of my constant and ever-ongoing introspection and evolution. It is under Hanoi skies and in Hanoi’s dust-ridden air that these works have been tenderly cultivated. I believe that poetry is, above all, a deeply felt question, one that I extend to myself and to you, the reader. ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body
        className={`${playfairSans.className}  antialiased p-15 bg-[#FFF4E6]`}
      >
        <div className="max-w-[1440px] mx-auto">
          {children}
        </div>
      </body>
    </html>
  );
}
