// components/builder/preview/layouts/tabbed/TabbedPreview.tsx
"use client";

import { useState } from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import TabbedHeader from "./components/TabbedHeader";
import ServicesTab from "./components/ServicesTab";
import AboutTab from "./components/AboutTab";

interface Props {
  heroBannerUrls: string[];
  logoUrl: string | null;
  headingFont: string;
  headingSize: number;
  headingWeight: number;
  primaryColor: string;
  about: string;
  bodyFont: string;
  bodySize: number;
  bodyWeight: number;
}

export default function TabbedPreview(props: Props) {
  const [tab, setTab] = useState(0);

  const tags = props.about
    .split(/[,.•|]+/)
    .map((tag) => tag.trim())
    .filter((tag) => tag.length > 1 && tag.length < 30);

  return (
    <Box
      sx={{ width: "100%", borderRadius: 2, boxShadow: 3, overflow: "hidden" }}
    >
      <TabbedHeader
        heroBannerUrls={props.heroBannerUrls}
        logoUrl={props.logoUrl}
        headingFont={props.headingFont}
        headingSize={props.headingSize}
        headingWeight={props.headingWeight}
        primaryColor={props.primaryColor}
        about={props.about}
      />

      <Box sx={{ px: 3, bgcolor: props.primaryColor }}>
        <Tabs
          value={tab}
          onChange={(_, val) => setTab(val)}
          variant="scrollable"
        >
          <Tab label="Services" />
          <Tab label="About" />
        </Tabs>

        <Box sx={{ pt: 2 }}>
          {tab === 0 ? (
            <ServicesTab tags={tags} />
          ) : (
            <AboutTab
              text={props.about}
              font={props.bodyFont}
              size={props.bodySize}
              weight={props.bodyWeight}
            />
          )}
        </Box>
      </Box>
    </Box>
  );
}
