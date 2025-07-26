"use client";

/**
 * PreviewContent.tsx
 *
 * This is the master preview rendering component for ShearSync.
 *
 * Shared between both MobilePreview and DesktopPreview
 * Accepts all dynamic user styling and content props
 * Centralized point of truth for rendering public-facing booking pages
 * Used during builder preview and as the deployed view content
 * Can be serialized and sent to the server for rendering static/public pages
 *
 * Keep this component flexible, responsive, and keep clean conditional rendering.
 */

import Box from "@mui/material/Box";
import AboutText from "./data/AboutText";
import AvailabilityTable from "./data/AvailabilityTable";
import LayoutInfo from "./styles/LayoutInfo";
import LocationText from "./data/LocationText";
import SocialLinksList from "./data/SocialLinksList";
import DynamicHeaderPreview from "./layouts/DynamicHeaderPreview";

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
  layout: "compact" | "tabbed" | "sidebar";
  availability?: { [day: string]: { open: string; close: string } };
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
      <DynamicHeaderPreview
        layout={layout}
        logoUrl={logoUrl}
        headingFont={headingFont}
        headingSize={headingSize}
        headingWeight={headingWeight}
        primaryColor={primaryColor}
        about={about}
        bodyFont={bodyFont}
        bodySize={bodySize}
        bodyWeight={bodyWeight}
        heroBannerUrls={heroBannerUrls}
      />

      {location && <LocationText location={location} />}
      {showAvailability && availability && (
        <AvailabilityTable availability={availability} />
      )}

      <SocialLinksList links={socialLinks} />
      <LayoutInfo layout={layout} />
    </Box>
  );
}
