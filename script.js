// Scroll animation
window.addEventListener("scroll", () => {
  document.querySelectorAll(".box").forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight) {
      el.classList.add("show");
    }
  });
});

// Button
function contact(){
  alert("Email: example@gmail.com");
}
