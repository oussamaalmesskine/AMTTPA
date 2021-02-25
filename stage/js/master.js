window.addEventListener('scroll',function()  {myFunction()});
let header = document.querySelector('header');
let links = document.querySelectorAll('.nav-link');

function myFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        header.style.backgroundColor="#F7F7F7";
        links.forEach(link => {
            link.style.color="#333";
        });
    } else {
        header.style.backgroundColor="rgba(51, 51, 51, 0)";
        links.forEach(link => {
            link.style.color="#fff";
        });
    }
}

