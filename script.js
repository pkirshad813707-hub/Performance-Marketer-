/* ==========================================
   IRSHAD PK
   Premium Landing Page
========================================== */

// Mouse Glow
const mouseGlow = document.querySelector(".mouse-glow");

document.addEventListener("mousemove", (e) => {
    if (!mouseGlow) return;

    mouseGlow.animate(
        {
            left: `${e.clientX}px`,
            top: `${e.clientY}px`
        },
        {
            duration: 300,
            fill: "forwards"
        }
    );
});

// Navbar Blur on Scroll
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (!navbar) return;

    if (window.scrollY > 20) {

        navbar.style.background = "rgba(10,10,10,.45)";
        navbar.style.backdropFilter = "blur(18px)";
        navbar.style.webkitBackdropFilter = "blur(18px)";
        navbar.style.border = "1px solid rgba(255,255,255,.05)";
        navbar.style.borderRadius = "18px";
        navbar.style.padding = "18px 32px";
        navbar.style.marginTop = "15px";

    } else {

        navbar.style.background = "transparent";
        navbar.style.backdropFilter = "none";
        navbar.style.webkitBackdropFilter = "none";
        navbar.style.border = "none";
        navbar.style.borderRadius = "0";
        navbar.style.padding = "";
        navbar.style.marginTop = "0";

    }

});

// Hero Parallax
const hero = document.querySelector(".hero-content");

document.addEventListener("mousemove", (e) => {

    if (!hero) return;

    const x = (e.clientX - window.innerWidth / 2) * 0.01;
    const y = (e.clientY - window.innerHeight / 2) * 0.01;

    hero.style.transform =
        `translate3d(${x}px, ${y}px, 0)`;

});

// Smooth Anchor Scroll
document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (!target) return;

        e.preventDefault();

        target.scrollIntoView({
            behavior: "smooth"
        });

    });

});

// Reveal Animation
const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("visible");

        }

    });

}, {
    threshold: 0.2
});

document.querySelectorAll("h1, p, .buttons, .eyebrow").forEach(el => {

    el.classList.add("hidden");

    observer.observe(el);

});

// Magnetic Buttons
document.querySelectorAll(".primary-btn, .secondary-btn").forEach(button => {

    button.addEventListener("mousemove", (e) => {

        const rect = button.getBoundingClientRect();

        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        button.style.transform =
            `translate(${x * 0.12}px, ${y * 0.12}px)`;

    });

    button.addEventListener("mouseleave", () => {

        button.style.transform = "translate(0,0)";

    });

});

// Typing Cursor Blink
const lightText = document.querySelector(".light");

if (lightText) {

    setInterval(() => {

        lightText.style.opacity =
            lightText.style.opacity === "0.6"
                ? "1"
                : "0.6";

    }, 900);

}

// Fade-in on Load
window.addEventListener("load", () => {

    document.body.style.opacity = "1";

});
