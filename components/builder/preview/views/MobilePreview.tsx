"use client";

import Box from "@mui/material/Box";
import AboutText from "../content/data/AboutText";
import AvailabilityTable from "../content/data/AvailabilityTable";
import Heading from "../content/styles/Heading";
import HeroBanner from "../content/styles/HeroBanner";
import LayoutInfo from "../content/styles/LayoutInfo";
import LocationText from "../content/data/LocationText";
import LogoDisplay from "../content/styles/LogoDisplay";
import SocialLinksList from "../content/data/SocialLinksList";
import fontClassMap from "../content/styles/fontClassMap";
import PreviewContent from "../content/PreviewContent";

interface Props {
  primaryColor: string;
  layout: "compact" | "tabbed" | "sidebar";
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

export default function MobilePreview(props: Props) {
  const {
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
  } = props;

  const headingFontSize = headingSize * 0.7;
  const bodyFontSize = bodySize * 0.7;
  const backgroundColor = theme === "light" ? "white" : "neutral.950";
  const textColor = theme === "light" ? "black" : "white";

  return (
    <Box
      sx={{
        height: "100vh",
      }}
    >
      <Box
        sx={{
          width: 375,
          height: 667,
          borderRadius: "40px",
          border: "10px solid",
          borderColor: "neutral.700",
          boxShadow: 6,
          bgcolor: "black",
          overflow: "hidden",
          position: "relative",
        }}
      >
        {/* Status bar bump */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: "50%",
            transform: "translateX(-50%)",
            width: 96,
            height: 16,
            borderRadius: "0 0 12px 12px",
            bgcolor: "neutral.800",
            zIndex: 10,
          }}
        />
        {/* Preview Content */}
        <PreviewContent
          logoUrl={logoUrl}
          headingFont={headingFont}
          headingSize={headingSize * 0.7}
          headingWeight={headingWeight}
          primaryColor={primaryColor}
          about={about}
          bodyFont={bodyFont}
          bodySize={bodySize * 0.7}
          bodyWeight={bodyWeight}
          location={location}
          socialLinks={socialLinks}
          layout={layout}
          showAvailability={false}
          padding={3}
          gap={3}
          heroBannerUrls={heroBannerUrls}
        />{" "}
      </Box>
    </Box>
  );
}
