"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Social from "../Social";
import EmailIcon from "@mui/icons-material/Email";

export default function AboutComp({ title, about, className, dataAOS, src }) {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      className={`max-w-[450px] flex flex-col items-center bg-black p-4 rounded-xl ${className} transition duration-[2000]`}
      data-aos={dataAOS}
    >
      {/* <h1 className="pb-4 font-bold text-xl text-[#d6a646]">ABOUT</h1> */}
      <div className="bg-gradient-to-br from-white to-slate-400 rounded-xl max-w-[400px] max-h-[350px] overflow-hidden">
        <Image
          src={src}
          width={400}
          height={265.05}
          alt="profile"
          className="transition duration-[2000]"
          data-aos="fade-up"
        />
      </div>
      <div className="pt-4 w-full text-center">
        <h1 className="text-xl font-bold text-center text-[#ffd700]">
          {title}
        </h1>
        <div className="flex flex-col items-center gap-2 pt-4 text-sm">
          <div className="text-justify">{about}</div>
          <div className="flex text-[#ffd700] text-md pb-4 pt-1 items-center gap-1">
            <EmailIcon fontSize="small" />
            <Link href="mailto:visionrollfilms@gmail.com">
              <div>visionrollfilms@gmail.com</div>
            </Link>
          </div>
          <div>
            <h2>Social Handles</h2>
            <Social fontSize="large" />
          </div>
        </div>
      </div>
    </div>
  );
}
