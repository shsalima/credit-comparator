import OfferCard from "../components/OfferCard.jsx";
import "../styles/card.css";

export default function OfferList({ offers }) {
 
  return (
    <div className="carrt-list">
      <h2 className="title-list">Available Credit Offers</h2>

      <div className="cards-container">
        {offers.map((offer) => (
          <OfferCard key={offer.id} offer={offer} />
        ))}
      </div>
    </div>
  );
}