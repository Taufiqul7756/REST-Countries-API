fetch("https://restcountries.com/v3.1/all")
  .then((res) => res.json())
  .then((data) => displayCountries(data));

const displayCountries = (countries) => {
  const countriesDiv = document.getElementById("countries");
  for (let i = 0; i < countries.length; i++) {
    const country = countries[i];

    const countryDiv = document.createElement("div");
    const h3 = document.createElement("h3");
    h3.innerText = country.name;
    const p = document.createElement("p");
    p.innerText = country.capital;
    const region = document.createElement("p");
    region.innerText = country.region;

    countryDiv.appendChild(h3);
    countryDiv.appendChild(p);
    countryDiv.appendChild(region);

    countriesDiv.appendChild(countryDiv);

    console.log(country.name);
  }
};
