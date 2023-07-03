function getNumber() {
  const li = document.querySelectorAll("li");
  const layer = document.querySelector(".input-usr");

  li.forEach((e) => {
    e.addEventListener("click", () => {
      return (layer.textContent =
        e.textContent === "C" ? (layer.textContent = "") : e.className === "delete" ? (layer.textContent = layer.textContent.slice(0, -1)) : e.textContent === "=" ? eval(layer.textContent) : (layer.textContent += e.textContent));
    });
  });
}

getNumber();
