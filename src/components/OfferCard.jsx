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
    <div className="card" onClick={() => toggleCrad(offer.id)}>
      <h2>{offer.provider}</h2>

      <div className="info">
        <h3>{offer.montant}£</h3>
        <h3>{offer.taux}%</h3>
      </div>
      <div className="detail-card" id={offer.id}>
        <p>Durée: {offer.duree}</p>
        <p>Mensualité: {offer.mensualite}</p>
        <p>Total: {offer.cout_total}</p>
      </div>
    </div>
  );
}
