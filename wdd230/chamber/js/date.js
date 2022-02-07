document.addEventListener("DOMContentLoaded", function() { 
  const yrSpan = document.querySelector('#year');
  const currentYr = new Date().getFullYear();
  yrSpan.textContent = currentYr;
});
let lastVisit = document.lastModified;
document.getElementById("updated").textContent = "Last Updated:" + lastVisit;

let dateField = document.querySelector("#current-date");

let now = new Date();
let fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
	now);

dateField.innerHTML = String(fulldate);