"use client";
import Image from "next/image";

export default function LogoDisplay({ src }: { src: string }) {
  return (
    <Image
      src={src}
      alt="Logo Preview"
      width={100}
      height={100}
      className="rounded"
    />
  );
}
