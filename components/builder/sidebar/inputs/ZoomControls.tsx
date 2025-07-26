"use client";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

interface ZoomControlsProps {
  zoomLevel: number;
  setZoomLevel: (level: number) => void;
}

export default function ZoomControls({
  zoomLevel,
  setZoomLevel,
}: ZoomControlsProps) {
  // Restrict zoom size on mobile view
  const clamp = (val: number) => Math.max(0.5, Math.min(1.3, val));

  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
      {/* Minus Button */}
      <Button
        onClick={() => setZoomLevel(clamp(zoomLevel - 0.1))}
        sx={{
          minWidth: 28,
          height: 28,
          fontSize: "0.75rem",
          padding: 0,
          lineHeight: 1,
          borderRadius: 1,
          backgroundColor: "#1e1e1e",
          color: "#fff",
          border: "1px solid #444",
          "&:hover": {
            backgroundColor: "#2a2a2a",
            borderColor: "#555",
          },
        }}
      >
        −
      </Button>

      {/* Zoom Label */}
      <Typography
        variant="caption"
        sx={{
          width: 110,
          textAlign: "center",
          color: "grey.300",
          fontSize: "0.75rem",
        }}
      >
        Mobile Zoom {Math.round(zoomLevel * 100)}%
      </Typography>

      {/* Plus Button */}
      <Button
        onClick={() => setZoomLevel(clamp(zoomLevel + 0.1))}
        sx={{
          minWidth: 28,
          height: 28,
          fontSize: "0.75rem",
          padding: 0,
          lineHeight: 1,
          borderRadius: 1,
          backgroundColor: "#1e1e1e",
          color: "#fff",
          border: "1px solid #444",
          "&:hover": {
            backgroundColor: "#2a2a2a",
            borderColor: "#555",
          },
        }}
      >
        +
      </Button>
    </Box>
  );
}
