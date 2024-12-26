import React from "react";
import { Box } from "@mui/material";

export const VideoElem = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "16px",
        minHeight: "60vh", // Centers the video vertically as well
      }}
    >
      <Box
        sx={{
          position: "relative",
          width: "90%", // For mobile
          maxWidth: "460px", // For desktop
          height: "auto",
          aspectRatio: "1/1", // Ensures a square aspect ratio
          overflow: "hidden",
          borderRadius: "8px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        }}
      >
        <iframe
          src="https://go.screenpal.com/player/cZlT2VneQDT?controls=1&share=1&download=1&embed=1&cl=1&width=1280&height=720&overlays=1&ff=1"
          title="Video Player"
          allowFullScreen
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            border: "none",
          }}
        ></iframe>
      </Box>
    </Box>
  );
};
