// document selectors for scroll //
const sections = document.querySelectorAll("section");
const navItem = document.querySelectorAll("nav .nav-link");
const navOffset = 100; // height of the nav bar

// event listeners //
window.addEventListener("scroll", () => {
  let current = "home";
  console.log(scrollY); // How far you have scrolled 0=top

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (scrollY + navOffset >= sectionTop) {
      current = section.getAttribute("id"); // uses the Y offset to determine which section is present based on the ID.
    }
  });
  console.log(current); // log section visible

  navItem.forEach((li) => {
    li.classList.remove("active");
    if (li.classList.contains(current)) {
      li.classList.add("active");
    }
  });
});
