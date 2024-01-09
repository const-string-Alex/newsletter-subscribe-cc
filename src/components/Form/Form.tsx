import { type ChangeEvent, type FormEvent, useState } from "react";
import "./form.css";

type TFormData = {
  email: string;
};

function Form() {
  const [formData, setFormData] = useState<TFormData>({ email: "" });
  const [invalidEmail, setInvalidEmail] = useState<boolean>(false);

  function handleFormData(event: ChangeEvent<HTMLInputElement>) {
    event.preventDefault();

    const { name, value } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  }

  function isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  function handleFormSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (isValidEmail(formData.email)) {
      window.location.href = "/subscribed";
    } else {
      setInvalidEmail(true);
    }
  }

  return (
    <form onSubmit={handleFormSubmit} className="subscribe-form">
      <div className="label-container">
        <label htmlFor="email">Email address</label>
        {invalidEmail ? (
          <p className="invalid-email-label">Valid email required</p>
        ) : (
          ""
        )}
      </div>
      <input
        type="text"
        placeholder="email@company.com"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleFormData}
        className={invalidEmail ? "invalid-email" : "input-email"}
      />
      <button>Subscribe to monthly newsletter</button>
    </form>
  );
}

export default Form;
