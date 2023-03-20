const password=document.getElementById("password");
const eye=document.getElementById("eye")
console.log(eye);

const usernameError=document.getElementById("usernameError");
console.log(usernameError);
const passwordError=document.getElementById("passwordError");

const username=document.getElementById("input");
const myForm=document.getElementById("myForm");


       eye.addEventListener("click",function(){
   const type= password.attributes.type.value;
   if(type==="password"){
    password.attributes.type.value="text";
    eye.classList.replace("fa-eye","fa-eye-slash")
   }else{
    password.attributes.type.value="password";
    eye.classList.replace("fa-eye-slash","fa-eye")
   }
});

myForm.addEventListener("submit",function(e){
    e.preventDefault();

    if(username.value==""){
        alert("lütfen email adresinizi giriniz")
    }

    const emailformat=/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    const isValidEmail=username.value.match(emailformat);
    if(isValidEmail===null){ 
   // alert("email formatı yanlış");
   usernameError.innerText="email formatı yanlış"
   usernameError.style.visibility=" visible"
   usernameError.focus();
    return false;

    
}


if(password.value===""){
    passwordError.innerText="şire alanı boş bırakılamaz"
    passwordError.style.visibility="visible"
    password.focus();
    return false;
}


if(password.value.lenght < 7){
    console.log(password.value.lenght);
    passwordError.innerText="şifre en az 6 karater olmalı";
    passwordError.style.visibility="visible"
    password.focus();
    return false;
    
}
})

username.addEventListener("focusout",function(){
    usernameError.style.visibility="hidden";
})
password.addEventListener("focusout",function(){
    passwordError.style.visibility="hidden";
})
