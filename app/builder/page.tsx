"use client";

import { useState, useRef, useEffect } from "react";
import Box from "@mui/material/Box";
import Sidebar from "@/components/builder/Sidebar";
import PreviewPanel from "@/components/builder/preview/PreviewPanel";
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
  const [zoomLevel, setZoomLevel] = useState(1);

  // Resizing state
  const [sidebarWidth, setSidebarWidth] = useState(320);
  const isResizing = useRef(false);

  const handleMouseDown = () => {
    isResizing.current = true;
    document.body.style.cursor = "col-resize";
  };

  const handleMouseUp = () => {
    isResizing.current = false;
    document.body.style.cursor = "default";
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (isResizing.current) {
      const newWidth = Math.min(Math.max(e.clientX, 200), 600); // clamp
      setSidebarWidth(newWidth);
    }
  };

  useEffect(() => {
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        bgcolor: "neutral.900",
        color: "white",
        fontFamily: "sans-serif",
      }}
    >
      <BuilderHeader
        viewport={viewport}
        onViewportChange={setViewport}
        zoomLevel={zoomLevel}
        setZoomLevel={setZoomLevel}
      />

      <Box sx={{ display: "flex", flex: 1, overflow: "hidden" }}>
        {/* Sidebar */}
        <Box sx={{ width: sidebarWidth, height: "100%", overflowY: "auto" }}>
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
        </Box>

        {/* Resizer */}
        <Box
          onMouseDown={handleMouseDown}
          sx={{
            width: 8,
            cursor: "col-resize",
            bgcolor: "neutral.800",
            "&:hover": {
              bgcolor: "neutral.700",
            },
            transition: "background-color 0.2s",
          }}
        />

        {/* Preview Panel */}
        <Box sx={{ flex: 1, overflow: "auto", height: "100%" }}>
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
        </Box>
      </Box>
    </Box>
  );
}
