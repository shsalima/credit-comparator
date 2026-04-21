import OfferCard from "../components/OfferCard.jsx";
import "../styles/card.css";

export default function OfferList({ offers }) {
  return (
    <div>
      <h1>offer list</h1>

      <div className="cards-container">
        {offers.map((offer) => (
          <OfferCard key={offer.id} offer={offer} />
        ))}
      </div>
    </div>
  );
}