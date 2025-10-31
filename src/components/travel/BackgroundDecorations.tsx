// src/components/travel/BackgroundDecorations.tsx
import { Box } from "@mui/material";
import { colors } from "../../theme";

/**
 * Decorative background elements for the Travel & Stay page
 * Includes texture overlay, ski slope contour lines, and main ski run path
 */
export function BackgroundDecorations() {
  return (
    <>
      {/* Subtle texture overlay */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          opacity: 0.1,
          pointerEvents: "none",
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='3' /%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)' opacity='0.5' fill='%23ffffff'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
        }}
      />

      {/* Subtle ski slope contour lines */}
      <Box
        component="svg"
        sx={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
          opacity: 0.05,
        }}
      >
        <defs>
          <pattern
            id="skiSlopes"
            x="0"
            y="0"
            width="300"
            height="200"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 0 50 Q 50 60, 100 50 T 200 50 T 300 50"
              stroke={colors.forestPine}
              strokeWidth="2"
              fill="none"
            />
            <path
              d="M 20 80 Q 70 90, 120 80 T 220 80 T 320 80"
              stroke={colors.forestPine}
              strokeWidth="2"
              fill="none"
            />
            <path
              d="M 10 110 Q 60 120, 110 110 T 210 110 T 310 110"
              stroke={colors.forestPine}
              strokeWidth="2"
              fill="none"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#skiSlopes)" />
      </Box>

      {/* Main ski run path */}
      <Box
        component="svg"
        sx={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
          zIndex: 1,
        }}
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient
            id="runGradient"
            x1="0%"
            y1="0%"
            x2="0%"
            y2="100%"
          >
            <stop
              offset="0%"
              style={{
                stopColor: colors.forestPine,
                stopOpacity: 0.1,
              }}
            />
            <stop
              offset="50%"
              style={{
                stopColor: colors.skyMist,
                stopOpacity: 0.1,
              }}
            />
            <stop
              offset="100%"
              style={{
                stopColor: colors.dustyRose,
                stopOpacity: 0.1,
              }}
            />
          </linearGradient>
        </defs>

        {/* Wide ski run */}
        <path
          d="M 48% 8%
             Q 52% 15%, 48% 22%
             Q 44% 28%, 48% 35%
             Q 52% 42%, 48% 48%
             Q 45% 54%, 48% 60%
             Q 51% 66%, 48% 72%
             Q 46% 78%, 48% 84%
             L 48% 92%"
          stroke="none"
          strokeWidth="40"
          fill="url(#runGradient)"
          opacity="0.5"
        />

        {/* Edge markers */}
        <path
          d="M 46% 8%
             Q 50% 15%, 46% 22%
             Q 42% 28%, 46% 35%
             Q 50% 42%, 46% 48%
             Q 43% 54%, 46% 60%
             Q 49% 66%, 46% 72%
             Q 44% 78%, 46% 84%
             L 46% 92%"
          stroke={colors.goldenOchre}
          strokeWidth="2"
          fill="none"
          strokeDasharray="12,8"
          opacity="0.4"
        />

        <path
          d="M 54% 8%
             Q 58% 15%, 54% 22%
             Q 50% 28%, 54% 35%
             Q 58% 42%, 54% 48%
             Q 51% 54%, 54% 60%
             Q 57% 66%, 54% 72%
             Q 52% 78%, 54% 84%
             L 54% 92%"
          stroke={colors.goldenOchre}
          strokeWidth="2"
          fill="none"
          strokeDasharray="12,8"
          opacity="0.4"
        />

        {/* Trail markers */}
        <g>
          <circle
            cx="50%"
            cy="22%"
            r="6"
            fill={colors.forestPine}
            opacity="0.6"
          />
          <circle
            cx="50%"
            cy="35%"
            r="6"
            fill={colors.skyMist}
            opacity="0.6"
          />
          <circle cx="50%" cy="48%" r="6" fill={colors.skyMist} opacity="0.6" />
          <circle cx="50%" cy="60%" r="6" fill={colors.skyMist} opacity="0.6" />
          <circle
            cx="50%"
            cy="72%"
            r="6"
            fill={colors.deepCharcoal}
            opacity="0.6"
          />
        </g>
      </Box>
    </>
  );
}