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
        flex: 1,
        overflow: "auto",
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
        <DesktopPreview />
      )}
    </Box>
  );
}
