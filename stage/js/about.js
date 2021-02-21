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