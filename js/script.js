const navLinks = document.querySelectorAll("[data-nav]");

const handleClick = (event) => {
  event.preventDefault();
  const link = event.target;
  navLinks.forEach((item) => item.classList.remove("active"));
  link.classList.add("active");
};

navLinks.forEach((item) => item.addEventListener("click", handleClick));

const createTasksAll = (conteudo, atritbuto) => {
  const label = document.createElement("label");
  label.innerText = conteudo;
  label.setAttribute("for", atritbuto);
  const task = `<div>
  <input type='checkbox' name='${atritbuto}' id='${atritbuto}'>
  ${label.outerHTML}
  </div>
  `;
  return task;
};

const btnEnviar = document.querySelector(".btn-enviar");
const formToDoList = document.querySelector("#form-toDoList");

const valueFormTask = (event) => {
  event.preventDefault();
  const valueText = formToDoList[0].value;
  const numRandom = Math.random().toFixed(7);
  return {
    valueText,
    numRandom,
  };
};

btnEnviar.addEventListener("click", valueFormTask);
