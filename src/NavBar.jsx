import * as React from "react";
import { AppBar, Toolbar, Button, Container, Box } from "@mui/material";
import { Link as RouterLink, useLocation } from "react-router-dom";

const links = [
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

  return (
    <AppBar position="static" elevation={0} sx={{ background: "transparent", color: "inherit" }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ gap: { xs: 1, md: 2 }, justifyContent: "center", flexWrap: "wrap" }}>
          {links.map(l => (
            <Button
              key={l.to}
              component={RouterLink}
              to={l.to}
              size="large"
              sx={{
                textTransform: "none",
                fontWeight: pathname === l.to ? 700 : 500,
                fontFamily: '"Cormorant Garamond", serif',
                fontSize: { xs: 16, md: 18 },
              }}
            >
              {l.label}
            </Button>
          ))}
        </Toolbar>
      </Container>
      <Box sx={{ height: 8 }} /> {/* subtle spacer under the nav */}
    </AppBar>
  );
}
