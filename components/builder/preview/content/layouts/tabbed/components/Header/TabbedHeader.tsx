"use client";

import Box from "@mui/material/Box";
import HeroBanner from "../../../../styles/HeroBanner";
import LogoDisplay from "../../../../styles/LogoDisplay";
import Heading from "../../../../styles/Heading";
import { useStyling } from "@/context/StylingContext";

export default function TabbedHeader() {
  const { heroBannerUrls, logoUrl, primaryColor, about } = useStyling();

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
          color={primaryColor}
        />
      </Box>
    </Box>
  );
}
