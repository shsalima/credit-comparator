import "../styles/card.css";

const toggleCrad = (offerId) => {
  const offerDetails = document.getElementById(String(offerId));
  if (!offerDetails) {
    console.error("offer not found");
    return;
  }
  //   console.log(offerDetails);

  offerDetails.classList.toggle("detail-card-expanded");
};

export default function OfferCard({ offer }) {
  return (
    <div
      style={{ borderColor: offer.isRecommended && "green" }}
      className="card"
      onClick={() => toggleCrad(offer.id)}
    >
      <span className="logo-cart">
        <img src={offer.image} alt="image de cart" />
        <h2>{offer.provider}</h2>
      {offer.isRecommended == true ? (
        <img id="recommended" src="./customer-review.png" />
      ) : null}
      </span>

      <div className="info">
        <div className="montant-taux-div">
          <h3>{offer.montant}$</h3>
          <h6>PINCIPAL</h6>
        </div>
        <div className="montant-taux-div">
          <h3 className="taux-cart">{offer.taux}%</h3>
          <h6>ANNULER RATE</h6>
        </div>
      </div>
      <div className="detail-card" id={offer.id}>
        <div className="div-detail">
          <p>MONTHLY INISTALLMENT</p>
          <h5> {offer.mensualite}$</h5>
         
        </div>

        <div className="div-detail">
          <p>TOTAL REPAYMENT</p>
          <h5 className="total-color"> {offer.cout_total}$</h5>
        </div>

        <div className="div-detail">
          <p>DUREE</p>
          <h5> {offer.duree}</h5>
        </div>
      </div>
    </div>
  );
}
