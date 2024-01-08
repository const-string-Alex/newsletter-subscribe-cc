import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./app.css";

import NewsletterSubscribe from "../../pages/NewsletterSubscribe/NewsletterSubscribe";
import Subscribed from "../../pages/Subscribed/Subscribed";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={NewsletterSubscribe} />
        <Route path="/subscribed" Component={Subscribed} />
      </Routes>
    </BrowserRouter>
  </>
);
