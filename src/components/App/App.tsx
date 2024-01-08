import ReactDOM from "react-dom/client";
import "./app.css";

import Graphic from "../Graphic/Graphic";
import Information from "../Information/Information";
import Form from "../Form/Form";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <Graphic />
    <Information />
    <Form />
  </>
);
