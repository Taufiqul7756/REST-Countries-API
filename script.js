fetch("https://restcountries.com/v3.1/all")
  .then((res) => res.json())
  .then((data) => displayCountries(data)); //.slice(0, 5)

const displayCountries = (countries) => {
  const countriesDiv = document.getElementById("countries");
  for (let i = 0; i < countries.length; i++) {
    const country = countries[i];

    const countryDiv = document.createElement("div");
    const h3 = document.createElement("h3");
    // h3.innerText = `Name: ${country.name.common}`;
    // const p = document.createElement("p");
    // p.innerText = `capital: ${country.capital}`;
    // const region = document.createElement("p");
    // region.innerText = `Region: ${country.region}`;

    // countryDiv.appendChild(h3);
    // countryDiv.appendChild(p);
    // countryDiv.appendChild(region);

    countryDiv.className = "country";
    const countryInfo = `
    <h3 class ="countryName" > ${country.name.common}</h3>
    <p class="capitalName" > Capital: ${country.capital} </p>
    <p class="regionName" > Region: ${country.region} </p>
    <button onclick="displayCountry('${country.name.common}')">Details </button>
    `;

    countryDiv.innerHTML = countryInfo;

    countriesDiv.appendChild(countryDiv);
  }
};

const displayCountry = (name) => {
  const url = `https://restcountries.com/v3.1/name/${name}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => renderCountryInfo(data[0]));
};
const renderCountryInfo = (country) => {
  const countryDiv = document.getElementById("country-details");
  countryDiv.innerHTML = `
  <h1> ${country.name.common} </h1>
  <p> Population:  ${country.population} </p>
  <p> Area: ${country.area} </p>
  <img src="${country.flags.png}" >
  
  `;
  console.log(country);
};
