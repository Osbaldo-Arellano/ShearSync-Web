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
        display: "flex",
        mt: 10,
        justifyContent: "center",
        alignItems: "center",
        bgcolor: backgroundColor,
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "100%",
        }}
      >
        <DeviceFrameset device="MacBook Pro" zoom={1} style={{ width: "100%" }}>
          <Box
            sx={{
              height: "100%",
              maxHeight: "100vh",
              overflowY: "auto", // allow scrolling within the preview
              bgcolor: backgroundColor,
              color: textColor,
              fontFamily: fontClassMap.bodyFont || "inherit",
              scrollbarWidth: "none",
              "&::-webkit-scrollbar": { display: "none" },
            }}
          >
            <PreviewContent />
          </Box>
        </DeviceFrameset>
      </Box>
    </Box>
  );
}
