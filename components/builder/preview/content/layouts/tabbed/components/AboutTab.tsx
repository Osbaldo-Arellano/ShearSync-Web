// components/builder/preview/layouts/tabbed/AboutTab.tsx
"use client";
import AboutText from "../../../data/AboutText";

interface Props {
  text: string;
  font: string;
  size: number;
  weight: number;
}

export default function AboutTab({ text, font, size, weight }: Props) {
  return <AboutText text={text} font={font} size={size} weight={weight} />;
}
