let olympicsMedalTable = [
  {
    id: 1,
    country: "BRASIL",
    gold: 7,
    silver: 6,
    bronze: 6,
    continent: "AMERICA DO SUL",
  },
  {
    id: 2,
    country: "USA",
    gold: 46,
    silver: 37,
    bronze: 17,
    continent: "AMERICA DO NORTE",
  },
  {
    id: 3,
    country: "CHINA",
    gold: 26,
    silver: 18,
    bronze: 26,
    continent: "ASIA",
  },
  {
    id: 4,
    country: "RUSSIA",
    gold: 19,
    silver: 18,
    bronze: 19,
    continent: "EUROPA",
  },
  {
    id: 5,
    country: "REINO UNIDO",
    gold: 27,
    silver: 23,
    bronze: 17,
    continent: "EUROPA",
  },
  {
    id: 6,
    country: "ALEMANHA",
    gold: 17,
    silver: 10,
    bronze: 15,
    continent: "EUROPA",
  },
  {
    id: 7,
    country: "JAPÃO",
    gold: 12,
    silver: 8,
    bronze: 21,
    continent: "ASIA",
  },
  {
    id: 8,
    country: "ARGENTINA",
    gold: 3,
    silver: 1,
    bronze: 0,
    continent: "AMERICA DO SUL",
  },
  {
    id: 9,
    country: "ITALIA",
    gold: 8,
    silver: 12,
    bronze: 8,
    continent: "EUROPA",
  },
  {
    id: 10,
    country: "QUÊNIA",
    gold: 6,
    silver: 6,
    bronze: 1,
    continent: "AFRICA",
  },
];

// 1 - Crie um algoritmo que encontre o único pais do continente Africano
// const paisAfricano =  <seu código aqui>;
// console.log(paisAfricano);

const paisAfricano = olympicsMedalTable.find(
  (country) => country.continent === "AFRICA"
);
console.log(paisAfricano);

// 2 - Crie um algoritmo que retorne o total de medalhas por país
// const medalhasPorPais =  <seu código aqui>;
// console.log(medalhasPorPais);

const medalhasPorPais = olympicsMedalTable.map((country) => {
  const somaMedalhas = country.gold + country.silver + country.bronze;
  return country.country + " " + somaMedalhas;
});

console.log(medalhasPorPais);

const medalhasPorPais = olympicsMedalTable.reduce;

// 3 - Crie um algoritmo para encontrar os países que conquistaram mais que 10 medalhas de ouro
// const paisesCom10MedalhasOuroNoMinimo =  <seu código aqui>;
// console.log(paisesCom10MedalhasOuroNoMinimo);

const paisesCom10MedalhasOuroNoMinimo = olympicsMedalTable.filter(
  (country) => country.gold > 10
);

console.log(paisesCom10MedalhasOuroNoMinimo);

// 4 - Crie um algoritmo para encontrar os países que conquistaram no minímo 30 medalhas (Ouro, Prata e Bronze)
// const paisesCom30MedalhasNoMinimo =  <seu código aqui>;
// console.log(paisesCom30MedalhasNoMinimo);

const paisesCom30MedalhasNoMinimo = olympicsMedalTable.map((country) => {
  const somaMedalhas = country.gold + country.silver + country.bronze;
  if (somaMedalhas >= 30) {
    return country.country;
  }
});
console.log(paisesCom30MedalhasNoMinimo);

// 5 - Crie um algoritmo para verificar se o continente América do Sul conquistou pelo menos 20 medalhas de ouro
// const paisesComPeloMenos20MedalhasDeOUro =  <seu código aqui>;
// console.log(paisesComPeloMenos20MedalhasDeOUro);

const paisesComPeloMenos20MedalhasDeOUro = olympicsMedalTable
  .filter((country) => country.continent === "AMERICA DO SUL")
  .reduce((acc, val) => acc.gold + val.gold >= 20);

console.log(paisesComPeloMenos20MedalhasDeOUro);
