"use client";

import { useState } from "react";
import Sidebar from "@/components/builder/Sidebar";
import PreviewPanel from "@/components/builder/preview/PreviewPanel";
import SetScreenSize from "@/components/builder/inputs/SetScreenSize";

interface Availability {
  [day: string]: { open: string; close: string };
}

export default function StylingIDE() {
  const [primaryColor, setPrimaryColor] = useState("#FF5733");
  const [layout, setLayout] = useState("compact");
  const [logoUrl, setLogoUrl] = useState<string | null>(null);
  const [heroBannerUrl, setHeroBannerUrl] = useState<string | null>(null);

  const [about, setAbout] = useState("");
  const [headingFont, setHeadingFont] = useState("Inter");
  const [bodyFont, setBodyFont] = useState("Inter");
  const [headingSize, setHeadingSize] = useState(24);
  const [bodySize, setBodySize] = useState(16);
  const [headingWeight, setHeadingWeight] = useState(700);
  const [bodyWeight, setBodyWeight] = useState(400);

  const [availability, setAvailability] = useState<Availability>({
    Mon: { open: "", close: "" },
    Tue: { open: "", close: "" },
    Wed: { open: "", close: "" },
    Thu: { open: "", close: "" },
    Fri: { open: "", close: "" },
    Sat: { open: "", close: "" },
    Sun: { open: "", close: "" },
  });

  const [location, setLocation] = useState("");
  const [socialLinks, setSocialLinks] = useState<string[]>([]);
  const [theme, setTheme] = useState("dark");
  const [viewport, setViewport] = useState<"desktop" | "mobile">("desktop");

  return (
    <div className="h-screen w-screen flex flex-col bg-neutral-950 text-white font-sans">
      {/* Top Bar */}
      <header className="h-12 px-4 flex items-center justify-between border-b border-neutral-800 bg-neutral-900">
        <div className="flex items-center gap-2 text-sm font-medium tracking-wide text-gray-300">
          🎨 ShearSync Style Builder
        </div>
        <div className="flex items-center gap-4 text-xs text-gray-500">
          <span>Logged in as: Chato Blendz</span>
        </div>
        <SetScreenSize value={viewport} onChange={setViewport} />
      </header>

      {/* Main Body */}
      <div className="flex flex-1 overflow-hidden">
        <Sidebar
          primaryColor={primaryColor}
          layout={layout}
          onColorChange={setPrimaryColor}
          onLayoutChange={setLayout}
          logoUrl={logoUrl}
          onLogoUpload={setLogoUrl}
          heroBannerUrl={heroBannerUrl}
          onHeroBannerUpload={setHeroBannerUrl}
          about={about}
          onAboutChange={setAbout}
          headingFont={headingFont}
          bodyFont={bodyFont}
          onHeadingFontChange={setHeadingFont}
          onBodyFontChange={setBodyFont}
          headingSize={headingSize}
          bodySize={bodySize}
          onHeadingSizeChange={setHeadingSize}
          onBodySizeChange={setBodySize}
          headingWeight={headingWeight}
          bodyWeight={bodyWeight}
          onHeadingWeightChange={setHeadingWeight}
          onBodyWeightChange={setBodyWeight}
          availability={availability}
          onAvailabilityChange={setAvailability}
          location={location}
          onLocationChange={setLocation}
          socialLinks={socialLinks}
          onSocialLinksChange={setSocialLinks}
          theme={theme}
          onThemeChange={setTheme}
        />

        <PreviewPanel
          primaryColor={primaryColor}
          layout={layout}
          logoUrl={logoUrl}
          heroBannerUrl={heroBannerUrl}
          about={about}
          headingFont={headingFont}
          bodyFont={bodyFont}
          headingSize={headingSize}
          bodySize={bodySize}
          headingWeight={headingWeight}
          bodyWeight={bodyWeight}
          location={location}
          socialLinks={socialLinks}
          availability={availability}
          theme={theme}
          viewport={viewport}
        />
      </div>
    </div>
  );
}
