import { useStyling } from "@/context/StylingContext";
import { Box } from "@mui/material";
import PreviewContent from "../content/PreviewContent";

export default function MobilePreview() {
  const { headingSize, bodySize, theme } = useStyling();

  const headingFontSize = headingSize * 0.7;
  const bodyFontSize = bodySize * 0.7;
  const backgroundColor = theme === "light" ? "white" : "neutral.950";
  const textColor = theme === "light" ? "black" : "white";

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: backgroundColor,
      }}
    >
      <Box
        sx={{
          width: 500,
          height: 900,
          borderRadius: "40px",
          borderColor: "neutral.700",
          boxShadow: 6,
          bgcolor: "black",
          overflow: "hidden",
          position: "relative",
        }}
      >
        {/* Status bar bump */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: "50%",
            transform: "translateX(-50%)",
            width: 96,
            height: 16,
            borderRadius: "0 0 12px 12px",
            bgcolor: "neutral.800",
            zIndex: 10,
          }}
        />

        {/* Preview Content */}
        <Box
          sx={{
            height: "100%",
            overflowY: "auto",
            WebkitOverflowScrolling: "touch",
          }}
        >
          <PreviewContent />
        </Box>
      </Box>
    </Box>
  );
}
