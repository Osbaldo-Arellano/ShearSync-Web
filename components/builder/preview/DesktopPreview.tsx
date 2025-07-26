"use client";

import Box from "@mui/material/Box";
import AboutText from "./AboutText";
import AvailabilityTable from "./AvailabilityTable";
import Heading from "./Heading";
import HeroBanner from "./HeroBanner";
import LayoutInfo from "./LayoutInfo";
import LocationText from "./LocationText";
import LogoDisplay from "./LogoDisplay";
import SocialLinksList from "./SocialLinksList";
import fontClassMap from "./fontClassMap";

interface Props {
  primaryColor: string;
  layout: string;
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

export default function DesktopPreview({
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
}: Props) {
  const isLight = theme === "light";
  const backgroundColor = isLight ? "white" : "neutral.950";
  const textColor = isLight ? "black" : "white";

  return (
    <Box
      sx={{
        width: "100%",
        height: "90vh",
        border: "1px dashed",
        borderColor: "neutral.700",
        borderRadius: 2,
        overflowY: "auto",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "100%",
          bgcolor: backgroundColor,
          color: textColor,
          fontFamily: fontClassMap.bodyFont || "inherit",
        }}
      >
        {heroBannerUrls.length > 0 && <HeroBanner images={heroBannerUrls} />}

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            gap: 3,
            p: 4,
          }}
        >
          {logoUrl && <LogoDisplay src={logoUrl} />}
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
          {location && <LocationText location={location} />}
          <AvailabilityTable availability={availability} />
          <SocialLinksList links={socialLinks} />
          <LayoutInfo layout={layout} />
        </Box>
      </Box>
    </Box>
  );
}
