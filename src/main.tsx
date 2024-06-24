import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import ThemeProvider from "./config/theme/ThemeProvider.tsx";
import { RouterProvider } from "react-router-dom";
import { ROUTES } from "./config/router/router.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={ROUTES} />
    </ThemeProvider>
  </React.StrictMode>
);
