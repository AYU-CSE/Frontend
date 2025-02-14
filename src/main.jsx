import { createRoot } from "react-dom/client";
import GuideLine from "./components/GuideLine";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <GuideLine />
  </BrowserRouter>
);
