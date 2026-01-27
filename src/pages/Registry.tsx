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
  Divider
} from "@mui/material";

export default function Registry() {
  const [showAlternateView, setShowAlternateView] = useState(true);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [passwordInput, setPasswordInput] = useState("");
  const [passwordError, setPasswordError] = useState(false);

  const handleMoreToComClick = () => {
    setDialogOpen(true);
    setPasswordError(false);
    setPasswordInput("");
  };

  const handlePasswordSubmit = () => {
    if (passwordInput.toLowerCase() === "juliet") {
      setShowAlternateView(true);
      setDialogOpen(false);
      setPasswordError(false);
    } else {
      setPasswordError(true);
    }
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
    setPasswordInput("");
    setPasswordError(false);
  };

  return (
    <Box sx={{
      backgroundColor: 'sky.light',
      minHeight: '50vh',
      py: { xs: 4, md: 6 },
      px: { xs: 2, sm: 3, md: 4 }
    }}>
      <Box sx={{ maxWidth: 800, mx: "auto" }}>
        <Typography variant="h3" sx={{ mb: 2, textAlign: "center" }}>
          Registry
        </Typography>
        <Divider sx={{ borderColor: 'primary.main', mb: { xs: 3, md: 4 } }} />

      {!showAlternateView ? (
        <Box sx={{ textAlign: "center" }}>
          <Typography
            variant="body1"
            onClick={handleMoreToComClick}
            sx={{ cursor: "default" }}
          >
            More to Come!
          </Typography>
        </Box>
      ) : (
        <Box sx={{
          backgroundColor: 'offWhite.main',
          border: '2px solid',
          borderColor: 'warmTaupe.main',
          borderRadius: '8px',
          p: { xs: 3, md: 4 },
          boxShadow: 2
        }}>
          <Typography variant="body1" sx={{ mb: 3, textAlign: 'center' }}>
            We are incredibly lucky to already have a home full of everything we need.
            Please know that the greatest gift we could receive is having you join us to
            celebrate our marriage. Because we've decided not to have a traditional registry,
            your presence truly is the only gift we need.
          </Typography>

          <Typography variant="body1" sx={{ textAlign: 'center' }}>
            However, should you still wish to give a gift to us, we would cherish a handwritten card
            and/or a treasured recipe. Don't worry if your recipe isn't vegan; we look forward
            to putting our own plant-based spin on your favorites. We can't wait to build a
            home filled with the words and flavors of the people we love most — keepsakes
            we will treasure for years to come!
          </Typography>
        </Box>
      )}
      </Box>

      <Dialog open={dialogOpen} onClose={handleDialogClose}>
        <DialogTitle>Enter Password</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Password"
            type="password"
            fullWidth
            variant="outlined"
            value={passwordInput}
            onChange={(e) => setPasswordInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handlePasswordSubmit();
              }
            }}
            error={passwordError}
            helperText={passwordError ? "Incorrect password" : ""}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose}>Cancel</Button>
          <Button onClick={handlePasswordSubmit} variant="contained">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
