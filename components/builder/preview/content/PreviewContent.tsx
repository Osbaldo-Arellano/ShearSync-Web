"use client";

import Box from "@mui/material/Box";
import AboutText from "./data/AboutText";
import AvailabilityTable from "./data/AvailabilityTable";
import LayoutInfo from "./styles/LayoutInfo";
import LocationText from "./data/LocationText";
import SocialLinksList from "./data/SocialLinksList";
import DynamicHeaderPreview from "./layouts/DynamicHeaderPreview";
import { useStyling } from "@/context/StylingContext";

/**
 * PreviewContent.tsx
 *
 * Centralized rendering of the site preview.
 * Consumed by both Desktop and Mobile views.
 */

export default function PreviewContent({
  showAvailability = false,
  padding = 0,
  gap = 0,
}: {
  showAvailability?: boolean;
  padding?: number;
  gap?: number;
}) {
  const { location, socialLinks, layout, availability } = useStyling();

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
      <DynamicHeaderPreview />

      {location && <LocationText location={location} />}
      {showAvailability && availability && (
        <AvailabilityTable availability={availability} />
      )}

      <SocialLinksList links={socialLinks} />
      <LayoutInfo layout={layout} />
    </Box>
  );
}
