"use client";

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
  const bg =
    theme === "light" ? "bg-white text-black" : "bg-neutral-950 text-white";

  return (
    <div className="w-[375px] h-[667px] bg-black rounded-[40px] border-[10px] border-neutral-700 shadow-lg relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-4 bg-neutral-800 rounded-b-lg z-10" />
      <div
        className={`flex flex-col w-full h-full ${bg}`}
        style={{ fontFamily: fontClassMap.bodyFont || "inherit" }}
      >
        {heroBannerUrls.length > 0 && <HeroBanner images={heroBannerUrls} />}

        <div className="flex flex-col items-center justify-center p-6 text-center gap-4">
          {logoUrl && <LogoDisplay src={logoUrl} />}
          <Heading
            text="Booking Page Preview"
            font={headingFont}
            size={headingFontSize}
            weight={headingWeight}
            color={primaryColor}
          />
          <AboutText
            text={about}
            font={bodyFont}
            size={bodyFontSize}
            weight={bodyWeight}
          />
          {location && <LocationText location={location} />}
          <AvailabilityTable availability={availability} />
          <SocialLinksList links={socialLinks} />
          <LayoutInfo layout={layout} />
        </div>
      </div>
    </div>
  );
}
