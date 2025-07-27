"use client";

import Box from "@mui/material/Box";
import MobilePreview from "./views/MobilePreview";
import DesktopPreview from "./views/DesktopPreview";

interface PreviewPanelProps {
  viewport: "desktop" | "mobile";
  zoomLevel?: number;
}

export default function PreviewPanel({
  viewport,
  zoomLevel = 1,
}: PreviewPanelProps) {
  return (
    <Box
      component="main"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {viewport === "mobile" ? (
        <Box
          sx={{
            transform: `scale(${zoomLevel})`,
            transformOrigin: "top center",
          }}
        >
          <MobilePreview />
        </Box>
      ) : (
        <Box
          sx={{
            transform: `scale(${zoomLevel})`,
            transformOrigin: "top center",
          }}
        >
          <DesktopPreview />
        </Box>
      )}
    </Box>
  );
}
