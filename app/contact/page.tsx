import CoverSection from "../../ui/common/Cover";

export default function ContactPage() {
  return (
    <>
      <CoverSection headingText="Contact Us" span="Contact Us" />

      <section className="info">
        <div className="content">
          <i className="fa-solid fa-location"></i>
          <p>
            No 30 Ebis Mechanic Road, Opposite Sonia Estate, Amarata, Yenagoa,
            Bayelsa State.
          </p>
        </div>

        <div className="content">
          <i className="fa-solid fa-phone"></i>
          <p>+234 (0) 7025424338</p>
        </div>

        <div className="content">
          <i className="fa-solid fa-envelope"></i>
          <p>info@boungbai.com</p>
        </div>
      </section>
    </>
  );
}
