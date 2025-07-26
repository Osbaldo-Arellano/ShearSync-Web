"use client";

import { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import BasicStylingSection from "./components/BasicStylingSection";
import ThemePresetSelector from "./components/ThemePresetSelector";
import AdvancedStylingSection from "./components/AdvancedStylingSection";

interface SidebarProps {
  onNext?: () => void;
}

export default function Sidebar({ onNext }: SidebarProps) {
  const [showAdvanced, setShowAdvanced] = useState(false);

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        overflowY: "auto",
        bgcolor: "neutral.900",
        borderRight: "1px solid",
        borderColor: "neutral.800",
        px: 4,
        py: 3,
        fontSize: "0.875rem",
        color: "grey.300",
      }}
    >
      <Typography
        variant="body2"
        sx={{
          fontSize: "10px",
          textTransform: "uppercase",
          fontWeight: 600,
          color: "grey.500",
          letterSpacing: 1,
          mb: 2,
        }}
      >
        Style Options
      </Typography>

      <BasicStylingSection />
      <ThemePresetSelector />

      <Box
        mt={4}
        mb={1}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography
          variant="caption"
          sx={{
            color: "grey.400",
            textTransform: "uppercase",
            letterSpacing: 1,
          }}
        >
          Advanced Styling
        </Typography>
        <Button
          onClick={() => setShowAdvanced((prev) => !prev)}
          size="small"
          sx={{
            color: "info.light",
            fontSize: "0.75rem",
            textTransform: "none",
            "&:hover": { textDecoration: "underline" },
          }}
        >
          {showAdvanced ? "Hide" : "Show"}
        </Button>
      </Box>

      {showAdvanced && <AdvancedStylingSection />}

      {onNext && (
        <Box mt={6} display="flex" justifyContent="flex-end">
          <Button
            onClick={onNext}
            variant="outlined"
            sx={{
              color: "white",
              borderColor: "neutral.700",
              backgroundColor: "neutral.800",
              "&:hover": {
                backgroundColor: "neutral.700",
                borderColor: "neutral.600",
              },
              fontWeight: 600,
              textTransform: "none",
              px: 3,
              py: 1,
              fontSize: "0.875rem",
            }}
          >
            Next Step →
          </Button>
        </Box>
      )}
    </Box>
  );
}
