import { useState } from "react";
import {
  Box,
  Container,
  Divider,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
} from "@mui/material";
import faqData from "../data/faq.json";
import { FAQData } from "../types/faq";

const data: FAQData = faqData as FAQData;

export default function FAQ() {
  const [showAlternateView, setShowAlternateView] = useState(false);
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
    <Container maxWidth="md" sx={{ py: { xs: 4, md: 6 }, '& a': { color: 'primary.main', textDecoration: 'underline', '&:hover': { color: 'ochre.main' } } }}>
      {/* Page Title */}
      <Typography
        variant="h2"
        component="h1"
        sx={{
          fontWeight: 600,
          textAlign: "left",
          mb: { xs: 2, md: 3 },
        }}
      >
        Frequently Asked Questions
      </Typography>

      <Divider sx={{ mb: { xs: 3, md: 4 }, borderColor: "primary.main" }} />

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
        <>
          {/* Introduction */}
          <Box component="section" aria-label="Introduction" sx={{ mb: { xs: 3, md: 4 } }}>
            {typeof data.introduction === 'string' ? (
              <Typography variant="body1" dangerouslySetInnerHTML={{ __html: data.introduction }} />
            ) : (
              data.introduction.map((paragraph, idx) => (
                <Typography
                  key={idx}
                  variant="body1"
                  sx={{ mt: idx > 0 ? 1 : 0 }}
                  dangerouslySetInnerHTML={{ __html: paragraph }}
                />
              ))
            )}
          </Box>

          {/* FAQ Categories */}
          {data.categories.map((category, catIdx) => (
            <Box key={category.id}>
              {/* Category Section */}
              <Box component="section" aria-labelledby={category.id}>
                <Typography
                  id={category.id}
                  variant="h3"
                  component="h2"
                  sx={{ fontWeight: 600, mb: 3 }}
                >
                  {category.title}
                </Typography>

                {/* Q&A Items within category */}
                {category.items.map((item, itemIdx) => (
                  <Box key={itemIdx} sx={{ mb: 3 }}>
                    {/* Question */}
                    <Typography
                      variant="h4"
                      component="h3"
                      sx={{ fontWeight: 600, mb: 1 }}
                    >
                      {item.question}
                    </Typography>

                    {/* Answer - single or multiple paragraphs */}
                    {typeof item.answer === 'string' ? (
                      <Typography variant="body1" dangerouslySetInnerHTML={{ __html: item.answer }} />
                    ) : (
                      item.answer.map((paragraph, pIdx) => (
                        <Typography
                          key={pIdx}
                          variant="body1"
                          sx={{ mt: pIdx > 0 ? 1 : 0 }}
                          dangerouslySetInnerHTML={{ __html: paragraph }}
                        />
                      ))
                    )}

                    {/* Optional bullet list */}
                    {item.list && (
                      <Box component="ul" sx={{ mt: 1, pl: 3, mb: 0 }}>
                        {item.list.map((listItem, lIdx) => (
                          <Typography
                            component="li"
                            key={lIdx}
                            variant="body1"
                            sx={{ mb: 0.5 }}
                            dangerouslySetInnerHTML={{ __html: listItem }}
                          />
                        ))}
                      </Box>
                    )}
                  </Box>
                ))}
              </Box>

              {/* Spacer between categories (not after last one) */}
              {catIdx < data.categories.length - 1 && (
                <Box sx={{ my: { xs: 3, md: 4 } }}>
                  <Divider sx={{ borderColor: "primary.main" }} />
                </Box>
              )}
            </Box>
          ))}
        </>
      )}

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
    </Container>
  );
}
