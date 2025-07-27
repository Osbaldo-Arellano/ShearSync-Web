"use client";

import CompactHeaderPreview from "./compact/CompactHeaderPreview";
import TabbedPreview from "./tabbed/TabbedPreview";
import SidebarHeaderPreview from "./sidebar/SidebarHeaderPreview";
import { useStyling } from "@/context/StylingContext";

export default function DynamicLayoutPreview() {
  const { layout } = useStyling();

  switch (layout) {
    case "tabbed":
      return <TabbedPreview />;
    case "sidebar":
      return <SidebarHeaderPreview />;
    default:
      return <CompactHeaderPreview />;
  }
}
