"use client";

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

  heroBannerUrl: string | null;
  onHeroBannerUpload: (banner: string | null) => void;

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
}

export default function Sidebar({
  primaryColor,
  layout,
  onColorChange,
  onLayoutChange,
  logoUrl,
  onLogoUpload,
  heroBannerUrl,
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
}: SidebarProps) {
  return (
    <aside className="w-[280px] border-r border-neutral-800 bg-neutral-900 p-4 flex flex-col gap-6 text-sm text-gray-300 overflow-y-auto">
      <div className="text-xs uppercase font-semibold text-gray-500 tracking-wide">
        Style Options
      </div>

      <ColorPickerInput value={primaryColor} onChange={onColorChange} />
      <LayoutSelectInput value={layout} onChange={onLayoutChange} />
      <LogoUploadInput onUpload={onLogoUpload} />
      <HeroBannerUploader
        bannerUrl={heroBannerUrl}
        onUpload={onHeroBannerUpload}
      />
      <AboutTextarea value={about} onChange={onAboutChange} />
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
      <HoursAndAvailabilityEditor
        value={availability}
        onChange={onAvailabilityChange}
      />
      <LocationInput value={location} onChange={onLocationChange} />
      <SocialLinksInput value={socialLinks} onChange={onSocialLinksChange} />
      <ThemeSelector value={theme} onChange={onThemeChange} />
    </aside>
  );
}
