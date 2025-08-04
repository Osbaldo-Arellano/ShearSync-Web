"use client";

import Box from "@mui/material/Box";
import HeroBanner from "../../../../styles/HeroBanner";
import LogoDisplay from "../../../../styles/LogoDisplay";
import Heading from "../../../../styles/Heading";
import { useStyling } from "@/context/StylingContext";

export default function TabbedHeader() {
  const { heroBannerUrls, logoUrl, primaryColor, about } = useStyling();

  return (
    <Box sx={{ width: "100%", maxWidth: "1200px", mx: "auto" }}>
      {/* Hero Banner */}
      {heroBannerUrls?.length > 0 && (
        <Box
          sx={{
            width: "100%",
            height: { xs: 180, sm: 250, md: 300, lg: 350 },
            position: "relative",
            overflow: "hidden",
            borderRadius: { xs: 0, sm: 2 },
            mb: { xs: 2, sm: 3 },
          }}
        >
          <HeroBanner images={heroBannerUrls} />
        </Box>
      )}

      {/* Logo and Heading Section */}
      <Box
        sx={{
          px: { xs: 2, sm: 3 },
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: { md: "center" },
          justifyContent: "space-between",
          gap: { xs: 1.5, md: 4 },
        }}
      >
        {/* Logo */}
        {logoUrl && (
          <Box
            sx={{
              display: "flex",
              justifyContent: { xs: "center", md: "flex-start" },
              alignItems: "center",
              flexShrink: 0,
              maxWidth: { xs: "100%", md: 200 },
            }}
          >
            <LogoDisplay src={logoUrl} />
          </Box>
        )}

        {/* Heading */}
        <Box
          sx={{
            textAlign: { xs: "center", md: "left" },
            flexGrow: 1,
          }}
        >
          <Heading
            text={about?.trim() || "Proudly serving your area"}
            color={primaryColor}
          />
        </Box>
      </Box>
    </Box>
  );
}
