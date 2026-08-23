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
        Thank You
      </Typography>

      <Box
        sx={{
          width: '100%',
          maxWidth: '640px',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Typography variant="body1" sx={{ textAlign: 'center' }}>
          Thank you to everyone who traveled up the mountain to celebrate with us.
          Having you all in June Lake meant more to us than we can say.
        </Typography>
      </Box>
    </Box>
  );
}
