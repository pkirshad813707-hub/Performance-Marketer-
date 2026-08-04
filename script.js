// =========================
// PAGE LOAD ANIMATION
// =========================

window.addEventListener("load", () => {
    document.body.classList.add("loaded");
});

// =========================
// MOUSE GLOW EFFECT
// =========================

const glow = document.querySelector(".background");

document.addEventListener("mousemove", (e) => {

    const x = e.clientX;
    const y = e.clientY;

    glow.style.background = `
        radial-gradient(
            circle 600px at ${x}px ${y}px,
            rgba(37,99,255,.18),
            rgba(0,170,255,.12) 20%,
            rgba(0,200,255,.05) 35%,
            transparent 60%
        ),
        #020202
    `;

});

// =========================
// HERO FADE
// =========================

const content = document.querySelector(".content");

content.animate(

[
    {
        opacity:0,
        transform:"translateY(40px)"
    },

    {
        opacity:1,
        transform:"translateY(0)"
    }

],

{
    duration:1200,
    easing:"ease-out",
    fill:"forwards"
}

);

// =========================
// BUTTON HOVER EFFECT
// =========================

const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {

    button.addEventListener("mouseenter", () => {

        button.style.transform = "translateY(-4px) scale(1.02)";

    });

    button.addEventListener("mouseleave", () => {

        button.style.transform = "translateY(0) scale(1)";

    });

});

// =========================
// PARALLAX HEADING
// =========================

const title = document.querySelector("h1");

document.addEventListener("mousemove",(e)=>{

    const moveX = (e.clientX - window.innerWidth/2) * 0.01;
    const moveY = (e.clientY - window.innerHeight/2) * 0.01;

    title.style.transform =
        `translate(${moveX}px, ${moveY}px)`;

});

// =========================
// SMOOTH SCROLL
// =========================

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        e.preventDefault();

        document.querySelector(this.getAttribute("href"))
        ?.scrollIntoView({

            behavior:"smooth"

        });

    });

});

// =========================
// BLINKING CURSOR (OPTIONAL)
// =========================

const heading = document.querySelector(".light");

setInterval(()=>{

    heading.style.opacity =
        heading.style.opacity === "0.75"
        ? "1"
        : "0.75";

},1000);
