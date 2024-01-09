"use client";

import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import SpotifyComp from "./SpotifyComp";
import "@splidejs/react-splide/css";
import "./style.css";

export default function Past() {
  return (
    <div className="max-w-[800px] mx-auto">
      <Splide
        hasTrack={false}
        options={{
          rewind: true,
          width: 800,
          type: "slide",
          gap: "1rem",
          drag: "free",
        }}
      >
        <div className="custom-wrapper">
          <SplideTrack>
            <SplideSlide>
              <SpotifyComp src="https://open.spotify.com/embed/track/7yDHHVKLbvDmVw1XXhDDIO?utm_source=generator" />
            </SplideSlide>
            <SplideSlide>
              <SpotifyComp src="https://open.spotify.com/embed/track/5BBB2PDgDWi6NBECj0wJiA?utm_source=generator" />
            </SplideSlide>
          </SplideTrack>

          <div className="splide__arrows flex"></div>
        </div>
      </Splide>
    </div>
  );
}
