// ================================
// PAGE LOAD
// ================================

window.addEventListener("load", () => {
    document.body.classList.add("loaded");
});

// ================================
// MOUSE GLOW
// ================================

const glow = document.querySelector(".mouse-glow");

document.addEventListener("mousemove", (e) => {

    glow.style.left = `${e.clientX}px`;
    glow.style.top = `${e.clientY}px`;

});

// ================================
// HERO PARALLAX
// ================================

const hero = document.querySelector(".hero-content");

document.addEventListener("mousemove", (e) => {

    const x = (e.clientX - window.innerWidth / 2) * 0.008;
    const y = (e.clientY - window.innerHeight / 2) * 0.008;

    hero.style.transform = `translate(${x}px, ${y}px)`;

});

// ================================
// MAGNETIC BUTTON EFFECT
// ================================

document.querySelectorAll(".primary-btn, .secondary-btn").forEach(button => {

    button.addEventListener("mousemove", (e) => {

        const rect = button.getBoundingClientRect();

        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        button.style.transform =
            `translate(${x * 0.15}px, ${y * 0.15}px)`;

    });

    button.addEventListener("mouseleave", () => {

        button.style.transform = "translate(0,0)";

    });

});

// ================================
// NAVBAR BLUR
// ================================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 20) {

        navbar.style.background = "rgba(0,0,0,.35)";
        navbar.style.backdropFilter = "blur(18px)";
        navbar.style.borderRadius = "18px";
        navbar.style.marginTop = "15px";

    } else {

        navbar.style.background = "transparent";
        navbar.style.backdropFilter = "none";
        navbar.style.marginTop = "0";

    }

});

// ================================
// BUTTON RIPPLE EFFECT
// ================================

document.querySelectorAll(".primary-btn, .secondary-btn").forEach(button => {

    button.addEventListener("click", function(e){

        const ripple = document.createElement("span");

        const rect = this.getBoundingClientRect();

        const size = Math.max(rect.width, rect.height);

        ripple.style.width = size + "px";
        ripple.style.height = size + "px";

        ripple.style.left = (e.clientX - rect.left - size/2) + "px";
        ripple.style.top = (e.clientY - rect.top - size/2) + "px";

        ripple.className = "ripple";

        this.appendChild(ripple);

        setTimeout(() => ripple.remove(), 600);

    });

});

// ================================
// SMOOTH SCROLL
// ================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});

// ================================
// TEXT FADE-IN
// ================================

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

});

document.querySelectorAll("h1,p,.buttons").forEach(el => {

    observer.observe(el);

});
