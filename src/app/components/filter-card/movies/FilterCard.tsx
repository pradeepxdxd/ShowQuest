/* eslint-disable react/jsx-no-duplicate-props */
import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Chip,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const FilterComponent = () => {
  const languages = [
    "English",
    "Hindi",
    "Malayalam",
    "Marathi",
    "Telugu",
    "Hinglish",
    "Japanese",
    "Multi Language",
    "Punjabi",
    "Tamil",
  ];

  const format: string[] = [
    "2D",
    "3D",
    "4D",
    "4DX",
    "4DX 3D",
    "IMAX 2D",
    "ICE",
  ];

  return (
    <Box sx={{ width: "320px" }}>
      <Accordion sx={{ mt: 2 }} elevation={0}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          sx={{
            flexDirection: "row-reverse", // Makes icon appear before text
          }}
        >
          <Typography variant="body1" sx={{ ml: 2 }}>
            Languages
          </Typography>
          <Typography variant="body2" marginLeft={"auto"}>
            Clear
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div>
            {languages.map((lang) => (
              <Chip
                key={lang}
                label={lang}
                variant="outlined"
                style={{ margin: "4px", cursor: "pointer" }}
              />
            ))}
          </div>
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{ mt: 2 }} elevation={0}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          sx={{
            flexDirection: "row-reverse", // Makes icon appear before text
          }}
        >
          <Typography variant="body1" sx={{ ml: 2 }}>
            Genres
          </Typography>
          <Typography variant="body2" marginLeft={"auto"}>
            Clear
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div>
            {languages.map((lang) => (
              <Chip
                key={lang}
                label={lang}
                variant="outlined"
                style={{ margin: "4px", cursor: "pointer" }}
              />
            ))}
          </div>
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{ mt: 2 }} elevation={0}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          sx={{
            flexDirection: "row-reverse", // Makes icon appear before text
          }}
        >
          <Typography variant="body1" sx={{ ml: 2 }}>
            Format
          </Typography>
          <Typography variant="body2" marginLeft={"auto"}>
            Clear
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div>
            {format.map((lang) => (
              <Chip
                key={lang}
                label={lang}
                variant="outlined"
                style={{
                  margin: "4px",
                  cursor: "pointer",
                }}
              />
            ))}
          </div>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FilterComponent;
