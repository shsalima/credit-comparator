import "../styles/tableCaital.css";

export default function EvolutionCapital({offer}) {
    let result=[]
    let accCapital=offer.montant
    for(let i=1;i<=offer.duree;i++){
        let interte=(accCapital*offer.taux)/100
        accCapital +=interte
        result.push({
            annee:i,
            intertes:interte.toFixed(2),
            total:accCapital.toFixed(2)
    
        })
    }
    
    return(
        <div className="table-capital">
            <table>

           
            <thead>
                <tr>
                    <th>Année</th>
                    <th>Intérets</th>
                    <th>Total</th>

                </tr>

            </thead>
            <tbody>
                {result.map((ele)=>(
                    <tr key={ele.annee}>
                        <td>{ele.annee}</td>
                        <td>{ele.intertes}</td>
                        <td>{ele.total}</td>

                    </tr>
                ))

                }

            </tbody>
             </table>

        </div>
    )
}