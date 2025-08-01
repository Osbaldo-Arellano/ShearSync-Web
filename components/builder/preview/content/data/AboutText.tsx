"use client";
import fontClassMap from "../styles/fontClassMap";

export default function AboutText({
  text,
  font,
  size,
  weight,
}: {
  text: string;
  font: string;
  size: number;
  weight: number;
}) {
  return (
    <>
      {Array.from({ length: 50 }).map((_, i) => (
        <p
          key={i}
          className="max-w-md text-gray-400"
          style={{
            fontFamily: fontClassMap[font] || "inherit",
            fontSize: `${size}px`,
            fontWeight: weight,
          }}
        >
          {text || "Your business bio will appear here."}
        </p>
      ))}
    </>
  );
}
