const navLinks = document.querySelectorAll("[data-nav]");

const handleClick = (event) => {
  event.preventDefault();
  const link = event.target;
  navLinks.forEach((item) => item.classList.remove("active"));
  link.classList.add("active");
};

navLinks.forEach((item) => item.addEventListener("click", handleClick));
