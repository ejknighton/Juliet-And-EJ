import { Box, Typography } from "@mui/material";

export default function RSVP() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        py: { xs: 4, sm: 6, md: 8 },
        px: 2,
        minHeight: '100vh',
      }}
    >
      <Typography
        variant="h2"
        component="h1"
        sx={{
          mb: 4,
          textAlign: 'center',
          fontFamily: 'Fraunces Variable',
        }}
      >
        RSVP
      </Typography>

      <Box
        sx={{
          width: '100%',
          maxWidth: '640px',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSd29eDfioWWvEumrAdy_gu9sLU_e4F5iY3-LBsaEpsl-u8ZCA/viewform?embedded=true"
          width="100%"
          height="1009"
          style={{ border: 0, maxWidth: '640px' }}
          title="RSVP Form"
        >
          Loading…
        </iframe>
      </Box>
    </Box>
  );
}
