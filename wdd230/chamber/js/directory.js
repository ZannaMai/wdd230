const requestURL = 'https://zannamai.github.io/wdd230/wdd230/chamber/data/data.json';
let companies = null;

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    companies = jsonObject['companies'];
    companies.forEach(displayCompanies);
  });
    function displayCompanies(companies) {
    
    let card = document.createElement('section');
    let imageurl = document.createElement('img');
    let name = document.createElement('h2');
    let address = document.createElement('span');
    let phonenumber = document.createElement('span');
    let website = document.createElement('a');
    
  
    name.textContent = companies.name;
    address.textContent = companies.address;
    phonenumber.textContent = companies.phonenumber;
    website.textContent = companies.website;
  
    imageurl.setAttribute('src', companies.imageurl);
    imageurl.setAttribute('alt', `Image of ${companies.name}'s logo`);
    imageurl.setAttribute('loading', 'lazy');
  
    
    card.appendChild(imageurl);
    card.appendChild(name);
    card.appendChild(address);
    card.appendChild(phonenumber);
    card.appendChild(website);
   
  
    document.getElementById('cards').appendChild(card);

}
function toogleView() {
    document.getElementById('gridBtn').classList.toggle('active')
    document.getElementById('cards').classList.toggle('active')
}
function toogleView() {
    document.getElementById('listBtn').classList.toggle('active')
    document.getElementById('cards').classList.toggle('active')
}