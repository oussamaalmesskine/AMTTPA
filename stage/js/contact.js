//CONTACT FORM
var user = document.getElementById('name'),
    Prenom = document.getElementById('Prénom'),
    mail = document.getElementById('mail'),
    form = document.querySelector('.form-contact'),
    userEror = true,
    emailerrour = true;
    function checkErours(){
        if(userEror === true || emailerrour == true ){
        }
    }
    //PREVENTdEFAULT FORM
    form.addEventListener("click", function(event){
        if(userEror === true || emailerrour == true ){
            event.preventDefault()
        }
    });
    checkErours();
//VALAIDET USER
user.addEventListener('blur', function () {
    if (this.value.length < 4) {
        this.nextElementSibling.style.display = "block";
        userEror = true;
    } else {
        this.nextElementSibling.style.display = "none";
        userEror = false;
    }
    checkErours();
})
mail.addEventListener('blur', function () {
    if (this.value.length < 4) {
        this.nextElementSibling.style.display = "block";
        emailerrour = true;
    } else {
        this.nextElementSibling.style.display = "none";
        emailerrour = false;
    }
    checkErours();
})
// // // end contact form
