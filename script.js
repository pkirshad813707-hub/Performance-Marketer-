const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:.15
});

document.querySelectorAll("section").forEach(section=>{

section.style.opacity="0";
section.style.transform="translateY(40px)";
section.style.transition="1s";

observer.observe(section);

});

document.querySelectorAll("section").forEach(section=>{

section.addEventListener("transitionend",()=>{

section.style.opacity="1";
section.style.transform="translateY(0px)";

});

});

window.addEventListener("scroll",()=>{

const hero=document.querySelector(".hero");

hero.style.transform=`translateY(${window.scrollY*0.2}px)`;

});
