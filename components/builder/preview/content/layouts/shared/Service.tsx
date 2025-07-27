"use client";

import { Box, Typography, Button } from "@mui/material";
import { useStyling } from "@/context/StylingContext";

interface ServiceProps {
  title: string;
  description: string;
  price: number;
  duration: string;
}

export default function Service({
  title,
  description,
  price,
  duration,
}: ServiceProps) {
  const { bodyFont, bodySize, bodyWeight } = useStyling();

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start", // ✅ ensures both columns align to top
        py: 2,
        px: 2,
        borderBottom: "1px solid #ccc",
        borderLeft: "none",
        borderRight: "none",
        fontFamily: bodyFont,
        fontSize: bodySize,
        fontWeight: bodyWeight,
      }}
    >
      {/* Left Side: Title + Description */}
      <Box
        sx={{
          maxWidth: "70%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start", // ✅ ensures title aligns to the left
        }}
      >
        <Typography
          sx={{
            fontWeight: "bold",
            fontFamily: bodyFont,
          }}
        >
          {title}
        </Typography>
        <Typography
          sx={{
            color: "text.secondary",
            fontSize: bodySize * 0.9,
            mt: 0.5,
            fontFamily: bodyFont,
          }}
        >
          {description}
        </Typography>
        <Typography
          sx={{
            fontSize: bodySize * 0.75,
            color: "text.disabled",
            mt: 1,
            fontFamily: bodyFont,
          }}
        >
          ...
        </Typography>
      </Box>

      {/* Right Side: Price + Duration + Button */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          minWidth: "100px",
          ml: 2,
          fontFamily: bodyFont,
        }}
      >
        <Typography sx={{ fontWeight: "bold" }}>${price.toFixed(2)}</Typography>
        <Typography
          sx={{
            fontSize: bodySize * 0.75,
            color: "text.secondary",
            mb: 1,
          }}
        >
          {duration}
        </Typography>
        <Button
          variant="contained"
          sx={{
            bgcolor: "black",
            color: "white",
            fontSize: bodySize * 0.75,
            px: 2,
            py: 0.5,
            boxShadow: 2,
            textTransform: "none",
            fontFamily: bodyFont,
            "&:hover": {
              bgcolor: "#222",
            },
          }}
        >
          Book
        </Button>
      </Box>
    </Box>
  );
}
