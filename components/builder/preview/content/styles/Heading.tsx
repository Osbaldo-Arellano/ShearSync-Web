"use client";
import { useStyling } from "@/context/StylingContext";
import fontClassMap from "./fontClassMap";

interface Props {
  text: string;
  color?: string; // optional override
  sizeMultiplier?: number; // optional scale
}

export default function Heading({ text, color, sizeMultiplier = 1 }: Props) {
  const { headingFont, headingSize, headingWeight, primaryColor } =
    useStyling();

  return (
    <h1
      style={{
        color: color || primaryColor,
        fontFamily: fontClassMap[headingFont] || "inherit",
        fontSize: `${headingSize * sizeMultiplier}px`,
        fontWeight: headingWeight,
      }}
    >
      {text}
    </h1>
  );
}
