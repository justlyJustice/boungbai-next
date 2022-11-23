const BrandDetail = ({ description, title, setShowModal }) => {
  return (
    <div className=" brand-detail-wrapper">
      <h2 className="brand-detail-title">WHOBEWHO IN I.C.T.</h2>

      <p className="brand-detail-content">{description}</p>

      <button onClick={() => setShowModal(true)}>Read More</button>
    </div>
  );
};

export default BrandDetail;
