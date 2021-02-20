/*start setction Counter*/
let ourSkills = document.querySelector('.counter');
var speed = 0;
setInterval(window.onscroll = function () {
    let skikillsOffsetTop = ourSkills.offsetTop;
    let skikillsOuterHeight = ourSkills.offsetHeight;
    let windowHeight = this.innerHeight;
    let windowScrollTop = this.pageYOffset;
    if (windowScrollTop > (skikillsOffsetTop + skikillsOuterHeight - windowHeight)) {
        let allSkills = document.querySelectorAll('.cont');
        allSkills.forEach(skill => {
            skill.innerHTML = speed++;
            if (skill.innerHTML > skill.dataset.progresss) {
                skill.innerHTML = skill.dataset.progresss;
            }
        })
    }
    else {
    }
}, 10000);
// /*end setction Counter*/
//CHECK FORM
//CONTACT FORM
//CONTACT FORM
var user = document.getElementById('user'),
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


// // // <!--end contact form-->

