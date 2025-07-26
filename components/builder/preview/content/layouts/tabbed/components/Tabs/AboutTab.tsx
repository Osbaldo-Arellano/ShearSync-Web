"use client";

import { useStyling } from "@/context/StylingContext";
import AboutText from "../../../../data/AboutText";

export default function AboutTab() {
  const { about, bodyFont, bodySize, bodyWeight } = useStyling();

  return (
    <AboutText
      text={about}
      font={bodyFont}
      size={bodySize}
      weight={bodyWeight}
    />
  );
}
