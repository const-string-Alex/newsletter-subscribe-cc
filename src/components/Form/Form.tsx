import { type ChangeEvent, type FormEvent, useState } from "react";
import "./form.css";

type TFormData = {
  email: string;
};

function Form() {
  const [formData, setFormData] = useState<TFormData>({ email: "" });

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

  function handleFormSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    window.location.href = "/subscribed";
  }

  return (
    <form onSubmit={handleFormSubmit} className="subscribe-form">
      <label htmlFor="email">Email address</label>
      <input
        type="text"
        placeholder="email@company.com"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleFormData}
      />
      <button>Subscribe to monthly newsletter</button>
    </form>
  );
}

export default Form;
