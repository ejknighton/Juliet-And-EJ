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
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handlePasswordSubmit();
                }
              }}
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
                name: "Open House Welcome Party",
                time: "7:00 - 10:00 PM",
                location: "Side Door Wine Bar & Cafe, Mammoth Village",
                locationUrl: "https://maps.app.goo.gl/rX1hUEVaw4yNUCUw7",
                details: [
                  "Kick off the weekend with us! We're hosting an informal open house with drinks and light bites. Drop by anytime between 7:00 and 10:00 pm to say hello.",
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
            elevationLabel="Summit Day • 8,600 ft"
            events={[
              {
                name: "Ceremony",
                time: "4:00 PM",
                location: "June Mountain Chalet",
              },
              {
                name: "Reception",
                time: "Immediately following the ceremony, join us for cocktail hour, followed by dinner and dancing.",
                location: "June Mountain Chalet",
              },
              {
                name: "Transportation",
                details: [
                  "One shuttle will depart from Mammoth Village at 3:00. And a second shuttle will depart from The Limelight at 3:15.",
                  "Please arrive at the pickup spot 5 minutes before departure time.",
                  "If you prefer to drive to and from the reception, there is a complimentary parking lot at the base of June Mountain that you can use.",
                ],
              },
              {
                name: "The Journey",
                details: [
                  "The ceremony and reception are held at the June Mountain Chalet. To reach the venue, guests will take a scenic 10-minute chairlift ride. Due to this, please plan to arrive to the base of the mountain no later than 3:45 PM",
                ],
              },
              {
                name: "Dress Code: Semi-Formal",
                details: [
                  "We invite you to dress up with us! For men, we suggest a suit or a dress shirt and slacks (tie optional). For women, we recommend a midi dress, jumpsuit, or dressy separates. Please keep in mind when planning your attire that the wedding is at a mountain lodge and you will be riding a chairlift and walking on wood chips at times during the evening. It can get chilly once the sun goes down, so a light jacket or wrap is highly encouraged.",
                ],
              }
            ]}
          />
        </Box>

        {/* Sunday - Farewell Brunch (Return Trail) */}
        <Box id="sunday-section">
          <EventSection
            icon={Coffee}
            title="Farewell Breakfast"
            date="Sunday, June 28th, 2026"
            elevationLabel=" Trail • 7,600 ft"
            showProgressionLine={false}
            events={[
              {
                name: "Farewell Breakfast",
                time: "9:00 - 11:00 AM",
                location: "Limelight, Mammoth Village",
                locationUrl: "https://maps.app.goo.gl/Bs3ko9YxTyvGxoJG7",
                details: [
                  "Before you head out, stop by the Limelight for a casual buffet breakfast. We'll be there from 9:00 to 11:00 to share one last meal and say our goodbyes.",
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
