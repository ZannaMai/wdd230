// Headline JS

let start = -1;
let end = start + 1;
const headerClass = document.getElementById("etch");
let headline = ["Aaron's Lazy Placeholders"]


function headerPrint() {   
    setTimeout(function() {
        headerClass.innerHTML = headerClass.innerHTML + headline[0].slice(start,end);
        start++;
        end = start + 1;
        if (start < headline[0].length) {
            headerPrint();
        }
        if (end === headline[0].length + 1) {
            index = 1
        }
    }, 100);
  } 

headerPrint();

// Lazy loading

let imagesToLoad = document.querySelectorAll('img[data-src]');

const imageOptions = {
    threshold: 0,
    rootMargin: '0px 0px 50px 0px'
};

const loadImages = (image) => {
    image.setAttribute("src", image.getAttribute('data-src'));
    image.onload = () => {
        image.removeAttribute('data-src');
    };
};


if('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((items, observer) => {
      items.forEach((item) => {
        if(item.isIntersecting) {
          loadImages(item.target);
          observer.unobserve(item.target);
        }
      });
    }, imageOptions);


    imagesToLoad.forEach((img) => {
      observer.observe(img);
    });
  } else {
    imagesToLoad.forEach((img) => {
      loadImages(img);
    });
  }