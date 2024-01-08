import "./information.css";

function Information() {
  return (
    <section className="info">
      <h2 className="info-title">Stay updated!</h2>
      <p className="info-list-header">
        Join 60,000+ product managers receiving monthly updates on:
      </p>
      <ul className="info-list">
        <li className="info-list-item">
          <i className="fa-solid fa-circle-check checkmark"></i> Product
          discovery and building what matters
        </li>
        <li className="info-list-item">
          <i className="fa-solid fa-circle-check checkmark"></i> Measuring to
          ensure updates are a success
        </li>
        <li className="info-list-item">
          <i className="fa-solid fa-circle-check checkmark"></i> And much more!
        </li>
      </ul>
    </section>
  );
}

export default Information;
