import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@fontsource-variable/fraunces";
import "@fontsource-variable/inter";

import App from "./App";

// Legacy hash links (#/photos, #/travel-and-stay#accommodations) predate the switch to
// clean paths. Rewrite them before the router mounts so shared links keep working.
if (window.location.hash.startsWith("#/")) {
  const withoutHash = window.location.hash.slice(1);
  const anchorIndex = withoutHash.indexOf("#");
  const path = anchorIndex === -1 ? withoutHash : withoutHash.slice(0, anchorIndex);
  const anchor = anchorIndex === -1 ? "" : withoutHash.slice(anchorIndex);
  window.history.replaceState(null, "", `${path}${window.location.search}${anchor}`);
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
