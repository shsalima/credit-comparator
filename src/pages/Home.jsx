import offers from "../data/offers.json";
import OfferList from "../components/OfferList.jsx"


export default function Home() {
  return (
   <div className="container">
      <div className="list">
        <OfferList offers={offers} />
       
     </div>
     </div>
  );
}
