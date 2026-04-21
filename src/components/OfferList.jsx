import OfferCard from "../components/OfferCard.jsx";

export default function OfferList({ offers }) {
  return (
    <div>
      <h1>offer list</h1>

   
      {offers.map((offer) => {
        return <OfferCard key={offer.id} offer={offer}  />;
      })}
    </div>
  );
}
