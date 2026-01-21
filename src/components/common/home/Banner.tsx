"use client";

import dynamic from "next/dynamic";
const Achievements = dynamic(
  () => import("@/components/common/home/Achievements"),
);

export default function Banner() {
  return (
    <section className="realative w-full">
      <div className="relative w-full h-[26svh] md:h-[93svh] overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-contain md:object-cover"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        >
          <source
            src="https://res.cloudinary.com/do6l2audn/video/upload/v1768962835/Hero-video-2_xvrmg2.mp4"
            type="video/mp4"
          />
        </video>
      </div>
    </section>
  );
}
