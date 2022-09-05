let btn = document.querySelector(".click");
let username = document.querySelector(".name");
let password = document.querySelector(".password");
let wrapperr = document.querySelector(".wrapper");
let masseg = document.querySelector(".message");
let masseg1 = document.querySelector(".message1");
let masseg2 = document.querySelector(".message2");
let falsee = "information false";
let lastUser = document.querySelector(".user-name");
let Dashword = document.querySelector(".Dashword");
btn.addEventListener("click", ()=>{
   if (username.value != "" && password.value != "") {
     Dashword.style.transform = 'translateY(-0%)';
     lastUser.innerHTML = username.value;
   }

   else{
   masseg.innerHTML = falsee +' '+ '';
   }

   if (username.value === '' && password.value === ''){
    username.style.border = "1px solid red";
    password.style.border = "1px solid red";
   }

   if (username.value != "" && password.value === "") {
     password.style.border = "1px solid red";
   }

   if (password.value != "" && username.value === "") {
    username.style.border = "1px solid red";
  }

});

let boom = document.querySelector(".boom");
let conten = document.querySelector(".content");
let profile = document.querySelector(".drop-profile");
boom.addEventListener("click", ()=>{
  profile.style.display = 'block';
  profile.style.display = 'flex';
  profile.style.justifyContent = 'space-around';
  profile.style.alignItems = 'center';
  profile.style.flexDirection = 'column';
  conten.style.display = 'none';
});




let boom1 = document.querySelector(".boom2");
let pr = document.querySelector(".your-profile");
let closee = document.querySelector(".closee");

boom1.addEventListener("click", ()=>{
  pr.style.transform = 'translateX(0px)';
  conten.style.display = 'none';
});

closee.addEventListener("click", ()=>{
  pr.style.transform = 'translateX(-960px)';
  conten.style.display = 'block';
});



let closingg = document.querySelector(".close");
closingg.addEventListener("click", ()=>{
  profile.style.display = 'none';
  conten.style.display = 'block';
});

let icre = document.querySelector(".icre");
let chongeName = document.querySelector(".chonge-name");
icre.addEventListener("click", ()=>{
   chongeName.style.opacity = 'initial';
   chongeName.style.left = '90px';
});

let LastName = document.querySelector(".Last-name");
let btnChang = document.querySelector(".btn-chang");
btnChang.addEventListener("click", ()=>{
  if (LastName.value != '') {
   lastUser.innerHTML = LastName.value;
   chongeName.style.opacity = '0';
  }else{
    chongeName.style.opacity = "0";
  }
});