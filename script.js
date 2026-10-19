
document.addEventListener("DOMContentLoaded", () => {
  // Update copyright year.
  const year = document.getElementById("year");

  if (year) {
    year.textContent = new Date().getFullYear();
  }

  // Sarcastic replies for each answer.
  const replies = {
    intention: {
      "Just curious.":
        "Curiosity. A perfectly reasonable excuse for being here.",

      "Doing my research.":
        "Research noted. Please remember that Google exists for a reason.",

      "I have my reasons.":
        "Mysterious. Unnecessarily mysterious, but we'll allow it."
    },

    identity: {
      "I think I do.":
        "Confidence is attractive. Accuracy would be a nice bonus.",

      "Not really.":
        "Excellent. At least one of us is being honest.",

      "Let's not get philosophical.":
        "Agreed. This website has already asked enough questions."
    },

    expectation: {
      "Professional credentials.":
        "You'll find those on LinkedIn. This is clearly the less conventional entrance.",

      "Something unexpected.":
        "Congratulations. You've found a website that interviews its visitors.",

      "Honestly, no idea.":
        "Finally, someone who understands the assignment."
    }
  };

  const responseText = document.getElementById("responseText");
  const response = document.getElementById("response");

  // Handle answer selection.
  document.querySelectorAll(".answers").forEach((group) => {
    const question = group.dataset.question;

    group.querySelectorAll("button").forEach((button) => {
      button.addEventListener("click", () => {
        group.querySelectorAll("button").forEach((item) => {
          item.classList.remove("selected");
          item.setAttribute("aria-pressed", "false");
        });

        button.classList.add("selected");
        button.setAttribute("aria-pressed", "true");

        const answer = button.dataset.answer;
        const reply = replies[question]?.[answer];

        if (reply && responseText && response) {
          responseText.textContent = reply;

          response.classList.remove("updated");
          void response.offsetWidth;
          response.classList.add("updated");
        }
      });
    });
  });

  // Scroll to the questions.
  const startButton = document.getElementById("startBtn");
  const questions = document.getElementById("questions");

  startButton?.addEventListener("click", () => {
    questions?.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });

  // Return to the top.
  const backToTop = document.getElementById("backToTop");

  backToTop?.addEventListener("click", (event) => {
    event.preventDefault();

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});
