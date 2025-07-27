"use client";

import { useState } from "react";
import Box from "@mui/material/Box";
import { useStyling } from "@/context/StylingContext";

import TabbedHeader from "./components/Header/TabbedHeader";
import Tabs from "./components/Tabs/Tabs";

export default function TabbedPreview() {
  const { about } = useStyling();

  const [tab, setTab] = useState(0);

  const tags = about
    .split(/[,.•|]+/)
    .map((tag) => tag.trim())
    .filter((tag) => tag.length > 1 && tag.length < 30);

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "100%",
        bgcolor: "background.paper",
        borderRadius: { xs: 0, sm: 3 },
        overflow: "hidden",
      }}
    >
      <TabbedHeader />
      <Tabs activeTab={tab} onChange={setTab} />
    </Box>
  );
}
