import offers from "../data/offers.json";
import OfferList from "../components/OfferList.jsx"
import "../styles/home.css"


export default function Home() {
  return (
   <div className="container">
    <header>
       <img src="./Mocktalk-logo-removebg-preview.png" alt="logo non trouvé"/>
       <span>

       <h1>FinPuse</h1>
       <h4>Financial Analyzer</h4>
       </span>


    </header>
        <OfferList offers={offers} />
       
       
     </div>
  );
}
