"use client";

import Box from "@mui/material/Box";
import HeroBanner from "../content/styles/HeroBanner";
import fontClassMap from "../content/styles/fontClassMap";
import PreviewContent from "../PreviewContent";

interface Props {
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
  availability: { [day: string]: { open: string; close: string } };
  theme: string;
}

export default function DesktopPreview({
  primaryColor,
  layout,
  logoUrl,
  heroBannerUrls,
  about,
  headingFont,
  bodyFont,
  headingSize,
  bodySize,
  headingWeight,
  bodyWeight,
  location,
  socialLinks,
  availability,
  theme,
}: Props) {
  const isLight = theme === "light";
  const backgroundColor = isLight ? "white" : "neutral.950";
  const textColor = isLight ? "black" : "white";

  return (
    <Box
      sx={{
        width: "100%",
        height: "90vh",
        overflowY: "auto",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "100%",
          bgcolor: backgroundColor,
          color: textColor,
          fontFamily: fontClassMap.bodyFont || "inherit",
        }}
      >
        <PreviewContent
          logoUrl={logoUrl}
          headingFont={headingFont}
          headingSize={headingSize}
          headingWeight={headingWeight}
          primaryColor={primaryColor}
          about={about}
          bodyFont={bodyFont}
          bodySize={bodySize}
          bodyWeight={bodyWeight}
          location={location}
          socialLinks={socialLinks}
          layout={layout}
          showAvailability={true}
          padding={4}
          gap={3}
          heroBannerUrls={heroBannerUrls}
        />
      </Box>
    </Box>
  );
}
