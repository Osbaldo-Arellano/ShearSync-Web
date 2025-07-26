"use client";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

import HeroBanner from "../../styles/HeroBanner";
import LogoDisplay from "../../styles/LogoDisplay";
import Heading from "../../styles/Heading";
import { useStyling } from "@/context/StylingContext";

export default function CompactHeaderPreview() {
  const {
    heroBannerUrls,
    logoUrl,
    primaryColor,
    about,
    bodyFont,
    bodySize,
    bodyWeight,
  } = useStyling();

  const tags = about
    .split(/[,.•|]+/)
    .map((tag) => tag.trim())
    .filter((tag) => tag.length > 1 && tag.length < 30);

  return (
    <Box
      sx={{
        width: "100%",
        borderRadius: 2,
        overflow: "hidden",
        border: "1px solid",
        borderColor: "divider",
        bgcolor: "background.paper",
        boxShadow: 3,
      }}
    >
      {heroBannerUrls?.length > 0 && (
        <Box
          sx={{
            position: "relative",
            width: "100%",
            height: { xs: 180, sm: 250 },
          }}
        >
          <HeroBanner images={heroBannerUrls} />
        </Box>
      )}

      <Box
        sx={{
          px: { xs: 2, sm: 4 },
          py: { xs: 3, sm: 4 },
          display: "flex",
          flexDirection: "column",
          alignItems: { xs: "center", sm: "flex-start" },
          gap: 2,
        }}
      >
        {tags.length > 0 && (
          <Stack direction="row" flexWrap="wrap" spacing={1}>
            {tags.map((tag, index) => (
              <Chip key={index} label={tag} color="default" size="small" />
            ))}
          </Stack>
        )}

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            mt: 1,
            flexWrap: "wrap",
          }}
        >
          {logoUrl && <LogoDisplay src={logoUrl} />}
          <Box>
            <Heading
              text={
                about?.trim() ||
                "Proudly serving the Salem, Woodburn, and Portland areas."
              }
              color={primaryColor}
            />
            <Typography
              sx={{
                fontFamily: bodyFont,
                fontSize: bodySize * 0.9,
                fontWeight: bodyWeight,
                mt: 0.5,
              }}
              color="text.secondary"
            >
              Booking Page Preview
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
