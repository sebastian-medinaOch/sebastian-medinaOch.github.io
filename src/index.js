

import React from "react";
import { createRoot} from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "App";

// i18n initialization
import "./i18n";
import "./styles/brand.css";


import { VisionUIControllerProvider } from "context";

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);


root.render(<HashRouter>
  <VisionUIControllerProvider>
    <App />
  </VisionUIControllerProvider>
</HashRouter>)

