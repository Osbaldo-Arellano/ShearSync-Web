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

export default function DesktopPreview(props: Props) {
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

  const bg =
    theme === "light" ? "bg-white text-black" : "bg-neutral-950 text-white";

  return (
    <div className="w-full h-full border border-dashed border-neutral-700 rounded-lg overflow-y-auto">
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
        </div>
      </div>
    </div>
  );
}
