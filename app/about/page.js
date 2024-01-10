import AboutComp from "@/components/AboutComp";

export default function About() {
  return (
    <>
      <h1 className="text-center text-xl text-[#ffd700] py-4 font-bold">ABOUT</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 justify-items-center gap-8 w-full h-full">
        <AboutComp
          title="SAKA"
          about="SAKA, the rising star, is an incredible lyricist and singer. With his captivating vocals and powerful words, he leaves a lasting impression on every listener reflecting his unique perspective on life, love, and the world around."
          className="lg:justify-self-end"
          dataAOS="fade-right"
        />
        <AboutComp
          title="DH1MAN MUSIC"
          about="Introducing the beat-smith behind the groove, the one and only Harsh Dhiman, better known as Dh1manMusic! With a passion for creating R&B/Soul and Pop masterpieces, Dh1man has been honing his craft from 2020."
          className="lg:justify-self-start"
          dataAOS="fade-left"
        />
      </div>
    </>
  );
}
