import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "aos/dist/aos.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Saka Music",
  description: "Saka Music",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col`}>
        <Header />
        <div className="text-white pt-12 pb-8 max-w-[1440px] px-2 mx-auto flex-1 w-full overflow-x-hidden">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
