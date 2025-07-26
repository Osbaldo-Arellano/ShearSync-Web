"use client";

import { useState, useRef, useEffect } from "react";
import Box from "@mui/material/Box";
import Sidebar from "@/components/builder/sidebar/Sidebar";
import PreviewPanel from "@/components/builder/preview/PreviewPanel";
import BuilderHeader from "@/components/builder/preview/content/styles/BuilderHeader";
import { StylingProvider } from "@/context/StylingContext";

export default function StylingIDE() {
  const [viewport, setViewport] = useState<"desktop" | "mobile">("desktop");
  const [zoomLevel, setZoomLevel] = useState(1);
  const [sidebarWidth, setSidebarWidth] = useState(320);
  const isResizing = useRef(false);

  const handleMouseDown = () => {
    isResizing.current = true;
    document.body.style.cursor = "col-resize";
  };

  const handleMouseUp = () => {
    isResizing.current = false;
    document.body.style.cursor = "default";
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (isResizing.current) {
      const newWidth = Math.min(Math.max(e.clientX, 200), 600);
      setSidebarWidth(newWidth);
    }
  };

  useEffect(() => {
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <StylingProvider>
      <Box
        sx={{
          height: "100vh",
          width: "100vw",
          display: "flex",
          flexDirection: "column",
          bgcolor: "neutral.900",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <BuilderHeader
          viewport={viewport}
          onViewportChange={setViewport}
          zoomLevel={zoomLevel}
          setZoomLevel={setZoomLevel}
        />

        <Box sx={{ display: "flex", flex: 1, overflow: "hidden" }}>
          <Box sx={{ width: sidebarWidth, height: "100%", overflowY: "auto" }}>
            <Sidebar onNext={() => null} />
          </Box>

          <Box sx={{ flex: 1, overflow: "auto", height: "100%" }}>
            <PreviewPanel viewport={viewport} zoomLevel={zoomLevel} />
          </Box>
        </Box>
      </Box>
    </StylingProvider>
  );
}
