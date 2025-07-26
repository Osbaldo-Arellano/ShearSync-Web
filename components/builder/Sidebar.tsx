"use client";

import { useState } from "react";

import ColorPickerInput from "@/components/builder/inputs/ColorPickerInput";
import LayoutSelectInput from "@/components/builder/inputs/LayoutSelectInput";
import LogoUploadInput from "@/components/builder/inputs/LogoUploadInput";
import AboutTextarea from "@/components/builder/inputs/AboutTextArea";
import FontSelector from "@/components/builder/inputs/FontSelector";
import FontSizeSlider from "@/components/builder/inputs/FontSizeSlider";
import FontWeightSelector from "@/components/builder/inputs/FontWeightSelector";
import HoursAndAvailabilityEditor from "@/components/builder/inputs/HoursAndAvailabilityEditor";
import LocationInput from "@/components/builder/inputs/LocationInput";
import SocialLinksInput from "@/components/builder/inputs/SocialLinksInput";
import ThemeSelector from "@/components/builder/inputs/ThemeSelector";
import HeroBannerUploader from "@/components/builder/inputs/HeroBannerUploader";
import { themePresets } from "@/lib/ThemePresets";

interface Availability {
  [day: string]: { open: string; close: string };
}

interface SidebarProps {
  primaryColor: string;
  layout: string;
  onColorChange: (color: string) => void;
  onLayoutChange: (layout: string) => void;

  logoUrl: string | null;
  onLogoUpload: (logo: string | null) => void;

  heroBannerUrls: string[];
  onHeroBannerUpload: (banners: string[]) => void;

  about: string;
  onAboutChange: (value: string) => void;

  headingFont: string;
  bodyFont: string;
  onHeadingFontChange: (font: string) => void;
  onBodyFontChange: (font: string) => void;

  headingSize: number;
  bodySize: number;
  onHeadingSizeChange: (size: number) => void;
  onBodySizeChange: (size: number) => void;

  headingWeight: number;
  bodyWeight: number;
  onHeadingWeightChange: (weight: number) => void;
  onBodyWeightChange: (weight: number) => void;

  availability: Availability;
  onAvailabilityChange: (availability: Availability) => void;

  location: string;
  onLocationChange: (value: string) => void;

  socialLinks: string[];
  onSocialLinksChange: (links: string[]) => void;

  theme: string;
  onThemeChange: (theme: string) => void;

  onNext?: () => void;
}

export default function Sidebar({
  primaryColor,
  layout,
  onColorChange,
  onLayoutChange,
  logoUrl,
  onLogoUpload,
  heroBannerUrls,
  onHeroBannerUpload,
  about,
  onAboutChange,
  headingFont,
  bodyFont,
  onHeadingFontChange,
  onBodyFontChange,
  headingSize,
  bodySize,
  onHeadingSizeChange,
  onBodySizeChange,
  headingWeight,
  bodyWeight,
  onHeadingWeightChange,
  onBodyWeightChange,
  availability,
  onAvailabilityChange,
  location,
  onLocationChange,
  socialLinks,
  onSocialLinksChange,
  theme,
  onThemeChange,
  onNext,
}: SidebarProps) {
  // Local state to toggle advanced styling controls
  const [showAdvanced, setShowAdvanced] = useState(false);

  // Apply a theme preset by key
  function handleThemeSelect(presetKey: keyof typeof themePresets) {
    const preset = themePresets[presetKey];
    onColorChange(preset.primaryColor);
    onHeadingFontChange(preset.headingFont);
    onBodyFontChange(preset.bodyFont);
    onHeadingSizeChange(preset.headingSize);
    onBodySizeChange(preset.bodySize);
    onHeadingWeightChange(preset.headingWeight);
    onBodyWeightChange(preset.bodyWeight);
  }

  return (
    <aside className="w-[480px] border-r border-neutral-800 bg-neutral-900 px-8 py-6 text-sm text-gray-300 overflow-y-auto scrollbar-thin scrollbar-thumb-neutral-700 scrollbar-track-transparent">
      {/* Sidebar Title */}
      <div className="text-[10px] uppercase font-semibold text-gray-500 tracking-wider mb-4">
        Style Options
      </div>

      {/* Base Inputs */}
      <div className="flex flex-col gap-6">
        <ColorPickerInput value={primaryColor} onChange={onColorChange} />
        <LayoutSelectInput value={layout} onChange={onLayoutChange} />
        <LogoUploadInput onUpload={onLogoUpload} />
        <HeroBannerUploader
          bannerUrls={heroBannerUrls}
          onUpload={onHeroBannerUpload}
        />

        {/* Theme preset buttons */}
        <div className="flex flex-col gap-2">
          <label className="text-xs text-gray-400">Choose a Theme</label>
          <div className="flex gap-2 flex-wrap mb-4">
            {Object.keys(themePresets).map((key) => (
              <button
                key={key}
                onClick={() =>
                  handleThemeSelect(key as keyof typeof themePresets)
                }
                className="text-xs bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 rounded px-3 py-1"
              >
                {key[0].toUpperCase() + key.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Toggle for advanced options */}
      <div className="mt-6 mb-2 flex justify-between items-center">
        <span className="text-xs text-gray-400 uppercase tracking-wide">
          Advanced Styling
        </span>
        <button
          onClick={() => setShowAdvanced((prev) => !prev)}
          className="text-xs text-blue-400 hover:underline"
        >
          {showAdvanced ? "Hide" : "Show"}
        </button>
      </div>

      {/* Advanced styling options */}
      {showAdvanced && (
        <div className="flex flex-col gap-6">
          <FontSelector
            headingFont={headingFont}
            bodyFont={bodyFont}
            onHeadingFontChange={onHeadingFontChange}
            onBodyFontChange={onBodyFontChange}
          />
          <FontSizeSlider
            headingSize={headingSize}
            bodySize={bodySize}
            onHeadingSizeChange={onHeadingSizeChange}
            onBodySizeChange={onBodySizeChange}
          />
          <FontWeightSelector
            headingWeight={headingWeight}
            bodyWeight={bodyWeight}
            onHeadingWeightChange={onHeadingWeightChange}
            onBodyWeightChange={onBodyWeightChange}
          />
        </div>
      )}

      {/* Optional "Next Step" button for navigation */}
      {onNext && (
        <div className="mt-8 flex justify-end">
          <button
            onClick={onNext}
            className="px-4 py-2 rounded bg-neutral-800 hover:bg-neutral-700 text-sm font-semibold text-white border border-neutral-700 transition"
          >
            Next Step →
          </button>
        </div>
      )}
    </aside>
  );
}
