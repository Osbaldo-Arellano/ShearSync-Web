"use client";

interface FontSelectorProps {
  headingFont: string;
  bodyFont: string;
  onHeadingFontChange: (font: string) => void;
  onBodyFontChange: (font: string) => void;
}

const googleFonts = ["Inter", "Roboto", "Merriweather"];

export default function FontSelector({
  headingFont,
  bodyFont,
  onHeadingFontChange,
  onBodyFontChange,
}: FontSelectorProps) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-xs text-gray-400">Heading Font</label>
      <select
        value={headingFont}
        onChange={(e) => onHeadingFontChange(e.target.value)}
        className="bg-neutral-800 border border-neutral-700 rounded px-2 py-1 text-white text-sm"
      >
        {googleFonts.map((font) => (
          <option key={font} value={font}>
            {font}
          </option>
        ))}
      </select>

      <label className="text-xs text-gray-400 mt-2">Body Font</label>
      <select
        value={bodyFont}
        onChange={(e) => onBodyFontChange(e.target.value)}
        className="bg-neutral-800 border border-neutral-700 rounded px-2 py-1 text-white text-sm"
      >
        {googleFonts.map((font) => (
          <option key={font} value={font}>
            {font}
          </option>
        ))}
      </select>
    </div>
  );
}
