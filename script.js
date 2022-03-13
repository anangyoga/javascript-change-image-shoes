const dots = document.querySelectorAll(".dots");
const image = document.querySelector(".image img");

dots.forEach((dot) => {
  dot.addEventListener("click", () => {
    const value = dot.getAttribute("value");
    image.src = `./images/${value}.jpeg `;
  });
});
