"use client";

import Box from "@mui/material/Box";
import fontClassMap from "../content/styles/fontClassMap";
import PreviewContent from "../content/PreviewContent";
import { useStyling } from "@/context/StylingContext";

export default function DesktopPreview() {
  const { theme } = useStyling();

  const isLight = theme === "light";
  const backgroundColor = isLight ? "white" : "neutral.950";
  const textColor = isLight ? "black" : "white";

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        mt: 2,
        bgcolor: backgroundColor,
        color: textColor,
        display: "flex",
        flexDirection: "column",
        fontFamily: fontClassMap.bodyFont || "inherit",
        overflow: "hidden",
      }}
    >
      {/* Scrollable main area including sticky footer */}
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          overflowY: "auto",
          scrollbarWidth: "none",
          "&::-webkit-scrollbar": { display: "none" },
        }}
      >
        <PreviewContent />
      </Box>
    </Box>
  );
}
