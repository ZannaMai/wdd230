document.addEventListener("DOMContentLoaded", function() { 
    const yrSpan = document.querySelector('#date');
    const currentYr = new Date().getFullYear();
    yrSpan.textContent = currentYr;
  });