"use client";

import Box from "@mui/material/Box";
import MobilePreview from "./views/MobilePreview";
import DesktopPreview from "./views/DesktopPreview";

interface Availability {
  [day: string]: { open: string; close: string };
}

interface PreviewPanelProps {
  primaryColor: string;
  layout: string;
  logoUrl: string | null;
  heroBannerUrls: string[];
  about: string;
  headingFont: string;
  bodyFont: string;
  headingSize: number;
  bodySize: number;
  headingWeight: number;
  bodyWeight: number;
  location: string;
  socialLinks: string[];
  availability: Availability;
  theme: string;
  viewport: "desktop" | "mobile";
  zoomLevel?: number; // only applies to mobile
}

export default function PreviewPanel({
  zoomLevel = 1,
  ...props
}: PreviewPanelProps) {
  return (
    <Box
      component="main"
      sx={{
        flex: 1,
        overflow: "auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {props.viewport === "mobile" ? (
        <Box
          sx={{
            transform: `scale(${zoomLevel})`,
            transformOrigin: "top center",
          }}
        >
          <MobilePreview {...props} />
        </Box>
      ) : (
        <DesktopPreview {...props} />
      )}
    </Box>
  );
}
