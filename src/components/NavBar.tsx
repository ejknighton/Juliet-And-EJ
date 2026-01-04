import * as React from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Container,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
} from "@mui/material";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const links = [
  { label: "Home", to: "/" },
  { label: "Our Story", to: "/our-story" },
  { label: "Wedding Details", to: "/wedding-details" },
  { label: "Travel & Stay", to: "/travel-and-stay" },
  { label: "RSVP", to: "/rsvp" },
  { label: "Registry", to: "/registry" },
  { label: "FAQ", to: "/faq" },
];

declare module '@mui/material/AppBar' {
  interface AppBarPropsColorOverrides {
    taupe: true;
  }
}

export default function NavBar() {
  const { pathname } = useLocation();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleToggleMobile = () => {
    setMobileOpen((prev) => !prev);
  };

  const handleCloseMobile = () => {
    setMobileOpen(false);
  };
// to-do FIX SHADOW UNDER!
  return (
    <AppBar position="sticky" elevation={1}
      sx={{
        borderBottom: "2px solid",
        borderColor: theme.palette.rose.main,
        maxHeight: { xs: "8vh", sm: "none" }
      }}
    >
      <Toolbar disableGutters>
        <Container
          maxWidth="lg"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            py: 1,
            position: "relative",
          }}
        >
          <IconButton
            aria-label="Open navigation menu"
            onClick={handleToggleMobile}
            sx={{
              display: { xs: "inline-flex", md: "none" },
              color: theme.palette.secondary.main,
              position: "absolute",
              left: theme.spacing(1),
            }}
          >
            <MenuIcon />
          </IconButton>

          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: 2,
              justifyContent: "center",
              flexWrap: "wrap",
              width: "100%",
            }}
          >
            {links.map((link) => (
              <Button
                key={link.to}
                component={RouterLink}
                to={link.to}
                size="large"
                sx={{
                  color: theme.palette.secondary.main,
                  textTransform: "none",
                  fontWeight: 600,
                  letterSpacing: ".02em",
                  opacity: pathname === link.to ? 1 : 0.8,
                }}
              >
                {link.label}
              </Button>
            ))}
          </Box>
        </Container>
      </Toolbar>

      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={handleCloseMobile}
        ModalProps={{ keepMounted: true }}
        sx={{ display: { xs: "block", md: "none" }, }}
      >
        <Box
          sx={{ width: 260, display: "flex", flexDirection: "column", height: "100%", backgroundColor: theme.palette.primary.main }}
          role="presentation"
        >
          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", px: 2, py: 1,  }}>
            <Box component="span" sx={{ fontWeight: 600, letterSpacing: ".05em" }}>
              Menu
            </Box>
            <IconButton aria-label="Close navigation menu" onClick={handleCloseMobile}>
              <CloseIcon />
            </IconButton>
          </Box>
          <Divider sx={{ borderColor: theme.palette.rose.main }} />
          <List sx={{ flexGrow: 1 }}>
            {links.map((link) => (
              <ListItem key={link.to} disablePadding>
                <ListItemButton
                  component={RouterLink}
                  to={link.to}
                  onClick={handleCloseMobile}
                  selected={pathname === link.to}
                >
                  <ListItemText primary={link.label} primaryTypographyProps={{ fontWeight: 600 }} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
      <Box sx={{ height: 8 }} /> {/* subtle spacer under the nav */}
    </AppBar>
  );
}
