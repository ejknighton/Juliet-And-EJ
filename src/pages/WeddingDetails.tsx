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
import { PartyPopper, Heart, Coffee } from "lucide-react";
import { colors } from "../theme";
import {
  BackgroundDecorations,
  PageHeader,
  PageFooter,
  EventSection,
  VerticalTrailNavigation,
} from "../components/wedding";
import React from "react";

const trailStops = [
  { id: "friday-section", label: "Friday, June 26th", elevation: "7,600 ft" },
  { id: "saturday-section", label: "Saturday, June 27th", elevation: "10,174 ft" },
  { id: "sunday-section", label: "Sunday, June 28th", elevation: "7,600 ft" },
];

const CORRECT_PASSWORD = "juliet";

export default function WeddingDetails() {
  const [isUnlocked, setIsUnlocked] = useState(true);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  // Change body background color to match page background
  React.useEffect(() => {
    const originalBackgroundColor = document.body.style.backgroundColor;
    document.body.style.backgroundColor = "#f0ebe0";

    return () => {
      document.body.style.backgroundColor = originalBackgroundColor;
    };
  }, []);

  const handlePasswordSubmit = () => {
    if (password === CORRECT_PASSWORD) {
      setIsUnlocked(true);
      handleCloseDialog();
    } else {
      setError(true);
    }
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
    setPassword("");
    setError(false);
  };

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      handlePasswordSubmit();
    }
  };

  // Locked view
  if (!isUnlocked) {
    return (
      <Box
        sx={{
          minHeight: "100vh",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#f0ebe0",
        }}
      >
        <Box sx={{ textAlign: "center", p: 4 }}>
          <Typography variant="h3" sx={{ color: colors.forestPine, mb: 3 }}>
            Wedding Details
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: colors.deepCharcoal,
              mb: 2,
              cursor: "pointer",
              textDecoration: "underline",
            }}
            onClick={() => setDialogOpen(true)}
          >
            More to Come!
          </Typography>
        </Box>

        <Dialog open={dialogOpen} onClose={handleCloseDialog}>
          <DialogTitle sx={{ color: colors.forestPine }}>
            Enter Password
          </DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              label="Password"
              type="password"
              fullWidth
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
            <Button onClick={handleCloseDialog} sx={{ color: colors.forestPine }}>
              Cancel
            </Button>
            <Button
              onClick={handlePasswordSubmit}
              sx={{ color: colors.forestPine }}
            >
              Submit
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    );
  }

  // Unlocked view
  return (
    <Box
      sx={{
        position: "relative",
        minHeight: "100vh",
        width: "100vw", // Full viewport width
        mx: { xs: -2, sm: -3, md: -4 }, // Negative margin to counteract App Container padding
        backgroundColor: "#f0ebe0", // Warmer paper-like background for summer mountain feel
        overflow: "hidden",
      }}
    >
      <BackgroundDecorations />
      <VerticalTrailNavigation stops={trailStops} />

      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          maxWidth: "1000px",
          mx: "auto",
          px: { xs: 2, sm: 3, md: 4 },
          pl: { xs: 2, md: "120px" }, // Add left padding for fixed trail on desktop
          py: 8,
        }}
      >
        <PageHeader />

        {/* Friday - Welcome Party (Base Camp) */}
        <Box id="friday-section">
          <EventSection
            icon={PartyPopper}
            title="Welcome Party"
            date="Friday, June 26th, 2026"
            elevationLabel="Base Camp • 7,600 ft"
            events={[
              {
                name: "Welcome Party",
                time: "Evening - Exact Time TBD",
                location: "Location TBD",
                details: [
                  "Join us for an informal welcome gathering to kick off the weekend",
                  "More details coming soon",
                ],
              },
            ]}
          />
        </Box>

        {/* Saturday - Wedding Day (Summit) */}
        <Box id="saturday-section">
          <EventSection
            icon={Heart}
            title="Wedding Day"
            date="Saturday, June 27th, 2026"
            elevationLabel="Summit Day • 10,174 ft"
            events={[
              {
                name: "Ceremony",
                time: "4:00 PM",
                location: "June Mountain",
              },
              {
                name: "Reception",
                time: "5:00 PM",
                location: "June Mountain",
                details: [
                  "Shuttles will depart from Mammoth Village starting at 3:00 PM",
                  "Shuttles run every 15 minutes after 3:00 PM",
                  "Please plan to arrive early to ensure timely arrival",
                ],
              },
            ]}
          />
        </Box>

        {/* Sunday - Farewell Brunch (Return Trail) */}
        <Box id="sunday-section">
          <EventSection
            icon={Coffee}
            title="Farewell Brunch"
            date="Sunday, June 28th, 2026"
            elevationLabel=" Trail • 7,600 ft"
            showProgressionLine={false}
            events={[
              {
                name: "Farewell Brunch",
                time: "Time TBD",
                location: "Location TBD",
                details: [
                  "Join us for a casual brunch to wrap up the weekend",
                  "More details coming soon",
                ],
              },
            ]}
          />
        </Box>

        <PageFooter />
      </Box>
    </Box>
  );
}
