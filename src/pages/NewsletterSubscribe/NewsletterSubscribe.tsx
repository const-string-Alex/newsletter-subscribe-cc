import "./newsletter-subscribe.css";

import Form from "../../components/Form/Form";
import Graphic from "../../components/Graphic/Graphic";
import Information from "../../components/Information/Information";

function NewsletterSubscribe() {
  return (
    <main className="newsletter-main">
      <Graphic />
      <div>
        <Information />
        <Form />
      </div>
    </main>
  );
}

export default NewsletterSubscribe;
