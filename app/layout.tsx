import "./globals.css";
import { Inter, Open_Sans, Poppins } from "next/font/google";

const opensans = Open_Sans({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${opensans.className} bg-violet bg-mobile desktop:bg-desktop mobile:bg-cover mobile:bg-no-repeat`}>
        {children}
      </body>
    </html>
  );
}
