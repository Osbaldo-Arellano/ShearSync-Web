"use client";

import CompactHeaderPreview from "./compact/CompactHeaderPreview";
import TabbedHeaderPreview from "./tabbed/TabbedPreview";
import SidebarHeaderPreview from "./sidebar/SidebarHeaderPreview";
import { useStyling } from "@/context/StylingContext";

export default function DynamicHeaderPreview() {
  const { layout } = useStyling();

  switch (layout) {
    case "tabbed":
      return <TabbedHeaderPreview />;
    case "sidebar":
      return <SidebarHeaderPreview />;
    default:
      return <CompactHeaderPreview />;
  }
}
