"use client";
import Image from "next/image";

export default function HeroBanner({ src }: { src: string }) {
  return (
    <div className="w-full h-[160px] relative">
      <Image src={src} alt="Hero Banner" fill className="object-cover" />
    </div>
  );
}
