//NAV
const Logo = document.getElementById("nav-logo");
const Header = document.getElementById("header");

document.addEventListener("DOMContentLoaded", () => {
  const revealerNav = window.revealer({
    revealElementSelector: ".nav-list-js",
    options: {
      anchorSelector: ".nav-btn-js",
    },
  });

  const actionBtn = document.querySelector(".nav-btn-js");
  actionBtn.addEventListener("click", () => {
    if (!revealerNav.isRevealed()) {
      revealerNav.reveal();
      actionBtn.setAttribute("data-open", true);
      Logo.classList.add("logo-reveal");
    } else {
      revealerNav.hide();
      actionBtn.setAttribute("data-open", false);
      Logo.classList.remove("logo-reveal");
    }
  });
});

window.addEventListener("scroll", () => {
  const scrolled = window.scrollY;

  if (scrolled >= 100) {
    Header.classList.add("nav-scrolled");
  } else {
    Header.classList.remove("nav-scrolled");
  }
});

//ACCORDION QUESTIONS
const accordionItem = document.querySelectorAll(".questions__item");

accordionItem.forEach((item) => {
  const accordionHeader = item.querySelector(".questions__header");

  accordionHeader.addEventListener("click", () => {
    const openItem = document.querySelector(".accordion-open");

    toggleItem(item);

    if (openItem && openItem !== item) {
      toggleItem(openItem);
    }
  });
});

const toggleItem = (item) => {
  const accordionContent = item.querySelector(".questions__content");

  if (item.classList.contains("accordion-open")) {
    accordionContent.removeAttribute("style");
    item.classList.remove("accordion-open");
  } else {
    accordionContent.style.height = accordionContent.scrollHeight + "px";
    item.classList.add("accordion-open");
  }
};
