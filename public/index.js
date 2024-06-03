//COPYRIGHT DATE

const copyrightDate = document.querySelector("[data-copyright-date]");

copyrightDate.innerHTML = "&copy;" + new Date().getFullYear() + ".";

//INTERSECTION OBSERVER CARDS

const cards = document.querySelectorAll("[data-card]");

const observerCards = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            entry.target.classList.toggle("section--show", entry.isIntersecting);
        });
    },
    {
        root: null,
        threshold: 0.35,
        rootMargin: "0px",
    }
);

cards.forEach((card) => {
    observerCards.observe(card);
});

//INTERSECTION OBSERVER TEXT

const text = document.querySelectorAll("[data-text]");

const observerText = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            entry.target.classList.toggle("text--show", entry.isIntersecting);
        });
    },
    {
        root: null,
        threshold: 0.5,
        rootMargin: "0px",
    }
);

text.forEach((text) => {
    observerText.observe(text);
});
