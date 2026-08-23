import { Box, Typography, Button, Divider } from "@mui/material";

const ALBUM_URL = "https://photos.app.goo.gl/F895rW4kkCsFSJHV6";

export default function Photos() {
  return (
    <Box sx={{
      backgroundColor: 'sky.light',
      minHeight: '50vh',
      py: { xs: 4, md: 6 },
      px: { xs: 2, sm: 3, md: 4 }
    }}>
      <Box sx={{ maxWidth: 800, mx: "auto" }}>
        <Typography variant="h3" sx={{ mb: 2, textAlign: "center" }}>
          Photos
        </Typography>
        <Divider sx={{ borderColor: 'primary.main', mb: { xs: 3, md: 4 } }} />

        <Box sx={{
          backgroundColor: 'background.paper',
          border: '2px solid',
          borderColor: 'taupe.main',
          borderRadius: '8px',
          p: { xs: 3, md: 4 },
          boxShadow: 2,
          textAlign: 'center'
        }}>
          <Typography variant="body1" sx={{ mb: 3 }}>
            We'd love to see the weekend through your eyes! Share your favorite
            moments and check out everyone else's!
          </Typography>

          <Button
            variant="contained"
            size="large"
            href={ALBUM_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            View &amp; Add Photos
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
