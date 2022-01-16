document.addEventListener("DOMContentLoaded", function() { 
    const yrSpan = document.querySelector('#year');
    const currentYr = new Date().getFullYear();
    yrSpan.textContent = currentYr;
  });
  let lastVisit = document.lastModified;
  document.getElementById("updated").textContent = "Last Updated:" + lastVisit;