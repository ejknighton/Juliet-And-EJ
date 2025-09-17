import * as React from "react";
import { AppBar, Toolbar, Button, Container, Box } from "@mui/material";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { useTheme } from "@mui/material/styles";

const links = [
  { label: "Home", to: "/" },
  { label: "Our Story", to: "/our-story" },
  { label: "Wedding Details", to: "/wedding-details" },
  { label: "Travel & Stay", to: "/travel-and-stay" },
  { label: "RSVP", to: "/rsvp" },
  { label: "Registry", to: "/registry" },
  { label: "Schedule", to: "/schedule" },
  { label: "FAQ", to: "/faq" },
];

export default function NavBar() {
  const { pathname } = useLocation();
  const theme = useTheme();
// to-do FIX SHADOW UNDER!
  return (
    <AppBar position="sticky" color='primary' elevation={1}
      sx={{
        borderBottom: "2px solid",
        borderColor: theme.palette.rose.main
      }}
    >
      <Toolbar disableGutters >
        <Container maxWidth="lg"
          sx={{
            display: "flex",
            gap: 2,
            justifyContent: "center",
            flexWrap: "wrap",
            py: 1,
          }}>
          {links.map(l => (
            <Button
              key={l.to}
              component={RouterLink}
              to={l.to}
              size="large"
              sx={{
                color: theme.palette.secondary.main,
                textTransform: "none",
                fontWeight: 600,
                letterSpacing: ".02em",
              }}
            >
              {l.label}
            </Button>
          ))}
      </Container>
        </Toolbar>
      <Box sx={{ height: 8 }} /> {/* subtle spacer under the nav */}
    </AppBar>
  );
}
