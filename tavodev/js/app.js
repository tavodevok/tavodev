  
const btnHamburger = document.querySelector("#btnHamburger");
const navigation = document.querySelector(".navigation");
const menu = document.querySelector(".menu");
const body = document.querySelector("body");

btnHamburger.addEventListener("click", function(){
  if(navigation.classList.contains("open")){ // Close Hamburger Menu
    body.classList.remove("noscroll"); 
    navigation.classList.remove("open");  
    menu.classList.remove("show");  
 }

  else { // Open Hamburger Menu
    body.classList.add("noscroll"); 
    navigation.classList.add("open");
    menu.classList.add("show"); 
}  
});

document.addEventListener('click', (e) => {
  if(e.target.matches('.menu a')){
    body.classList.remove('noscroll');
    navigation.classList.remove('open');
    menu.classList.remove('show');
    buttonTop.classList.remove('shows');
  }
}
);

/*-------------BUTTON UP---------------*/
let d = document;
window.onscroll = function(){
  if(d.documentElement.scrollTop > 100){
    d.querySelector('.go-top-container').classList.remove('show-btop');
  } else {
    d.querySelector('.go-top-container').classList.add('show-btop');
  }
}
d.querySelector('.go-top-container').addEventListener('click', () => {
  window.scrollTo({
    top:0,
    behavior: 'smooth'
  });
});