"use client";

import Box from "@mui/material/Box";
import ColorPickerInput from "@/components/builder/sidebar/inputs/ColorPickerInput";
import LayoutSelectInput from "@/components/builder/sidebar/inputs/LayoutSelectInput";
import LogoUploadInput from "@/components/builder/sidebar/inputs/LogoUploadInput";
import HeroBannerUploader from "@/components/builder/sidebar/inputs/HeroBannerUploader";
import { useStyling } from "@/context/StylingContext";

export default function BasicStylingSection() {
  const {
    primaryColor,
    setPrimaryColor,
    layout,
    setLayout,
    logoUrl,
    setLogoUrl,
    heroBannerUrls,
    setHeroBannerUrls,
  } = useStyling();

  return (
    <Box display="flex" flexDirection="column" gap={3}>
      <ColorPickerInput value={primaryColor} onChange={setPrimaryColor} />
      <LayoutSelectInput value={layout} onChange={setLayout} />
      <LogoUploadInput onUpload={setLogoUrl} />
      <HeroBannerUploader
        bannerUrls={heroBannerUrls}
        onUpload={setHeroBannerUrls}
      />
    </Box>
  );
}
