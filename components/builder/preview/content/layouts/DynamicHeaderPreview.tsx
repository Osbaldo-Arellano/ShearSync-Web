"use client";

import CompactHeaderPreview from "./compact/CompactHeaderPreview";
import TabbedHeaderPreview from "./tabbed/TabbedPreview";
import SidebarHeaderPreview from "./sidebar/SidebarHeaderPreview";

interface Props {
  layout: "compact" | "tabbed" | "sidebar";
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

export default function DynamicHeaderPreview(props: Props) {
  switch (props.layout) {
    case "tabbed":
      return <TabbedHeaderPreview {...props} />;
    case "sidebar":
      return <SidebarHeaderPreview {...props} />;
    default:
      return <CompactHeaderPreview {...props} />;
  }
}
