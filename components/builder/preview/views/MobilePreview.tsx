"use client";

import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { DeviceFrameset } from "react-device-frameset";
import "react-device-frameset/styles/marvel-devices.min.css";

import PreviewContent from "../content/PreviewContent";
import { useStyling } from "@/context/StylingContext";

export default function MobilePreview() {
  const { theme } = useStyling();
  const backgroundColor = theme === "light" ? "white" : "neutral.950";

  const [windowHeight, setWindowHeight] = useState<number>(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowHeight(window.innerHeight);
    };

    handleResize(); // Set initial height
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxHeight = Math.min(windowHeight - 64, 844); // iPhone height max cap

  return (
    <Box sx={{ mt: 10 }}>
      <DeviceFrameset
        device="iPhone X"
        landscape={false}
        zoom={1}
        style={{
          maxHeight,
          width: "auto",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "100%",
            bgcolor: "white",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <PreviewContent />
        </Box>
      </DeviceFrameset>
    </Box>
  );
}
