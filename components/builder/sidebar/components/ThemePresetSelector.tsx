"use client";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import { themePresets } from "@/lib/ThemePresets";
import { useStyling } from "@/context/StylingContext";

export default function ThemePresetSelector() {
  const {
    setPrimaryColor,
    setHeadingFont,
    setBodyFont,
    setHeadingSize,
    setBodySize,
    setHeadingWeight,
    setBodyWeight,
  } = useStyling();

  const handleThemeSelect = (presetKey: keyof typeof themePresets) => {
    const preset = themePresets[presetKey];
    setPrimaryColor(preset.primaryColor);
    setHeadingFont(preset.headingFont);
    setBodyFont(preset.bodyFont);
    setHeadingSize(preset.headingSize);
    setBodySize(preset.bodySize);
    setHeadingWeight(preset.headingWeight);
    setBodyWeight(preset.bodyWeight);
  };

  return (
    <Box>
      <Typography variant="caption" sx={{ color: "grey.400" }}>
        Choose a Theme
      </Typography>
      <Box mt={1} display="flex" gap={1} flexWrap="wrap" mb={2}>
        {Object.keys(themePresets).map((key) => (
          <Button
            key={key}
            variant="outlined"
            size="small"
            onClick={() => handleThemeSelect(key as keyof typeof themePresets)}
            sx={{
              borderColor: "neutral.700",
              backgroundColor: "neutral.800",
              color: "white",
              textTransform: "capitalize",
              fontSize: "0.75rem",
              "&:hover": {
                backgroundColor: "neutral.700",
                borderColor: "neutral.600",
              },
            }}
          >
            {key}
          </Button>
        ))}
      </Box>
    </Box>
  );
}
