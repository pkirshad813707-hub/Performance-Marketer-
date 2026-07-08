// ===========================
// EMAILJS INITIALIZE
// ===========================

const PUBLIC_KEY = "YOUR_PUBLIC_KEY";
const SERVICE_ID = "YOUR_SERVICE_ID";
const TEMPLATE_ID = "YOUR_TEMPLATE_ID";

emailjs.init({
    publicKey: PUBLIC_KEY
});

// ===========================
// ELEMENTS
// ===========================

const form = document.getElementById("contactForm");
const input = document.getElementById("message");
const button = document.getElementById("submitBtn");
const status = document.getElementById("status");

// ===========================
// FORM SUBMIT
// ===========================

form.addEventListener("submit", function (e) {

    e.preventDefault();

    const message = input.value.trim();

    if (message === "") {

        status.innerHTML = "Please enter a message.";

        status.style.color = "#ff5757";

        return;
    }

    button.disabled = true;

    button.innerHTML = "Sending...";

    status.innerHTML = "";

    emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
            message: message,
            from_name: "Portfolio Website",
            to_email: "pkirshad813707@gmail.com"
        }
    )

    .then(() => {

        button.innerHTML = "Sent ✓";

        status.innerHTML = "Your message has been sent successfully.";

        status.style.color = "#66ff99";

        form.reset();

        setTimeout(() => {

            button.innerHTML = "Submit";

            button.disabled = false;

            status.innerHTML = "";

        }, 2500);

    })

    .catch((error) => {

        console.log(error);

        button.innerHTML = "Submit";

        button.disabled = false;

        status.innerHTML = "Something went wrong.";

        status.style.color = "#ff5757";

    });

});
