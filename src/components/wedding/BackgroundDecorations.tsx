import { Box } from "@mui/material";

/**
 * BackgroundDecorations component for Wedding Details page
 * Summer hiking/national park mountain theme with topographic lines and natural elements
 */
export default function BackgroundDecorations() {
  return (
    <>
      {/* Topographic contour lines - upper left */}
      <Box
        component="svg"
        viewBox="0 0 400 400"
        sx={{
          position: "absolute",
          top: "5%",
          left: "-5%",
          width: "35%",
          height: "auto",
          opacity: 0.12,
          pointerEvents: "none",
          zIndex: 0,
        }}
      >
        <path
          d="M 50 150 Q 100 140, 150 150 T 250 150 T 350 150"
          fill="none"
          stroke="#2C3B32"
          strokeWidth="2"
        />
        <path
          d="M 50 180 Q 100 170, 150 180 T 250 180 T 350 180"
          fill="none"
          stroke="#2C3B32"
          strokeWidth="2"
        />
        <path
          d="M 50 210 Q 100 200, 150 210 T 250 210 T 350 210"
          fill="none"
          stroke="#2C3B32"
          strokeWidth="2"
        />
        <path
          d="M 50 240 Q 100 230, 150 240 T 250 240 T 350 240"
          fill="none"
          stroke="#2C3B32"
          strokeWidth="2"
        />
      </Box>

      {/* Topographic contour lines - lower right */}
      <Box
        component="svg"
        viewBox="0 0 400 400"
        sx={{
          position: "absolute",
          bottom: "10%",
          right: "-5%",
          width: "40%",
          height: "auto",
          opacity: 0.12,
          pointerEvents: "none",
          zIndex: 0,
        }}
      >
        <path
          d="M 50 100 Q 100 90, 150 100 T 250 100 T 350 100"
          fill="none"
          stroke="#2C3B32"
          strokeWidth="2"
        />
        <path
          d="M 50 130 Q 100 120, 150 130 T 250 130 T 350 130"
          fill="none"
          stroke="#2C3B32"
          strokeWidth="2"
        />
        <path
          d="M 50 160 Q 100 150, 150 160 T 250 160 T 350 160"
          fill="none"
          stroke="#2C3B32"
          strokeWidth="2"
        />
        <path
          d="M 50 190 Q 100 180, 150 190 T 250 190 T 350 190"
          fill="none"
          stroke="#2C3B32"
          strokeWidth="2"
        />
        <path
          d="M 50 220 Q 100 210, 150 220 T 250 220 T 350 220"
          fill="none"
          stroke="#2C3B32"
          strokeWidth="2"
        />
      </Box>

      {/* Mountain silhouette - middle left */}
      <Box
        component="svg"
        viewBox="0 0 300 200"
        sx={{
          position: "absolute",
          top: "40%",
          left: "-3%",
          width: "25%",
          height: "auto",
          opacity: 0.08,
          pointerEvents: "none",
          zIndex: 0,
        }}
      >
        <path
          d="M 0 200 L 80 100 L 120 130 L 180 60 L 220 100 L 300 200 Z"
          fill="#2C3B32"
        />
      </Box>

      {/* Pine tree silhouettes - right side */}
      <Box
        component="svg"
        viewBox="0 0 100 150"
        sx={{
          position: "absolute",
          top: "25%",
          right: "5%",
          width: "8%",
          height: "auto",
          opacity: 0.09,
          pointerEvents: "none",
          zIndex: 0,
        }}
      >
        <path
          d="M 50 10 L 30 50 L 35 50 L 20 80 L 25 80 L 15 110 L 45 110 L 45 140 L 55 140 L 55 110 L 85 110 L 75 80 L 80 80 L 65 50 L 70 50 Z"
          fill="#2C3B32"
        />
      </Box>

      {/* Hiking trail marker - subtle dotted path */}
      <Box
        component="svg"
        viewBox="0 0 500 400"
        sx={{
          position: "absolute",
          top: "15%",
          right: "15%",
          width: "30%",
          height: "auto",
          opacity: 0.07,
          pointerEvents: "none",
          zIndex: 0,
        }}
      >
        <path
          d="M 50 50 Q 150 100, 250 120 T 450 180"
          fill="none"
          stroke="#2C3B32"
          strokeWidth="3"
          strokeDasharray="8 12"
        />
      </Box>

      {/* Mountain Range Silhouette - Top */}
      <Box
        component="svg"
        viewBox="0 0 1400 300"
        preserveAspectRatio="xMidYMid slice"
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "300px",
          opacity: 0.08,
          pointerEvents: "none",
          zIndex: 0,
        }}
      >
        {/* Far mountains */}
        <path
          d="M 0 200 L 200 120 L 350 160 L 500 100 L 650 140 L 800 110 L 1000 150 L 1200 90 L 1400 130 L 1400 300 L 0 300 Z"
          fill="#2C3B32"
          opacity="0.3"
        />
        {/* Mid mountains */}
        <path
          d="M 0 240 L 150 180 L 300 210 L 500 160 L 700 200 L 900 170 L 1100 190 L 1300 150 L 1400 180 L 1400 300 L 0 300 Z"
          fill="#2C3B32"
          opacity="0.5"
        />
        {/* Near mountains */}
        <path
          d="M 0 270 L 250 220 L 450 240 L 650 200 L 850 230 L 1050 210 L 1250 225 L 1400 210 L 1400 300 L 0 300 Z"
          fill="#2C3B32"
          opacity="0.7"
        />
      </Box>

      {/* Sun/Sunrise - Top Right */}
      <Box
        component="svg"
        viewBox="0 0 200 200"
        sx={{
          position: "absolute",
          top: "8%",
          right: "10%",
          width: "150px",
          height: "150px",
          opacity: 0.05,
          pointerEvents: "none",
          zIndex: 0,
        }}
      >
        <circle cx="100" cy="100" r="50" fill="#E5B76B"/>
        <line x1="100" y1="20" x2="100" y2="50" stroke="#E5B76B" strokeWidth="3"/>
        <line x1="100" y1="150" x2="100" y2="180" stroke="#E5B76B" strokeWidth="3"/>
        <line x1="20" y1="100" x2="50" y2="100" stroke="#E5B76B" strokeWidth="3"/>
        <line x1="150" y1="100" x2="180" y2="100" stroke="#E5B76B" strokeWidth="3"/>
        <line x1="35" y1="35" x2="60" y2="60" stroke="#E5B76B" strokeWidth="3"/>
        <line x1="140" y1="140" x2="165" y2="165" stroke="#E5B76B" strokeWidth="3"/>
        <line x1="165" y1="35" x2="140" y2="60" stroke="#E5B76B" strokeWidth="3"/>
        <line x1="60" y1="140" x2="35" y2="165" stroke="#E5B76B" strokeWidth="3"/>
      </Box>

      {/* Tent Illustration - Mid Left */}
      <Box
        component="svg"
        viewBox="0 0 200 150"
        sx={{
          position: "absolute",
          top: "30%",
          left: "5%",
          width: "200px",
          height: "auto",
          opacity: 0.08,
          pointerEvents: "none",
          zIndex: 0,
        }}
      >
        {/* Main tent body */}
        <path d="M 40 130 L 100 20 L 160 130 Z" fill="#2C3B32"/>
        {/* Tent entrance flap */}
        <path d="M 80 130 L 100 70 L 120 130 Z" fill="#2C3B32" opacity="0.5"/>
        {/* Flag pole */}
        <line x1="100" y1="20" x2="100" y2="5" stroke="#2C3B32" strokeWidth="2"/>
        {/* Flag */}
        <path d="M 100 5 L 125 10 L 100 15 Z" fill="#E5B76B"/>
        {/* Ground */}
        <line x1="20" y1="130" x2="180" y2="130" stroke="#2C3B32" strokeWidth="2"/>
      </Box>

      {/* Backpack Illustration - Mid Right */}
      <Box
        component="svg"
        viewBox="0 0 120 150"
        sx={{
          position: "absolute",
          top: "50%",
          right: "8%",
          width: "120px",
          height: "auto",
          opacity: 0.08,
          pointerEvents: "none",
          zIndex: 0,
        }}
      >
        {/* Main pack body */}
        <rect x="30" y="40" width="60" height="80" rx="8" fill="#2C3B32"/>
        {/* Top flap */}
        <rect x="35" y="25" width="50" height="20" rx="4" fill="#2C3B32" opacity="0.8"/>
        {/* Straps */}
        <path d="M 40 40 Q 20 60, 25 90" stroke="#2C3B32" strokeWidth="6" fill="none" opacity="0.6"/>
        <path d="M 80 40 Q 100 60, 95 90" stroke="#2C3B32" strokeWidth="6" fill="none" opacity="0.6"/>
        {/* Front pocket */}
        <rect x="45" y="60" width="30" height="35" rx="4" fill="#2C3B32" opacity="0.5"/>
        {/* Buckle details */}
        <rect x="50" y="30" width="20" height="6" rx="2" fill="#E5B76B"/>
      </Box>

      {/* Pine Tree Cluster - Bottom Right */}
      <Box
        component="svg"
        viewBox="0 0 180 200"
        sx={{
          position: "absolute",
          bottom: "15%",
          right: "12%",
          width: "150px",
          height: "auto",
          opacity: 0.07,
          pointerEvents: "none",
          zIndex: 0,
        }}
      >
        {/* Tree 1 - Largest */}
        <path d="M 90 30 L 70 80 L 75 80 L 60 120 L 67 120 L 55 160 L 85 160 L 85 190 L 95 190 L 95 160 L 125 160 L 113 120 L 120 120 L 105 80 L 110 80 Z" fill="#2C3B32"/>
        {/* Tree 2 - Medium Left */}
        <path d="M 40 80 L 28 115 L 32 115 L 22 145 L 27 145 L 20 170 L 42 170 L 42 190 L 48 190 L 48 170 L 70 170 L 63 145 L 68 145 L 58 115 L 62 115 Z" fill="#2C3B32" opacity="0.8"/>
        {/* Tree 3 - Small Right */}
        <path d="M 140 100 L 130 130 L 133 130 L 125 155 L 128 155 L 122 175 L 140 175 L 140 190 L 145 190 L 145 175 L 163 175 L 157 155 L 160 155 L 152 130 L 155 130 Z" fill="#2C3B32" opacity="0.7"/>
      </Box>

      {/* Campfire - Small detail */}
      <Box
        component="svg"
        viewBox="0 0 100 100"
        sx={{
          position: "absolute",
          bottom: "35%",
          left: "15%",
          width: "80px",
          height: "auto",
          opacity: 0.06,
          pointerEvents: "none",
          zIndex: 0,
        }}
      >
        {/* Flames */}
        <path d="M 50 20 Q 40 40, 45 60 L 55 60 Q 60 40, 50 20 Z" fill="#E5B76B"/>
        <path d="M 55 30 Q 65 45, 60 60 L 65 60 Q 70 45, 55 30 Z" fill="#E5B76B" opacity="0.7"/>
        <path d="M 45 30 Q 35 45, 40 60 L 35 60 Q 30 45, 45 30 Z" fill="#E5B76B" opacity="0.7"/>
        {/* Logs */}
        <rect x="30" y="65" width="40" height="5" rx="2" fill="#2C3B32"/>
        <rect x="25" y="72" width="50" height="5" rx="2" fill="#2C3B32" opacity="0.8"/>
        <rect x="35" y="79" width="30" height="5" rx="2" fill="#2C3B32" opacity="0.6"/>
      </Box>

      {/* Additional Pine Tree - Top Right */}
      <Box
        component="svg"
        viewBox="0 0 100 150"
        sx={{
          position: "absolute",
          top: "20%",
          right: "25%",
          width: "100px",
          height: "auto",
          opacity: 0.06,
          pointerEvents: "none",
          zIndex: 0,
        }}
      >
        <path d="M 50 10 L 35 45 L 40 45 L 28 70 L 33 70 L 23 100 L 47 100 L 47 130 L 53 130 L 53 100 L 77 100 L 67 70 L 72 70 L 60 45 L 65 45 Z" fill="#2C3B32"/>
      </Box>

      {/* Compass Rose */}
      <Box
        component="svg"
        viewBox="0 0 100 100"
        sx={{
          position: "absolute",
          bottom: "20%",
          left: "8%",
          width: "120px",
          height: "120px",
          opacity: 0.06,
          pointerEvents: "none",
          zIndex: 0,
        }}
      >
        <circle cx="50" cy="50" r="45" fill="none" stroke="#2C3B32" strokeWidth="2"/>
        <path d="M 50 5 L 55 45 L 50 50 L 45 45 Z" fill="#2C3B32"/>
        <path d="M 50 95 L 45 55 L 50 50 L 55 55 Z" fill="#2C3B32"/>
        <path d="M 5 50 L 45 45 L 50 50 L 45 55 Z" fill="#2C3B32"/>
        <path d="M 95 50 L 55 55 L 50 50 L 55 45 Z" fill="#2C3B32"/>
        <text x="50" y="15" textAnchor="middle" fontSize="12" fill="#2C3B32">N</text>
      </Box>

      {/* Subtle texture overlay */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background:
            "radial-gradient(circle at 20% 30%, rgba(229, 183, 107, 0.03) 0%, transparent 50%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
    </>
  );
}
