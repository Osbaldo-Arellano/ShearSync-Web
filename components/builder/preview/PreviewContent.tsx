"use client";

import Box from "@mui/material/Box";
import AboutText from "./AboutText";
import AvailabilityTable from "./AvailabilityTable";
import Heading from "./Heading";
import LayoutInfo from "./LayoutInfo";
import LocationText from "./LocationText";
import LogoDisplay from "./LogoDisplay";
import SocialLinksList from "./SocialLinksList";
import HeroBanner from "./HeroBanner";

interface SharedContentProps {
  logoUrl: string | null;
  headingFont: string;
  headingSize: number;
  headingWeight: number;
  primaryColor: string;
  about: string;
  bodyFont: string;
  bodySize: number;
  bodyWeight: number;
  location: string;
  socialLinks: string[];
  layout: string;
  availability?: { [day: string]: { open: string; close: string } }; // Optional (desktop only)
  showAvailability?: boolean;
  padding?: number;
  gap?: number;
  heroBannerUrls: string[];
}

export default function PreviewContent({
  logoUrl,
  headingFont,
  headingSize,
  headingWeight,
  primaryColor,
  about,
  bodyFont,
  bodySize,
  bodyWeight,
  location,
  socialLinks,
  layout,
  availability,
  showAvailability = false,
  padding = 4,
  gap = 3,
  heroBannerUrls,
}: SharedContentProps) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        gap,
        p: padding,
      }}
    >
      {/* Don't render if empty */}
      {heroBannerUrls?.length > 0 && <HeroBanner images={heroBannerUrls} />}
      {logoUrl && logoUrl !== "" && <LogoDisplay src={logoUrl} />}

      <Heading
        text="Booking Page Preview"
        font={headingFont}
        size={headingSize}
        weight={headingWeight}
        color={primaryColor}
      />

      <AboutText
        text={about}
        font={bodyFont}
        size={bodySize}
        weight={bodyWeight}
      />

      {/* Don't render if empty */}
      {location && <LocationText location={location} />}
      {showAvailability && availability && (
        <AvailabilityTable availability={availability} />
      )}

      <SocialLinksList links={socialLinks} />

      <LayoutInfo layout={layout} />
    </Box>
  );
}
