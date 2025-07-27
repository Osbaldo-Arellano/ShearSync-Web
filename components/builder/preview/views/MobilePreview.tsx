"use client";

import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { useStyling } from "@/context/StylingContext";
import PreviewContent from "../content/PreviewContent";

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

  // Calculate max preview height
  const maxPhoneHeight = Math.min(windowHeight - 64, 844); // 64px breathing room

  return (
    <Box
      sx={{
        height: "100vh",
        overflow: "auto",
        display: "flex",
        justifyContent: "center",
        bgcolor: backgroundColor,
        py: 4,
      }}
    >
      {/* Phone container */}
      <Box
        sx={{
          width: 500,
          height: maxPhoneHeight,
          borderRadius: "40px",
          borderColor: "neutral.700",
          boxShadow: 6,
          bgcolor: "white",
          overflow: "hidden",
          position: "relative",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Status bar bump */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: "50%",
            transform: "translateX(-50%)",
            width: 96,
            height: 16,
            bgcolor: "neutral.800",
            zIndex: 10,
          }}
        />

        {/* Scrollable content */}
        <Box
          sx={{
            flex: 1,
            overflowY: "auto",
            WebkitOverflowScrolling: "touch",
            display: "flex",
            flexDirection: "column",
            scrollbarWidth: "none",
            "&::-webkit-scrollbar": { display: "none" },
          }}
        >
          <Box
            sx={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              height: "100%",
              width: "100%",
              padding: 0,
              margin: 0,
            }}
          >
            <PreviewContent />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
