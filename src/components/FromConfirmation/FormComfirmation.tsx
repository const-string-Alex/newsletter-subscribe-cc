import "./form-confirmation.css";

function FormComfirmation() {
  function handleDismissClick() {
    window.location.href = "/";
  }

  return (
    <>
      <div className="confirmation">
        <i className="fa-solid fa-circle-check checkmark"></i>
        <h1 className="confirmation-title">Thanks for subscribing!</h1>
        <p className="confirmation-description">
          A confirmation email has been sent. Please open it and click the
          button inside to confirm your subscription
        </p>
      </div>
      <button className="dismiss-btn" onClick={handleDismissClick}>
        Dismiss message
      </button>
    </>
  );
}

export default FormComfirmation;
