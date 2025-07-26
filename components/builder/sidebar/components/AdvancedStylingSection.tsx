"use client";

import Box from "@mui/material/Box";
import FontSelector from "@/components/builder/sidebar/inputs/FontSelector";
import FontSizeSlider from "@/components/builder/sidebar/inputs/FontSizeSlider";
import FontWeightSelector from "@/components/builder/sidebar/inputs/FontWeightSelector";
import { useStyling } from "@/context/StylingContext";

export default function AdvancedStylingSection() {
  const {
    headingFont,
    bodyFont,
    setHeadingFont,
    setBodyFont,
    headingSize,
    bodySize,
    setHeadingSize,
    setBodySize,
    headingWeight,
    bodyWeight,
    setHeadingWeight,
    setBodyWeight,
  } = useStyling();

  return (
    <Box display="flex" flexDirection="column" gap={3}>
      <FontSelector
        headingFont={headingFont}
        bodyFont={bodyFont}
        onHeadingFontChange={setHeadingFont}
        onBodyFontChange={setBodyFont}
      />
      <FontSizeSlider
        headingSize={headingSize}
        bodySize={bodySize}
        onHeadingSizeChange={setHeadingSize}
        onBodySizeChange={setBodySize}
      />
      <FontWeightSelector
        headingWeight={headingWeight}
        bodyWeight={bodyWeight}
        onHeadingWeightChange={setHeadingWeight}
        onBodyWeightChange={setBodyWeight}
      />
    </Box>
  );
}
