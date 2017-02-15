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
var form=contactUsPopup.querySelector("form");
var formName=contactUsPopup.querySelector("input[name=name]");
var formEmail=contactUsPopup.querySelector("input[name=email]");
var formMessage=contactUsPopup.querySelector("[name=message]");

contactUs.addEventListener ("click", function(event) {
  event.preventDefault();
  contactUsPopup.classList.add("information-popup-show");
  formName.focus();
});
closeInformation.addEventListener ("click", function(event) {
  event.preventDefault();
  contactUsPopup.classList.remove("information-popup-show");
});
form.addEventListener ("submit", function(event){
  if (!formEmail.value || !formMessage.value || !formEmail.value) {
    event.preventDefault();
    alert("Заполните все поля");
  };
});


window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
  if (contactUsPopup.classList.contains("information-popup-show")){
    contactUsPopup.classList.remove("information-popup-show");
  }  else if (cartPopup.classList.contains("cart-popup-show")) {
      cartPopup.classList.remove("cart-popup-show");
    } else if (mapPopup.classList.contains("map-popup-show")) {
      mapPopup.classList.remove("map-popup-show")
    };
  };
});
