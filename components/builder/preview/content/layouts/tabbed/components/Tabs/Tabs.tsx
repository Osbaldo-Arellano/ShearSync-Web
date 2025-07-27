"use client";

import Box from "@mui/material/Box";
import MuiTabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import ServicesTab from "./ServicesTab/ServicesTab";
import AboutTab from "./AboutTab";
import PortfolioTab from "./PortfolioTab";
import { useStyling } from "@/context/StylingContext";

interface TabsProps {
  activeTab: number;
  onChange: (val: number) => void;
}

export default function Tabs({ activeTab, onChange }: TabsProps) {
  const { primaryColor } = useStyling();

  return (
    <>
      {/* Tab Bar */}
      <Box sx={{ bgcolor: primaryColor }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: { xs: "flex-start", sm: "center" },
          }}
        >
          <MuiTabs
            value={activeTab}
            onChange={(_, val) => onChange(val)}
            variant="scrollable"
            scrollButtons="auto"
            textColor="inherit"
            slotProps={{
              indicator: {
                sx: { display: "none" },
              },
            }}
            sx={{
              "& .MuiTab-root": {
                color: "white",
                textTransform: "none",
                fontWeight: 500,
                fontSize: { xs: "0.875rem", sm: "1rem" },
                px: { xs: 1.5, sm: 2 },
              },
              "& .Mui-selected": {
                color: "white",
              },
              maxWidth: "100%",
            }}
          >
            <Tab label="Services" />
            <Tab label="About" />
            <Tab label="Portfolio" />
          </MuiTabs>
        </Box>
      </Box>

      {/* Tab Content */}
      <Box
        sx={{
          p: { xs: 2, sm: 2 },
          bgcolor: "background.default",
        }}
      >
        {
          {
            0: <ServicesTab />,
            1: <AboutTab />,
            2: <PortfolioTab />,
          }[activeTab]
        }
      </Box>
    </>
  );
}
