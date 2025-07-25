"use client";
import fontClassMap from "./fontClassMap";

interface Props {
  text: string;
  font: string;
  size: number;
  weight: number;
  color: string;
}

export default function Heading({ text, font, size, weight, color }: Props) {
  return (
    <h1
      style={{
        color,
        fontFamily: fontClassMap[font] || "inherit",
        fontSize: `${size}px`,
        fontWeight: weight,
      }}
    >
      {text}
    </h1>
  );
}
