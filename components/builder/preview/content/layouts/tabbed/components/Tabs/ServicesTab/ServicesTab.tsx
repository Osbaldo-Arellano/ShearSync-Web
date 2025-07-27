"use client";

import { Box } from "@mui/material";
import { useStyling } from "@/context/StylingContext";
import Services from "./Services";
import fontClassMap from "../../../../../styles/fontClassMap";

export default function ServicesTab() {
  const { bodyFont, bodySize, bodyWeight } = useStyling();

  return (
    <Box
      sx={{
        fontFamily: fontClassMap.bodyFont || "inherit",
        fontSize: bodySize,
        fontWeight: bodyWeight,
        width: "100%",
      }}
    >
      <Services />
    </Box>
  );
}
