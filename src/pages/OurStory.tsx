import * as React from "react";
import {
  Box,
  Container,
  Divider,
  Grid,
  Typography,
  useTheme,
} from "@mui/material";
import ktpCoffeeChat from "@assets/photos/our_story/1-1_photo.png";
import proposal from "@assets/photos/our_story/proposal.jpg";
import marathon from "@assets/photos/our_story/marathon.jpg";
import camping from "@assets/photos/our_story/camping.jpg";
import cats from "@assets/photos/our_story/cats.jpg";
import june_lake from "@assets/photos/our_story/june_lake.jpg";
import paris from "@assets/photos/our_story/paris.jpg";

export default function OurStory() {
  const theme = useTheme();

  return (
    <Container maxWidth="md" sx={{ py: { xs: 4, md: 6 } }}>
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
        Our Story
      </Typography>

      <Divider sx={{ mb: { xs: 3, md: 4 }, borderColor: "primary.main" }} />

      {/* Section: How We First Met */}
      <Box component="section" aria-labelledby="how-we-met">
        <Typography
          id="how-we-met"
          variant="h4"
          component="h2"
          sx={{ fontWeight: 600, mb: 2 }}
        >
          How did you meet?
        </Typography>

        <Grid container spacing={3} direction="column" alignItems="stretch">
          <Grid >
            <Typography variant="body1">
              We met in the professional technology fraternity Kappa Theta Pi at the University of Michigan, where we both were studying Computer Science. We spent our college years as friends, sharing classes and study sessions, rock climbing together, and socializing together in our tech fraternity.
            </Typography>
          </Grid>

          {/* Image + caption */}
          <Grid >
            <Box component="figure" sx={{m: 0, display: "flex", flexDirection: "column", alignItems: "center"}}>
              <Box
                component="img"
                src={ktpCoffeeChat}
                alt="Spring 2018 — KTP coffee chat selfie"
                loading="lazy"
                sx={{
                  height: "auto",
                  display: "block",
                  border: "1px solid",
                  borderColor: "divider",
                  borderRadius: 1.5,
                  boxShadow: 1,
                  maxWidth: '400px'
                }}
              />
                <Typography component="figcaption" variant="caption" color="text.secondary" sx={{ mt: 1, display: "block" }}>
                  During Kappa Theta Pi pledging, all new members had to meet each existing member for a one-on-one coffee chat. This is the selfie we took during our chat back in spring 2018!
              </Typography>
            </Box>
          </Grid>

          <Grid >
            <Typography variant="body1">
              After college, as the pandemic hit, our friendship deepened over online chess and playing the video game Stardew Valley with our friend Sam. We met up on occasion in Ann Arbor while Juliet finished her last semester in school and EJ was living with his parents starting his job. It was during these months that we both realized our friendship was growing into something more!
            </Typography>
          </Grid>

        </Grid>
      </Box>

      {/* Spacer */}
      <Box sx={{ my: { xs: 3, md: 4 } }}>
        <Divider sx={{ mb: { xs: 3, md: 4 }, borderColor: "primary.main" }} />
      </Box>

      {/* Section: The First Move */}
      <Box component="section" aria-labelledby="the-first-move">
        <Typography
          id="the-first-move"
          variant="h4"
          component="h2"
          sx={{ fontWeight: 600, mb: 2 }}
        >
          Who made the first move?
        </Typography>

        <Typography variant="body1">
          EJ made the first move during an in-person chess match on Juliet’s porch! 
          <br />
          After months of online games and semi-frequent meetups, EJ was ready to share his feelings. He had a plan: he would wait for Juliet to win a game before telling her how he felt. The only problem? Juliet kept losing!
          <br />
          Eventually, EJ realized he couldn't wait any longer. He ditched his plan, shared his heart, and luckily, Juliet felt the same.
        </Typography>
      </Box>

      {/* Spacer */}
      <Box sx={{ my: { xs: 3, md: 4 } }}>
        <Divider sx={{ mb: { xs: 3, md: 4 }, borderColor: "primary.main" }} />
      </Box>

      {/* Section: Proposal Story */}
      <Box component="section" aria-labelledby="proposal-story">
        <Typography
          id="proposal-story"
          variant="h4"
          component="h2"
          sx={{ fontWeight: 600, mb: 2 }}
        >
          What was your proposal story?
        </Typography>

       <Grid container spacing={3} direction="column" alignItems="stretch">
          <Grid >
            <Typography variant="body1">
              EJ proposed in our living room, completely surprising Juliet!
            </Typography>
          </Grid>

          {/* Image + caption */}
          <Grid sx={{ widtt: '100%', display: "flex", justifyContent: "center" }}>
            <Box component="figure" sx={{m: 'auto', width: '100%', display: "flex", flexDirection: "column", alignItems: "center"}}>
              <Box
                component="img"
                src={proposal}
                alt="Spring 2018 — KTP coffee chat selfie"
                loading="lazy"
                sx={{
                  height: "auto",
                  display: "block",
                  border: "1px solid",
                  borderColor: "divider",
                  borderRadius: 1.5,
                  boxShadow: 1,
                  maxWidth: '400px'
                }}
              />
                <Typography component="figcaption" variant="caption" color="text.secondary" sx={{ mt: 1, display: "block" }}>
                  Enjoying champagne in our courtyard after the proposal!
              </Typography>
            </Box>
          </Grid>

          <Grid >
            <Typography variant="body1">
              We had plans to go to a trendy new bar near our apartment, but just as we were about to head out the door, EJ said he forgot his wallet upstairs. When he came back down, just before leaving he got down on one knee!
            </Typography>
            <Typography mt={1} variant="body1">
              Juliet was completely caught off guard. She later learned that EJ, after months of waiting for it to be finished being made, had picked up the ring the day before and simply couldn't wait another moment to propose. We celebrated with champagne in our courtyard, perfectly capping off the unexpected and unforgettable moment.
            </Typography>
          </Grid>

        </Grid>
      </Box>

     {/* Spacer */}
      <Box sx={{ my: { xs: 3, md: 4 } }}>
        <Divider sx={{ mb: { xs: 3, md: 4 }, borderColor: "primary.main" }} />
      </Box>

      {/* Section: Favorite Activities */}
      <Box component="section" aria-labelledby="activities">
        <Typography
          id="activities"
          variant="h4"
          component="h2"
          sx={{ fontWeight: 600, mb: 2 }}
        >
          What's your favorite activity together?
        </Typography>

        <Typography variant="body1">
        <Grid container spacing={3} direction="column" alignItems="stretch">
          {/* Text */}
          <Grid >
            <Typography variant="body1">
              We have so many favorite activities to do together. We love being active together - running, 
              swimming, biking and training for different triathlon or long distance races together. 
              We also have been enjoying walking on the beach by our apartment in the mornings with coffee and 
              trying new vegan restaurants in Los Angeles. 
            </Typography>
          </Grid>

          {/* Image + caption */}
          <Grid sx={{ widtt: '100%', display: "flex", justifyContent: "center" }}>
            <Box component="figure" sx={{m: 0, display: "flex", flexDirection: "column", alignItems: "center"}}>
              <Box
                component="img"
                src={marathon}
                loading="lazy"
                sx={{
                  height: "auto",
                  display: "block",
                  border: "1px solid",
                  borderColor: "divider",
                  borderRadius: 1.5,
                  boxShadow: 1,
                  maxWidth: '400px'
                }}
              />
                <Typography component="figcaption" variant="caption" color="text.secondary" sx={{ mt: 1, display: "block" }}>
                  After our first marathon in 2024!
              </Typography>
            </Box>
          </Grid>
        </Grid>
        </Typography>
      </Box>

      {/* Spacer */}
      <Box sx={{ my: { xs: 3, md: 4 } }}>
        <Divider sx={{ mb: { xs: 3, md: 4 }, borderColor: "primary.main" }} />
      </Box>

      {/* Section: The First Move */}
      <Box component="section" aria-labelledby="the-first-move">
        <Typography
          id="the-first-move"
          variant="h4"
          component="h2"
          sx={{ fontWeight: 600, mb: 2 }}
        >
          Where are you going for your honeymoon?
        </Typography>

        <Typography variant="body1">
          Undecided :)
        </Typography>
      </Box>

      {/* Spacer */}
      <Box sx={{ my: { xs: 3, md: 4 } }}>
        <Divider sx={{ mb: { xs: 3, md: 4 }, borderColor: "primary.main" }} />
      </Box>

      {/* Section: The First Move */}
      <Box component="section" aria-labelledby="the-first-move">
        <Typography
          id="the-first-move"
          variant="h4"
          component="h2"
          sx={{ fontWeight: 600, mb: 2 }}
        >
          What's the best meal you have eaten together?
        </Typography>

        <Typography mb={2} variant="body1">
          <strong>EJ:</strong> When we were in Paris, we had a delicious 5 course vegan meal and ate the best croquettes!
        </Typography>

         {/* Image + caption */}
          <Grid sx={{ widtt: '100%', display: "flex", justifyContent: "center" }}>
            <Box component="figure" sx={{m: 0, display: "flex", flexDirection: "column", alignItems: "center"}}>
              <Box
                component="img"
                src={paris}
                loading="lazy"
                sx={{
                  height: "auto",
                  display: "block",
                  border: "1px solid",
                  borderColor: "divider",
                  borderRadius: 1.5,
                  boxShadow: 1,
                  maxWidth: '400px'
                }}
              />
                <Typography component="figcaption" variant="caption" color="text.secondary" sx={{ mt: 1, display: "block" }}>
                  Yummy Baguette in Paris!
              </Typography>
            </Box>
          </Grid>

        <Typography mt={2} variant="body1">
          <strong>Juliet:</strong> Anything EJ cooks for me! 
        </Typography>
      </Box>

    {/* Spacer */}
      <Box sx={{ my: { xs: 3, md: 4 } }}>
        <Divider sx={{ mb: { xs: 3, md: 4 }, borderColor: "primary.main" }} />
      </Box>

      {/* Section: Best Trip */}
      <Box component="section" aria-labelledby="best-trip">
        <Typography
          id="best-trip"
          variant="h4"
          component="h2"
          sx={{ fontWeight: 600, mb: 2 }}
        >
          What's the most memorable trip you have taken together?
        </Typography>

        <Grid container spacing={3} direction="column" alignItems="stretch">
          {/* Text */}
          <Grid >
            <Typography variant="body1">
              For our 6 month anniversary, we went on a camping trip in Michigan. 
              However, we were very unprepared for the freezing cold nights and we were the only 
              tent in the camp site when everyone else had RVs. 
              We traded a 6 pack of Shorts beer for a heater from a family in a trailer next to us just to stay warm!
            </Typography>
          </Grid>

          {/* Image + caption */}
          <Grid sx={{ widtt: '100%', display: "flex", justifyContent: "center" }}>
            <Box component="figure" sx={{m: 0, display: "flex", flexDirection: "column", alignItems: "center"}}>
              <Box
                component="img"
                src={camping}
                loading="lazy"
                sx={{
                  height: "auto",
                  display: "block",
                  border: "1px solid",
                  borderColor: "divider",
                  borderRadius: 1.5,
                  boxShadow: 1,
                  maxWidth: '600px'
                }}
              />
                <Typography component="figcaption" variant="caption" color="text.secondary" sx={{ mt: 1, display: "block" }}>
                  Camping in Michigan!
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>

    {/* Spacer */}
      <Box sx={{ my: { xs: 3, md: 4 } }}>
        <Divider sx={{ mb: { xs: 3, md: 4 }, borderColor: "primary.main" }} />
      </Box>

      {/* Section: Life Goals */}
      <Box component="section" aria-labelledby="life-goal">
        <Typography
          id="life-goal"
          variant="h4"
          component="h2"
          sx={{ fontWeight: 600, mb: 2 }}
        >
          What's a life goal of yours?
        </Typography>

        <Grid container spacing={3} direction="column" alignItems="stretch">
          {/* Text */}
          <Grid >
            <Typography variant="body1">
              Build a catio (a enclosed patio for cats) for our two kitties Pecan Pie and Maple Syrup Pie
            </Typography>
          </Grid>

          {/* Image + caption */}
          <Grid sx={{ widtt: '100%', display: "flex", justifyContent: "center" }}>
            <Box component="figure" sx={{m: 0, display: "flex", flexDirection: "column", alignItems: "center"}}>
              <Box
                component="img"
                src={cats}
                loading="lazy"
                sx={{
                  height: "auto",
                  display: "block",
                  border: "1px solid",
                  borderColor: "divider",
                  borderRadius: 1.5,
                  boxShadow: 1,
                  maxWidth: '400px'
                }}
              />
                <Typography component="figcaption" variant="caption" color="text.secondary" sx={{ mt: 1, display: "block" }}>
                  Maple and Pecan!
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>

    {/* Spacer */}
      <Box sx={{ my: { xs: 3, md: 4 } }}>
        <Divider sx={{ mb: { xs: 3, md: 4 }, borderColor: "primary.main" }} />
      </Box>

      {/* Section: Best Trip */}
      <Box component="section" aria-labelledby="best-trip">
        <Typography
          id="best-trip"
          variant="h4"
          component="h2"
          sx={{ fontWeight: 600, mb: 2 }}
        >
          Why June Lake?
        </Typography>

        <Grid container spacing={3} direction="column" alignItems="stretch">
          {/* Text */}
          <Grid >
            <Typography variant="body1">
              June Lake is our favorite place! We love spending our summer weekends cycling, running, and hiking through it. When winter arrives, EJ enjoys snowboarding on the mountain, while Juliet relaxes with some hot cocoa.
            </Typography>
            <Typography mt={1} variant="body1">
              This small town feels like home because it reminds us of both our childhood summers —Juliet’s spent in Sun Valley, Idaho, and EJ’s up in Northern Michigan. Our time spent in small, nature filled communities gave us a special connection to places like this.
            </Typography>
            <Typography mt={1} variant="body1">
              June Lake is truly the most special place to us, and we can’t wait to share it with all of you.
            </Typography>
          </Grid>

          {/* Image + caption */}
          <Grid sx={{ widtt: '100%', display: "flex", justifyContent: "center" }}>
            <Box component="figure" sx={{m: 0, display: "flex", flexDirection: "column", alignItems: "center"}}>
              <Box
                component="img"
                src={june_lake}
                loading="lazy"
                sx={{
                  height: "auto",
                  display: "block",
                  border: "1px solid",
                  borderColor: "divider",
                  borderRadius: 1.5,
                  boxShadow: 1,
                  maxWidth: '600px'
                }}
              />
                <Typography component="figcaption" variant="caption" color="text.secondary" sx={{ mt: 1, display: "block" }}>
                  Our most recent weekend in June Lake!
              </Typography>
            </Box>
          </Grid>
        </Grid>
        </Box>
  
    </Container>
  );
}
