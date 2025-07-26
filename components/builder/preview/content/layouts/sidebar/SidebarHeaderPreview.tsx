"use client";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

import HeroBanner from "../../styles/HeroBanner";
import LogoDisplay from "../../styles/LogoDisplay";
import Heading from "../../styles/Heading";
import { useStyling } from "@/context/StylingContext";

export default function SidebarHeaderPreview() {
  const {
    logoUrl,
    about,
    primaryColor,
    heroBannerUrls,
  } = useStyling();

  const tags = about
    .split(/[,.•|]+/)
    .map((tag) => tag.trim())
    .filter((tag) => tag.length > 1 && tag.length < 30);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        width: "100%",
        height: "auto",
        borderRadius: 2,
        boxShadow: 3,
        overflow: "hidden",
        border: "1px solid",
        borderColor: "divider",
      }}
    >
      <Box
        sx={{
          flex: 1,
          bgcolor: "background.paper",
          p: 3,
          display: "flex",
          flexDirection: "column",
          gap: 2,
          justifyContent: "center",
          alignItems: { xs: "center", md: "flex-start" },
        }}
      >
        {logoUrl && <LogoDisplay src={logoUrl} />}
        <Heading
          text={about?.trim() || "Proudly serving your area"}
          color={primaryColor}
        />
        <Stack direction="row" spacing={1} flexWrap="wrap">
          {tags.map((tag, i) => (
            <Chip key={i} label={tag} size="small" />
          ))}
        </Stack>
      </Box>

      <Box
        sx={{ flex: 2, height: { xs: 200, md: "100%" }, position: "relative" }}
      >
        {heroBannerUrls?.length > 0 && <HeroBanner images={heroBannerUrls} />}
      </Box>
    </Box>
  );
}
