const requestURL = "https://zannamai.github.io/wdd230/chamber/data/data.json";
const cards = document.querySelector('.cards');
 
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const companies = jsonObject['companies'];
    companies.forEach(displayCompanies);
  });
 
  function displayCompanies(company) {
    // create elements to add to the document
    let card = document.createElement("section");
    let h2 = document.createElement("h2")
    let portrait = document.createElement("img")
    let info = document.createElement("p")
// add the companies name to the h2 textcontent
    h2.textContent = company.name + " " + company.address;
    info.innerHTML = `Phone Number: ${company.phonenumber} <br> Website: ${company.website} `
    favicon.setAttribute('src', company.imageurl);
    favicon.setAttribute('alt', `${company.name} ${company.address}`);
    favicon.setAttribute('loading', 'lazy')
 
// appent to the section(card)
    card.appendChild(h2);
    card.appendChild(info)
    card.appendChild(favicon);
 
// add to existing HTML div
    cards.appendChild(card);  
}
