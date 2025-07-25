"use client";

import AboutText from "./AboutText";
import AvailabilityTable from "./AvailabilityTable";
import fontClassMap from "./fontClassMap";
import Heading from "./Heading";
import HeroBanner from "./HeroBanner";
import LayoutInfo from "./LayoutInfo";
import LocationText from "./LocationText";
import LogoDisplay from "./LogoDisplay";
import SocialLinksList from "./SocialLinksList";

interface Availability {
  [day: string]: { open: string; close: string };
}

interface PreviewPanelProps {
  primaryColor: string;
  layout: string;
  logoUrl: string | null;
  heroBannerUrl: string | null;
  about: string;
  headingFont: string;
  bodyFont: string;
  headingSize: number;
  bodySize: number;
  headingWeight: number;
  bodyWeight: number;
  location: string;
  socialLinks: string[];
  availability: Availability;
  theme: string;
  viewport: "desktop" | "mobile";
}

export default function PreviewPanel({
  primaryColor,
  layout,
  logoUrl,
  heroBannerUrl,
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
  viewport,
}: PreviewPanelProps) {
  const bg =
    theme === "light" ? "bg-white text-black" : "bg-neutral-950 text-white";

  const content = (
    <div
      className={`flex flex-col w-full h-full ${bg}`}
      style={{ fontFamily: fontClassMap.bodyFont || "inherit" }}
    >
      {heroBannerUrl && <HeroBanner src={heroBannerUrl} />}

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
  );

  return (
    <main className="flex-1 overflow-auto flex items-center justify-center p-6">
      {viewport === "mobile" ? (
        <div className="w-[375px] h-[667px] bg-black rounded-[40px] border-[10px] border-neutral-700 shadow-lg relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-4 bg-neutral-800 rounded-b-lg z-10" />
          {content}
        </div>
      ) : (
        <div className="w-full h-full border border-dashed border-neutral-700 rounded-lg overflow-y-auto">
          {content}
        </div>
      )}
    </main>
  );
}
