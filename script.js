
document.addEventListener("DOMContentLoaded", () => {
  const answers = document.querySelectorAll(".answers");
  const responseText = document.getElementById("responseText");
  const response = document.getElementById("response");

  const year = document.getElementById("year");
  year.textContent = new Date().getFullYear();

  const replies = {
    intention: {
      "Just curious.": "Curiosity. A perfectly reasonable excuse for being here.",
      "Doing my research.": "Research noted. Please remember that Google exists for a reason.",
      "I have my reasons.": "Mysterious. Unnecessarily mysterious, but we'll allow it."
    },
    identity: {
      "I think I do.": "Confidence is attractive. Accuracy would be a nice bonus.",
      "Not really.": "Excellent. At least one of us is being honest.",
      "Let's not get philosophical.": "Agreed. This website has already asked enough questions."
    },
    expectation: {
      "Professional credentials.": "You'll find those on LinkedIn. This is clearly the less conventional entrance.",
      "Something unexpected.": "Congratulations. You've found a website that interviews its visitors.",
      "Honestly, no idea.": "Finally, someone who understands the assignment."
    }
  };

  answers.forEach((group) => {
    const question = group.dataset.question;

    group.querySelectorAll("button").forEach((button) => {
      button.addEventListener("click", () => {
        group.querySelectorAll("button").forEach((item) => {
          item.classList.remove("selected");
        });

        button.classList.add("selected");

        const answer = button.dataset.answer;
        responseText.textContent = replies[question][answer];

        response.classList.remove("updated");
        void response.offsetWidth;
        response.classList.add("updated");
      });
    });
  });

  document.getElementById("startBtn").addEventListener("click", () => {
    document.getElementById("questions").scrollIntoView({
      behavior: "smooth"
    });
  });

  document.getElementById("backToTop").addEventListener("click", (event) => {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});
