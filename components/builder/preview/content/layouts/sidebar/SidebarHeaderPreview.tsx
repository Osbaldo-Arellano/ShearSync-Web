"use client";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import HeroBanner from "../../styles/HeroBanner";
import LogoDisplay from "../../styles/LogoDisplay";
import Heading from "../../styles/Heading";

interface Props {
  heroBannerUrls: string[];
  logoUrl: string | null;
  headingFont: string;
  headingSize: number;
  headingWeight: number;
  primaryColor: string;
  about: string;
  bodyFont: string;
  bodySize: number;
  bodyWeight: number;
}

export default function SidebarHeaderPreview(props: Props) {
  const tags = props.about
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
        {props.logoUrl && <LogoDisplay src={props.logoUrl} />}
        <Heading
          text={props.about?.trim() || "Proudly serving your area"}
          font={props.headingFont}
          size={props.headingSize * 0.6}
          weight={props.headingWeight}
          color={props.primaryColor}
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
        {props.heroBannerUrls?.length > 0 && (
          <HeroBanner images={props.heroBannerUrls} />
        )}
      </Box>
    </Box>
  );
}
