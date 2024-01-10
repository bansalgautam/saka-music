"use client";

import Past from "@/components/Past";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const changeRoute = () => {
    router.replace("https://www.youtube.com/watch?v=zmvlJnx0Na0");
  };
  return (
    <div className="w-full h-full">
      <h1 className="text-center font-bold text-lg py-2">LATEST RELEASE</h1>
      <Image
        src="/images/thumb.jpg"
        alt="Thumbnail"
        height={100}
        width={2000}
        className="w-full max-w-[800px] mx-auto rounded-lg cursor-pointer"
        onClick={changeRoute}
      />
      <h1 className="text-center font-bold text-lg py-2">PAST RELEASES</h1>
      <Past />
    </div>
  );
}
