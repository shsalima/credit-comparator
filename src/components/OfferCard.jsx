


export default function OfferCard({ offer }) {
  return (
    <div className="card">
      <h2>{offer.provider}</h2>

      <div className="info">
        <h3>{offer.montant}£</h3>
        <h3>{offer.taux}%</h3>
      </div>
      <a  className="arrow">→ </a>
    </div>
  );
}