import * as React from "react";
import { Box, IconButton, Stack } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

export default function ImageSlider({ images = [], height = 380, autoMs = 5000 }) {
  const [idx, setIdx] = React.useState(0);
  const count = images.length || 1;

  const go = (n) => setIdx((p) => (p + n + count) % count);
  const goTo = (i) => setIdx(i);

  React.useEffect(() => {
    if (count <= 1) return;
    const t = setInterval(() => go(1), autoMs);
    return () => clearInterval(t);
  }, [count, autoMs]);

  // simple drag/swipe
  const start = React.useRef(null);
  const onDown = (e) => { start.current = e.touches?.[0]?.clientX ?? e.clientX; };
  const onUp = (e) => {
    const end = e.changedTouches?.[0]?.clientX ?? e.clientX;
    if (start.current == null) return;
    const dx = end - start.current;
    if (dx > 40) go(-1);
    if (dx < -40) go(1);
    start.current = null;
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <Box
        onMouseDown={onDown} onMouseUp={onUp}
        onTouchStart={onDown} onTouchEnd={onUp}
        sx={{
          width: "80%",
          height: { xs: 260, md: height },
          bgcolor: "secondary.main",           // sage box like your mock
          borderRadius: 4,
          position: "relative",
          overflow: "hidden",
          boxShadow: 2,
        }}
      >
        {images.map((src, i) => (
          <Box
            key={src + i}
            component="img"
            src={src}
            alt={`slide-${i}`}
            sx={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              opacity: i === idx ? 1 : 0,
              transition: "opacity .5s ease",
            }}
          />
        ))}

        {/* arrows (desktop) */}
        {count > 1 && (
          <>
            <IconButton
              onClick={() => go(-1)}
              sx={{ position: "absolute", top: "50%", left: 8, transform: "translateY(-50%)", bgcolor: "rgba(255,255,255,.6)" }}
              aria-label="Previous"
            >
              <ChevronLeftIcon />
            </IconButton>
            <IconButton
              onClick={() => go(1)}
              sx={{ position: "absolute", top: "50%", right: 8, transform: "translateY(-50%)", bgcolor: "rgba(255,255,255,.6)" }}
              aria-label="Next"
            >
              <ChevronRightIcon />
            </IconButton>
          </>
        )}
      </Box>

      {/* dots */}
      {count > 1 && (
        <Stack direction="row" spacing={1} sx={{ mt: 2 }}>
          {images.map((_, i) => (
            <Box
              key={i}
              onClick={() => goTo(i)}
              sx={{
                width: 10,
                height: 10,
                borderRadius: "50%",
                bgcolor: i === idx ? "primary.main" : "rgba(0,0,0,.25)",
                cursor: "pointer",
              }}
            />
          ))}
        </Stack>
      )}
    </Box>
  );
}