import "../styles/tableCaital.css";

export default function EvolutionCapital({data}) {
    return(
        <div className="table-capital">
            <thead>
                <tr>
                    <th>Année</th>
                    <th>Intérets</th>
                    <th>Total</th>

                </tr>

            </thead>
            <tbody>
                {data.map((ele)=>(
                    <tr key={ele.annee}>
                        <td>{ele.annee}</td>
                        <td>{ele.interets}</td>
                        <td>{ele.total}</td>

                    </tr>
                ))

                }

            </tbody>

        </div>
    )
}