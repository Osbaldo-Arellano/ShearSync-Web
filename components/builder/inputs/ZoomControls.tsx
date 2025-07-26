"use client";

interface ZoomControlsProps {
  zoomLevel: number;
  setZoomLevel: (level: number) => void;
}

export default function ZoomControls({
  zoomLevel,
  setZoomLevel,
}: ZoomControlsProps) {
  const clamp = (val: number) => Math.max(0.5, Math.min(2, val));

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => setZoomLevel(clamp(zoomLevel - 0.1))}
        className="px-2 py-1 bg-neutral-800 rounded text-xs"
      >
        −
      </button>
      <span className="text-xs w-20 text-center">
        Mobile View Zoom {Math.round(zoomLevel * 100)}%
      </span>
      <button
        onClick={() => setZoomLevel(clamp(zoomLevel + 0.1))}
        className="px-2 py-1 bg-neutral-800 rounded text-xs"
      >
        +
      </button>
    </div>
  );
}
