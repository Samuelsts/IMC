import { Geist, Geist_Mono } from "next/font/google";
import CalcImc from "./CalcImc/CalcImc";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className="flex w-full h-screen justify-start items-start">
      <CalcImc/>
    </div>
  );
}
