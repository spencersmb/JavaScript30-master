const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
const cities = [];

fetch(endpoint)
    .then(response => response.json())
    .then(data => {cities.push(...data)}); //use spread operator to just push items into the array as u get them

function findMatches (wordToMatch, cities) {

  return cities.filter((location)=>{

    const regex = new RegExp(wordToMatch, 'gi'); //g means global or entire string, i means case insensitive
    return location.city.match(regex) || location.state.match(regex);
  })

}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
function displayMatches (){
  const matchArray = findMatches(this.value, cities);

  const html = matchArray.map(location => {
    //create highlighted span on the word
    const regex = new RegExp(this.value, 'gi');
    const cityName = location.city.replace(regex, `<span class="hl">${this.value}</span>`);
    const stateName = location.state.replace(regex, `<span class="hl">${this.value}</span>`);
    const population = numberWithCommas(location.population);

    return `
      <li>
        <span class="name">${cityName}, ${stateName}</span>
        <span class="population">${population}</span>
      </li>
    `;
  }).join(''); //adding join at the end converts it from an array using map, to one long string

  suggestions.innerHTML = html;
}

const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);