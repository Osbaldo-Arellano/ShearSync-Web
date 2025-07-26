"use client";

import { useState } from "react";
import Image from "next/image";
import { FaInstagram } from "react-icons/fa";

export default function HeroBannerGallery({ images }: { images: string[] }) {
  const [current, setCurrent] = useState(0);

  const prev = () => {
    setCurrent((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const next = () => {
    setCurrent((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="relative w-full h-[300px] sm:h-[400px] rounded overflow-hidden shadow-lg">
      {/* Image */}
      <Image
        src={images[current]}
        alt={`Gallery Image ${current + 1}`}
        fill
        className="object-cover"
        priority
      />

      {/* Instagram Icon */}
      <a
        href="https://instagram.com" // Replace with actual post URL if needed
        target="_blank"
        rel="noopener noreferrer"
        className="absolute top-2 right-2 bg-black bg-opacity-50 rounded-full p-2 text-white hover:bg-opacity-70 transition"
      >
        <FaInstagram className="w-5 h-5" />
      </a>

      {/* Left Arrow */}
      <button
        onClick={prev}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-40 hover:bg-opacity-70 text-white rounded-full p-2 z-10"
      >
        ◀
      </button>

      {/* Right Arrow */}
      <button
        onClick={next}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-40 hover:bg-opacity-70 text-white rounded-full p-2 z-10"
      >
        ▶
      </button>
    </div>
  );
}
