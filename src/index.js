import React from "react";
import { createRoot } from "react-dom/client";

import MainContent from "./js/MainContent";
import "./styles/index.css";

// ------------------------------------- Render Elements on browser -------------------------------------
// Select the root element from the DOM
const rootElement = document.querySelector("#root");

// Throw an error if the root element is not found
if (!rootElement) throw new Error("Failed to find the root h1");

// Create a root for rendering the React component
const root = createRoot(rootElement);

// Render the MainContent component inside the root element
root.render(<MainContent />);
