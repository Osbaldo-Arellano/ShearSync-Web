"use client";

import { useState } from "react";
import Sidebar from "@/components/builder/Sidebar";
import PreviewPanel from "@/components/builder/preview/PreviewPanel";
import SetScreenSize from "@/components/builder/inputs/SetScreenSize";
import ZoomControls from "@/components/builder/inputs/ZoomControls";
import BuilderHeader from "@/components/builder/preview/BuilderHeader";

interface Availability {
  [day: string]: { open: string; close: string };
}

export default function StylingIDE() {
  const [primaryColor, setPrimaryColor] = useState("#FF5733");
  const [layout, setLayout] = useState("compact");
  const [logoUrl, setLogoUrl] = useState<string | null>(null);
  const [heroBannerUrls, setHeroBannerUrls] = useState<string[]>([]);

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
  const [zoomLevel, setZoomLevel] = useState(1); // 1 = 100%

  return (
    <div className="h-screen w-screen flex flex-col bg-neutral-950 text-white font-sans">
      {/* Top Bar */}
      <BuilderHeader
        viewport={viewport}
        onViewportChange={setViewport}
        zoomLevel={zoomLevel}
        setZoomLevel={setZoomLevel}
      />

      {/* Main Body */}
      <div className="flex flex-1 overflow-hidden">
        <Sidebar
          primaryColor={primaryColor}
          layout={layout}
          onColorChange={setPrimaryColor}
          onLayoutChange={setLayout}
          logoUrl={logoUrl}
          onLogoUpload={setLogoUrl}
          heroBannerUrls={heroBannerUrls}
          onHeroBannerUpload={setHeroBannerUrls}
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
          onNext={() => null}
        />

        <PreviewPanel
          primaryColor={primaryColor}
          layout={layout}
          logoUrl={logoUrl}
          heroBannerUrls={heroBannerUrls}
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
          zoomLevel={zoomLevel}
        />
      </div>
    </div>
  );
}
