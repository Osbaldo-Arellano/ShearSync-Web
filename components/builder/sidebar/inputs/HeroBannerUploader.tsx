"use client";

import Image from "next/image";
import { useRef } from "react";

interface HeroBannerUploaderProps {
  bannerUrls: string[];
  onUpload: (urls: string[]) => void;
}

export default function HeroBannerUploader({
  bannerUrls,
  onUpload,
}: HeroBannerUploaderProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    const readers = Array.from(files).map((file) => {
      return new Promise<string>((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result as string);
        reader.onerror = reject;
        reader.readAsDataURL(file);
      });
    });

    Promise.all(readers).then((newUrls) => {
      onUpload([...bannerUrls, ...newUrls]);
    });
  };

  const handleRemove = (index: number) => {
    const updated = bannerUrls.filter((_, i) => i !== index);
    onUpload(updated);
  };

  return (
    <div className="flex flex-col gap-3">
      <label className="text-xs text-gray-400">Gallery</label>

      <input
        type="file"
        accept="image/*"
        multiple
        onChange={handleUpload}
        ref={fileInputRef}
        id="hero-gallery-upload"
        className="hidden"
      />
      <label
        htmlFor="hero-gallery-upload"
        className="inline-block w-fit px-4 py-2 rounded bg-neutral-800 hover:bg-neutral-700 text-white text-xs font-medium cursor-pointer border border-neutral-700 transition"
      >
        Upload Images
      </label>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {bannerUrls.map((url, index) => (
          <div
            key={index}
            className="relative h-[120px] rounded border border-neutral-700 overflow-hidden"
          >
            <Image
              src={url}
              alt={`Banner ${index + 1}`}
              fill
              className="object-cover"
            />
            <button
              onClick={() => handleRemove(index)}
              className="absolute top-0 right-0 bg-black bg-opacity-60 text-white text-xs px-1 rounded-bl hover:bg-opacity-80"
            >
              ✕
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
