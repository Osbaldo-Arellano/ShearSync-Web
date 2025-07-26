"use client";

import { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import ColorPickerInput from "@/components/builder/sidebar/inputs/ColorPickerInput";
import LayoutSelectInput from "@/components/builder/sidebar/inputs/LayoutSelectInput";
import LogoUploadInput from "@/components/builder/sidebar/inputs/LogoUploadInput";
import AboutTextarea from "@/components/builder/sidebar/inputs/AboutTextArea";
import FontSelector from "@/components/builder/sidebar/inputs/FontSelector";
import FontSizeSlider from "@/components/builder/sidebar/inputs/FontSizeSlider";
import FontWeightSelector from "@/components/builder/sidebar/inputs/FontWeightSelector";
import HoursAndAvailabilityEditor from "@/components/builder/sidebar/inputs/HoursAndAvailabilityEditor";
import LocationInput from "@/components/builder/sidebar/inputs/LocationInput";
import SocialLinksInput from "@/components/builder/sidebar/inputs/SocialLinksInput";
import ThemeSelector from "@/components/builder/sidebar/inputs/ThemeSelector";
import HeroBannerUploader from "@/components/builder/sidebar/inputs/HeroBannerUploader";
import { themePresets } from "@/lib/ThemePresets";

interface Availability {
  [day: string]: { open: string; close: string };
}

interface SidebarProps {
  primaryColor: string;
  layout: string;
  onColorChange: (color: string) => void;
  onLayoutChange: (layout: string) => void;
  logoUrl: string | null;
  onLogoUpload: (logo: string | null) => void;
  heroBannerUrls: string[];
  onHeroBannerUpload: (banners: string[]) => void;
  about: string;
  onAboutChange: (value: string) => void;
  headingFont: string;
  bodyFont: string;
  onHeadingFontChange: (font: string) => void;
  onBodyFontChange: (font: string) => void;
  headingSize: number;
  bodySize: number;
  onHeadingSizeChange: (size: number) => void;
  onBodySizeChange: (size: number) => void;
  headingWeight: number;
  bodyWeight: number;
  onHeadingWeightChange: (weight: number) => void;
  onBodyWeightChange: (weight: number) => void;
  availability: Availability;
  onAvailabilityChange: (availability: Availability) => void;
  location: string;
  onLocationChange: (value: string) => void;
  socialLinks: string[];
  onSocialLinksChange: (links: string[]) => void;
  theme: string;
  onThemeChange: (theme: string) => void;
  onNext?: () => void;
}

export default function Sidebar({
  primaryColor,
  layout,
  onColorChange,
  onLayoutChange,
  logoUrl,
  onLogoUpload,
  heroBannerUrls,
  onHeroBannerUpload,
  about,
  onAboutChange,
  headingFont,
  bodyFont,
  onHeadingFontChange,
  onBodyFontChange,
  headingSize,
  bodySize,
  onHeadingSizeChange,
  onBodySizeChange,
  headingWeight,
  bodyWeight,
  onHeadingWeightChange,
  onBodyWeightChange,
  availability,
  onAvailabilityChange,
  location,
  onLocationChange,
  socialLinks,
  onSocialLinksChange,
  theme,
  onThemeChange,
  onNext,
}: SidebarProps) {
  // Local state to toggle advanced styling controls
  const [showAdvanced, setShowAdvanced] = useState(false);

  // Apply a theme preset by key
  function handleThemeSelect(presetKey: keyof typeof themePresets) {
    const preset = themePresets[presetKey];
    onColorChange(preset.primaryColor);
    onHeadingFontChange(preset.headingFont);
    onBodyFontChange(preset.bodyFont);
    onHeadingSizeChange(preset.headingSize);
    onBodySizeChange(preset.bodySize);
    onHeadingWeightChange(preset.headingWeight);
    onBodyWeightChange(preset.bodyWeight);
  }

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
      {/* Sidebar Title */}
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

      {/* Base Inputs */}
      <Box display="flex" flexDirection="column" gap={3}>
        <ColorPickerInput value={primaryColor} onChange={onColorChange} />
        <LayoutSelectInput value={layout} onChange={onLayoutChange} />
        <LogoUploadInput onUpload={onLogoUpload} />
        <HeroBannerUploader
          bannerUrls={heroBannerUrls}
          onUpload={onHeroBannerUpload}
        />

        {/* Theme preset buttons */}
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
                onClick={() =>
                  handleThemeSelect(key as keyof typeof themePresets)
                }
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
      </Box>

      {/* Toggle for advanced options */}
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

      {/* Advanced styling options */}
      {showAdvanced && (
        <Box display="flex" flexDirection="column" gap={3}>
          <FontSelector
            headingFont={headingFont}
            bodyFont={bodyFont}
            onHeadingFontChange={onHeadingFontChange}
            onBodyFontChange={onBodyFontChange}
          />
          <FontSizeSlider
            headingSize={headingSize}
            bodySize={bodySize}
            onHeadingSizeChange={onHeadingSizeChange}
            onBodySizeChange={onBodySizeChange}
          />
          <FontWeightSelector
            headingWeight={headingWeight}
            bodyWeight={bodyWeight}
            onHeadingWeightChange={onHeadingWeightChange}
            onBodyWeightChange={onBodyWeightChange}
          />
        </Box>
      )}

      {/* Optional "Next Step" button for navigation */}
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
