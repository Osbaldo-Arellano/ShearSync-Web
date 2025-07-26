"use client";

import { useState } from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import { FaInstagram } from "react-icons/fa";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export default function HeroBannerGallery({ images }: { images: string[] }) {
  const [current, setCurrent] = useState(0);

  const prev = () => {
    setCurrent((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const next = () => {
    setCurrent((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <Paper
      elevation={4}
      sx={{
        position: "relative",
        width: "100%",
        height: { xs: 100, sm: 160, lg: 250 },
        overflow: "hidden",
        borderRadius: 2,
      }}
    >
      {/* Image */}
      <Image
        src={images[current]}
        alt={`Gallery Image ${current + 1}`}
        fill
        style={{ objectFit: "cover" }}
        priority
      />

      {/* Instagram Button */}
      <IconButton
        component="a"
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          position: "absolute",
          top: 8,
          right: 8,
          bgcolor: "rgba(0, 0, 0, 0.5)",
          color: "white",
          "&:hover": {
            bgcolor: "rgba(0, 0, 0, 0.7)",
          },
        }}
      >
        <FaInstagram size={20} />
      </IconButton>

      {/* Left Arrow */}
      <IconButton
        onClick={prev}
        sx={{
          position: "absolute",
          left: 8,
          top: "50%",
          transform: "translateY(-50%)",
          bgcolor: "rgba(0, 0, 0, 0.4)",
          color: "white",
          zIndex: 1,
          "&:hover": {
            bgcolor: "rgba(0, 0, 0, 0.7)",
          },
        }}
      >
        <ArrowBackIosNewIcon fontSize="small" />
      </IconButton>

      {/* Right Arrow */}
      <IconButton
        onClick={next}
        sx={{
          position: "absolute",
          right: 8,
          top: "50%",
          transform: "translateY(-50%)",
          bgcolor: "rgba(0, 0, 0, 0.4)",
          color: "white",
          zIndex: 1,
          "&:hover": {
            bgcolor: "rgba(0, 0, 0, 0.7)",
          },
        }}
      >
        <ArrowForwardIosIcon fontSize="small" />
      </IconButton>
    </Paper>
  );
}
