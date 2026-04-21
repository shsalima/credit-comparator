import offers from "../data/offers.json";
import OfferList from "../components/OfferList.jsx"
import "../styles/home.css"


export default function Home() {
  return (
   <div className="container">
    <header>
       <img src=""/>
       <h1>jsdkzledze</h1>


    </header>
      <div className="list">
        <OfferList offers={offers} />
       
     </div>
     </div>
  );
}
