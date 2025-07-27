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
        height: "90vh",
        overflowY: "auto", // Hide scrollbar
        scrollbarWidth: "none", // Firefox
        "&::-webkit-scrollbar": {
          display: "none", // Chrome, Safari, Edge
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "100%",
          bgcolor: backgroundColor,
          color: textColor,
          fontFamily: fontClassMap.bodyFont || "inherit",
          // Hide scrollbar
          scrollbarWidth: "none", // Firefox
          "&::-webkit-scrollbar": {
            display: "none", // Chrome, Safari, Edge
          },
        }}
      >
        <PreviewContent />
      </Box>
    </Box>
  );
}
