import type { Metadata } from "next";
import { Kalnia, Poppins } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";

const kalnia = Kalnia({ subsets: ["latin"], weight: ["500", "600", "700"], variable: "--font-kalnia" });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600", "700", "800"], variable: "--font-poppins" });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${kalnia.variable} ${poppins.variable} px-20`}>
        <NavBar/>
        {children}
        </body>
    </html>
  );
}
