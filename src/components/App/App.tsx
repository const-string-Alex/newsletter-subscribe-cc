import ReactDOM from "react-dom/client";
import "./app.css";

import Graphic from "../Graphic/Graphic";
import Information from "../Information/Information";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <Graphic />
    <Information />
  </>
);
