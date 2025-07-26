"use client";

import { useState } from "react";
import { SketchPicker } from "react-color";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Popover from "@mui/material/Popover";
import Button from "@mui/material/Button";

interface ColorPickerInputProps {
  value: string;
  onChange: (value: string) => void;
}

export default function ColorPickerInput({
  value,
  onChange,
}: ColorPickerInputProps) {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <Box
      sx={{ width: "100%", display: "flex", flexDirection: "column", gap: 1 }}
    >
      <Typography variant="caption" sx={{ color: "grey.400" }}>
        Primary Color
      </Typography>

      {/* Swatch + Hex Display */}
      <Button
        onClick={handleClick}
        variant="outlined"
        sx={{
          justifyContent: "flex-start",
          borderColor: "neutral.700",
          bgcolor: "neutral.900",
          color: value,
          textTransform: "none",
          px: 1.5,
          py: 1,
          gap: 1.5,
        }}
      >
        <Box
          sx={{
            width: 20,
            height: 20,
            borderRadius: "4px",
            bgcolor: value,
            border: "1px solid #666",
          }}
        />
        <Typography
          variant="body2"
          sx={{ color: "grey.300", fontFamily: "monospace" }}
        >
          {value.toUpperCase()}
        </Typography>
      </Button>

      {/* Picker Popup */}
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      >
        <SketchPicker
          color={value}
          onChangeComplete={(color: { hex: string }) => onChange(color.hex)}
          disableAlpha
        />
      </Popover>
    </Box>
  );
}
