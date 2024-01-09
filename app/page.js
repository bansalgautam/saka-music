import Past from "@/components/Past";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full h-full">
      <h1 className="text-center font-bold text-lg py-2">LATEST RELEASE</h1>
      <Link href="https://youtube.com/watch?v=zmvlJnx0Na0" target="_blank">
        <Image
          src="/images/thumb.jpg"
          alt="Thumbnail"
          height={100}
          width={2000}
          className="w-full max-w-[800px] mx-auto rounded-lg"
        />
      </Link>
      <h1 className="text-center font-bold text-lg py-2">PAST RELEASES</h1>
      <Past />
    </div>
  );
}
