var buy=document.querySelectorAll(".btn-buy");
var cartPopup=document.querySelector(".cart-popup");
var closeCart=cartPopup.querySelector(".popup-close");

for(i=0; i<buy.length; i++) {
    buy[i].addEventListener ("click", function(event){
    event.preventDefault();
    cartPopup.classList.add("cart-popup-show");
  });
};
closeCart.addEventListener("click", function(event) {
  event.preventDefault();
  cartPopup.classList.remove("cart-popup-show");
});

var map=document.querySelector(".information-map");
var mapPopup=document.querySelector(".map-popup");
var closeMap=mapPopup.querySelector(".popup-close");

map.addEventListener ("click", function(event) {
  event.preventDefault();
  mapPopup.classList.add("map-popup-show");
});
closeMap.addEventListener ("click", function(event) {
  event.preventDefault();
  mapPopup.classList.remove("map-popup-show");
});

var contactUs=document.querySelector(".btn-getlost");
var contactUsPopup=document.querySelector(".information-popup");
var closeInformation=contactUsPopup.querySelector(".popup-close");

contactUs.addEventListener ("click", function(event) {
  event.preventDefault();
  contactUsPopup.classList.add("information-popup-show");
});
closeInformation.addEventListener ("click", function(event) {
  event.preventDefault();
  contactUsPopup.classList.remove("information-popup-show");
});
