// components/builder/preview/layouts/tabbed/TabbedHeader.tsx
"use client";

import Box from "@mui/material/Box";
import HeroBanner from "../../../styles/HeroBanner";
import LogoDisplay from "../../../styles/LogoDisplay";
import Heading from "../../../styles/Heading";

interface TabbedHeaderProps {
  heroBannerUrls: string[];
  logoUrl: string | null;
  headingFont: string;
  headingSize: number;
  headingWeight: number;
  primaryColor: string;
  about: string;
}

export default function TabbedHeader({
  heroBannerUrls,
  logoUrl,
  headingFont,
  headingSize,
  headingWeight,
  primaryColor,
  about,
}: TabbedHeaderProps) {
  return (
    <Box>
      {heroBannerUrls?.length > 0 && (
        <Box
          sx={{
            width: "100%",
            height: { xs: 180, sm: 250 },
            position: "relative",
          }}
        >
          <HeroBanner images={heroBannerUrls} />
        </Box>
      )}
      <Box sx={{ px: 3, py: 2 }}>
        {logoUrl && <LogoDisplay src={logoUrl} />}
        <Heading
          text={about?.trim() || "Proudly serving your area"}
          font={headingFont}
          size={headingSize * 0.6}
          weight={headingWeight}
          color={primaryColor}
        />
      </Box>
    </Box>
  );
}
