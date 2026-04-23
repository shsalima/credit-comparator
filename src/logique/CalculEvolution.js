export function CalculEvolution(capital,taux,duree) {
  let result= [];
  let cuurentcapital = capital;
  for (let i = 1; i < duree; i++) {
    let interet= cuurentcapital * (taux / 100);
    cuurentcapital += interet;
    result.push({
        annee: i,
        interets: interet.toFixed(2),
        total: cuurentcapital.toFixed(2)
    })
    // Calculate evolution for each period
  }
  return result;
}