//COPYRIGHT DATE

const copyrightDate = document.querySelector("[data-copyright-date]");

copyrightDate.innerHTML = "&copy;" + new Date().getFullYear() + ".";

//INTERSECTION OBSERVER

const cards = document.querySelectorAll("[data-card]");

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            entry.target.classList.toggle("section--show", entry.isIntersecting);
        });
    },
    {
        root: null,
        threshold: 0.25,
        rootMargin: "0px",
    }
);

cards.forEach((card) => {
    observer.observe(card);
});
