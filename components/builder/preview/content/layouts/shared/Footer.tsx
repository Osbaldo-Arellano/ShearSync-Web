"use client";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Divider from "@mui/material/Divider";
import { FaInstagram } from "react-icons/fa";
import LogoDisplay from "../../styles/LogoDisplay";
import { useStyling } from "@/context/StylingContext";

export default function TabbedFooter() {
  const { logoUrl, primaryColor, about } = useStyling();

  return (
    <Box
      component="footer"
      sx={{
        mt: 6,
        px: { xs: 2, sm: 3 },
        py: { xs: 4, sm: 5 },
        bgcolor: primaryColor || "grey.900",
        color: "white",
      }}
    >
      {/* Top Section */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "space-between",
          alignItems: { xs: "center", sm: "flex-start" },
          textAlign: { xs: "center", sm: "left" },
          gap: { xs: 2, sm: 4 },
        }}
      >
        {/* Logo */}
        {logoUrl && (
          <Box sx={{ maxWidth: 150 }}>
            <LogoDisplay src={logoUrl} />
          </Box>
        )}

        {/* About Text */}
        <Box>
          <Typography variant="body2">
            {about?.trim() ||
              "We take pride in providing quality service to our community."}
          </Typography>
        </Box>

        {/* Social Icons */}
        <Box>
          <IconButton
            component="a"
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ color: "white", "&:hover": { color: "grey.300" } }}
          >
            <FaInstagram size={20} />
          </IconButton>
        </Box>
      </Box>

      {/* Divider */}
      <Divider sx={{ my: 3, bgcolor: "rgba(255,255,255,0.2)" }} />

      {/* Copyright */}
      <Typography variant="caption" align="center" sx={{ display: "block" }}>
        &copy; {new Date().getFullYear()} Your Business Name. All rights
        reserved.
      </Typography>
    </Box>
  );
}
