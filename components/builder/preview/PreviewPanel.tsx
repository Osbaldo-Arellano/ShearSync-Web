"use client";

import MobilePreview from "./MobilePreview";
import DesktopPreview from "./DesktopPreview";

interface Availability {
  [day: string]: { open: string; close: string };
}

interface PreviewPanelProps {
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
  availability: Availability;
  theme: string;
  viewport: "desktop" | "mobile";
  zoomLevel?: number; // only applies to mobile
}

export default function PreviewPanel({
  zoomLevel = 1,
  ...props
}: PreviewPanelProps) {
  return (
    <main className="flex-1 overflow-auto flex items-center justify-center p-6">
      {props.viewport === "mobile" ? (
        <div
          style={{
            transform: `scale(${zoomLevel})`,
            transformOrigin: "top center",
          }}
        >
          <MobilePreview {...props} />
        </div>
      ) : (
        <DesktopPreview {...props} />
      )}
    </main>
  );
}
