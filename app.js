//Apparition des éléments
const sr = ScrollReveal();
sr.reveal('h1', {
    origin: 'right',
    distance: '-450px',
    duration: 2000,
    delay: 1000
});
sr.reveal('.dev-paragraph', {
    origin: 'left',
    distance: '-450px',
    duration: 2000,
    delay: 1000
});
sr.reveal('.section-two', {
    distance:'150px',
    duration: 1000,
    delay: 2500
});

const ratio = .1
const options = {
  root: null,
  rootMargin: '0px',
  threshold: ratio
}
const handleIntersect = function (entries, observer) {
    entries.forEach(function (entry){
      if (entry.intersectionRatio > ratio) {
        entry.target.classList.add('reveal-visible')
        observer.unobserve(entry.target)
      } 
    })
  }
  
  const observer = new IntersectionObserver(handleIntersect, options)
  observer.observe(document.querySelector('.reveal'));

  //Animation icone menu
  let menu = document.getElementById("menu");

  menu.onclick = function(){
  menu.classList.toggle("openmenu");
}

//Ouverture / Fermeture du Menu
let menuList = document.getElementById("menuList");
menuList.style.maxHeight = "0px";

function toggleMenu(){
  if(menuList.style.maxHeight == "0px")
  {
    menuList.style.maxHeight = "300px";
  }
  else{
    menuList.style.maxHeight = "0px";
  }
}


