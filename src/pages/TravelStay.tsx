// src/pages/TravelStay.tsx
import { useState } from "react";
import {
  Box,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
} from "@mui/material";
import { colors } from "../theme";
import { HotelType, AirportType, ActivityType } from "../types/travel";
import hotelsData from "../data/hotels.json";
import airportsData from "../data/airports.json";
import thingsToDoData from "../data/thingsToDo.json";
import {
  BackgroundDecorations,
  PageHeader,
  PageFooter,
  AccommodationsSection,
  AirportsSection,
  ActivitiesSection,
  TransportationSection,
} from "../components/travel";

// Data
const hotels: HotelType[] = hotelsData.hotels;
const airports: AirportType[] = airportsData.airports;
const activities: ActivityType[] = thingsToDoData.activities;

// Password for accessing the page
const CORRECT_PASSWORD = "juliet";

/**
 * Travel & Stay page with ski trail theme
 * Displays accommodations, airports, activities, and transportation information
 * Protected by password
 */
export default function TravelStay() {
  const [isUnlocked, setIsUnlocked] = useState(true);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleClickMoreToCome = () => {
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
    setPassword("");
    setError(false);
  };

  const handlePasswordSubmit = () => {
    if (password === CORRECT_PASSWORD) {
      setIsUnlocked(true);
      handleCloseDialog();
    } else {
      setError(true);
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      handlePasswordSubmit();
    }
  };

  // Show "More to Come!" view if not unlocked
  if (!isUnlocked) {
    return (
      <>
        <Box>
          <Typography variant="h3">Travel & Stay</Typography>
          <Typography
            variant="body1"
            onClick={handleClickMoreToCome}
            sx={{
              cursor: "pointer",
              "&:hover": {
                textDecoration: "underline",
              },
            }}
          >
            More to Come!
          </Typography>
        </Box>

        <Dialog open={dialogOpen} onClose={handleCloseDialog} >
          <DialogTitle>Enter Password</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              label="Password"
              type="password"
              fullWidth
              variant="outlined"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError(false);
              }}
              onKeyPress={handleKeyPress}
              error={error}
              helperText={error ? "Incorrect password" : ""}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDialog} sx={{ color: colors.forestPine}}>Cancel</Button>
            <Button onClick={handlePasswordSubmit} sx={{ color: colors.forestPine}} variant="contained">
              Submit
            </Button>
          </DialogActions>
        </Dialog>
      </>
    );
  }

  // Show full content if unlocked
  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100%",
        overflow: "hidden",
        position: "relative",
        backgroundColor: colors.skyLight,
      }}
    >
      {/* Background decorations */}
      <BackgroundDecorations />

      {/* Main content */}
      <Box
        sx={{
          position: "relative",
          zIndex: 10,
          // maxWidth: "1200px",
          mx: "auto",
          px: 2,
          py: 8,
          pb: 16,
        }}
      >
        {/* Trail sections container */}
        <Box sx={{ position: "relative", maxWidth: "1000px", mx: "auto" }}>
          {/* Accommodations section */}
          <AccommodationsSection hotels={hotels} />

          {/* Airports section */}
          <AirportsSection airports={airports} />

          {/* Activities section */}
          <ActivitiesSection activities={activities} />

          {/* Transportation section */}
          <TransportationSection />

        </Box>
      </Box>
    </Box>
  );
}