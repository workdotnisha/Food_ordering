//active navbar
let nav = document.querySelector(".navigation-wrap");
window.onscroll = function (){
    if(document.documentElement.scrollTop > 20){
        nav.classList.add("scroll-on");
    }else{
        nav.classList.remove("scroll-on");
    }
}

//nav hide
let navbar = document.querySelectorAll('.nav-link');
let navCollapse = document.querySelector('.nav-collapse.collapse');
navbar.forEach(function(a){
    a.addEventListener('click', function(){
        navCollapse.classList.remove("show");
    })
})

//counter design
document.addEventListener('DOMContentLoaded', () => {
    function counter(id, start, end, duration){
        const obj = document.getElementById(id);
        if(!obj){
            console.error(`Element with id "${id}" not found.`);
            return;
        }
        let current = start;
        const range = end - start;
        const increment = end > start ? 1 : -1;
        const step = Math.abs(Math.floor(duration/range));
        const timer = setInterval(() => {
            current += increment;
            obj.textContent = current;
            if(current == end){
                clearInterval(timer);
            }
        }, step);
    }
    counter("count1", 0, 1287, 3000);
    counter("count2", 100, 5786, 2500);
    counter("count3", 0, 1487, 3000);
    counter("count4", 0, 7217, 3000);
});