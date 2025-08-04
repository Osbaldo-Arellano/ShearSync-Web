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
        width: "100%",
        minHeight: "100vh", // key for sticky footer behavior
        display: "flex",
        ...(viewport === "mobile"
          ? {
              alignItems: "center",
              justifyContent: "center",
            }
          : {
              flexDirection: "column",
            }),
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
