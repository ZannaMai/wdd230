const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
const cards = document.querySelector('.cards');

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const prophets = jsonObject['prophets'];
    prophets.forEach(displayProphets);
  });

  function displayProphets(prophet) {
    // create elements to add to the document
    let card = document.createElement("section");
    let h2 = document.createElement("h2")
    let portrait = document.createElement("img")
    let info = document.createElement("p")
// add the prophets name to the h2 textcontent
    h2.textContent = prophet.name + " " + prophet.lastname;
    info.innerHTML = `Date of Birth: ${prophet.birthdate} <br> Place of Birth: ${prophet.birthplace} `
    portrait.setAttribute('src', prophet.imageurl);
    portrait.setAttribute('alt', `Portait of ${prophet.name} ${prophet.lastname} - ${prophet.order}th Latter-day President`);
    portrait.setAttribute('loading', 'lazy')

// appent to the section(card)
    card.appendChild(h2);
    card.appendChild(info)
    card.appendChild(portrait);

// add to existing HTML div
    cards.appendChild(card);
    
}
