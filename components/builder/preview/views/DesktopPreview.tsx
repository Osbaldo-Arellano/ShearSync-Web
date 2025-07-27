"use client";

import Box from "@mui/material/Box";
import fontClassMap from "../content/styles/fontClassMap";
import PreviewContent from "../content/PreviewContent";
import { useStyling } from "@/context/StylingContext";
import { DeviceFrameset } from "react-device-frameset";
import "react-device-frameset/styles/marvel-devices.min.css";

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
        overflow: "auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        bgcolor: backgroundColor,
      }}
    >
      <DeviceFrameset device="MacBook Pro" zoom={0.8}>
        <Box
          sx={{
            width: "100%",
            height: "100%",
            bgcolor: backgroundColor,
            color: textColor,
            fontFamily: fontClassMap.bodyFont || "inherit",
            overflowY: "auto",
            scrollbarWidth: "none",
            "&::-webkit-scrollbar": {
              display: "none",
            },
          }}
        >
          <PreviewContent />
        </Box>
      </DeviceFrameset>
    </Box>
  );
}
