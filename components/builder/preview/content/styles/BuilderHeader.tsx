"use client";

import SetScreenSize from "../../../sidebar/inputs/SetScreenSize";
import ZoomControls from "../../../sidebar/inputs/ZoomControls";

interface BuilderHeaderProps {
  viewport: "desktop" | "mobile";
  onViewportChange: (val: "desktop" | "mobile") => void;
  zoomLevel: number;
  setZoomLevel: (level: number) => void;
}

export default function BuilderHeader({
  viewport,
  onViewportChange,
  zoomLevel,
  setZoomLevel,
}: BuilderHeaderProps) {
  return (
    <header className="h-12 px-4 flex items-center justify-between border-b border-neutral-800 bg-neutral-900">
      <div className="flex items-center gap-2 text-sm font-medium tracking-wide text-gray-300">
        🎨 ShearSync Style Builder
      </div>
      <div className="flex items-center gap-4 text-xs text-gray-500">
        <span>Logged in as: Chato Blendz</span>
        <SetScreenSize value={viewport} onChange={onViewportChange} />
        <ZoomControls zoomLevel={zoomLevel} setZoomLevel={setZoomLevel} />
      </div>
    </header>
  );
}
