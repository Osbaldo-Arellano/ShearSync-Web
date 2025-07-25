"use client";

import Image from "next/image";
import { useState } from "react";

interface HeroBannerUploaderProps {
  bannerUrl: string | null;
  onUpload: (base64: string | null) => void;
}

export default function HeroBannerUploader({
  bannerUrl,
  onUpload,
}: HeroBannerUploaderProps) {
  const [previewHeight, setPreviewHeight] = useState(120);

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      onUpload(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="flex flex-col gap-2">
      <label className="text-xs text-gray-400">Hero Banner</label>
      <input
        type="file"
        accept="image/*"
        onChange={handleUpload}
        className="text-xs text-gray-400"
      />

      {bannerUrl && (
        <div className="relative mt-2 rounded border border-neutral-700 overflow-hidden">
          <Image
            src={bannerUrl}
            alt="Hero Banner Preview"
            width={600}
            height={previewHeight}
            className="object-cover w-full"
          />
        </div>
      )}
    </div>
  );
}
