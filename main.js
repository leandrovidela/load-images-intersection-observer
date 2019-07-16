const images = document.querySelectorAll("img");

function observerElement(entries, observer) {
  entries
    .filter(entry => entry.isIntersecting)
    .forEach(entry => {
      const img = entry.target;
      const src = img.getAttribute("data-lazy");

      img.setAttribute("src", src);
      img.classList.add("show");
      observer.disconnect();
      console.log("load");
    });
}

images.forEach(element => {
  const observer = new IntersectionObserver(observerElement, {
    rootMargin: "0px 0px 200px 0px",
    threshold: 0
  });
  observer.observe(element);
});
