"use client";

import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Service from "../../../../shared/Service";
import { useStyling } from "@/context/StylingContext";

const serviceData = [
  {
    title: "Fadez",
    description: "A crispy fade will have you ready for any occasion.",
    price: 45,
    duration: "1hr",
  },
  {
    title: "Mid Fade",
    description: "High enough to keep it firme, low enough to keep it classy.",
    price: 25,
    duration: "1hr",
  },
  {
    title: "Taper",
    description: "You'll walk out looking like you belong on a billboard.",
    price: 25,
    duration: "1hr",
  },
];

export default function Services() {
  const {
    headingFont,
    headingSize,
    headingWeight,
    bodyFont,
    bodySize,
    bodyWeight,
  } = useStyling();

  return (
    <Accordion
      defaultExpanded
      sx={{
        bgcolor: "background.paper",
        boxShadow: "none",
        fontFamily: bodyFont || "inherit",
        fontSize: bodySize,
        fontWeight: bodyWeight,
      }}
    >
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Box>
          <Typography
            sx={{
              fontWeight: headingWeight,
              fontFamily: headingFont,
              fontSize: headingSize,
              mb: 0.3,
            }}
          >
            Services
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: "text.secondary",
              fontSize: bodySize * 0.8, // slightly smaller than body
              fontFamily: bodyFont,
              fontWeight: bodyWeight,
            }}
          >
            Tap In!
          </Typography>
        </Box>
      </AccordionSummary>
      <AccordionDetails sx={{ p: 0 }}>
        {serviceData.map((service, idx) => (
          <Service key={idx} {...service} />
        ))}
      </AccordionDetails>
    </Accordion>
  );
}
