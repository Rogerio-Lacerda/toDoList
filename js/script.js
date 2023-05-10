const navLinks = document.querySelectorAll("[data-nav]");

const clickNav = (event) => {
  event.preventDefault();
  const link = event.target;
  navLinks.forEach((item) => item.classList.remove("active"));
  link.classList.add("active");
};
navLinks.forEach((item) => item.addEventListener("click", clickNav));

const createTask = (conteudo, atritbuto) => {
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

const setandoTarefas = (valoresForm) => {
  const valoresTask = valoresForm;
  const conteudoDiv = createTask(valoresTask.valueText, valoresTask.numRandom);
  const container = document.querySelector(".form-tarefas");
  if (valoresTask.valueText === "") {
    const erroAll = document.querySelectorAll(".erro");
    if (erroAll.length) {
      erroAll.forEach((item) => item.remove());
    }
    const erro = document.createElement("span");
    erro.innerText = "Preencha o campo de texto!";
    erro.classList.add("erro");
    formToDoList.appendChild(erro);
  } else {
    const erro = document.querySelector(".erro");
    if (erro) {
      erro.remove();
    }
    container.innerHTML += conteudoDiv;
  }
};

const valoresTarefas = (event) => {
  event.preventDefault();
  const valueText = formToDoList[0].value;
  const numRandom = "_" + Math.random().toFixed(7);
  const valoresObj = {
    valueText,
    numRandom,
  };
  setandoTarefas(valoresObj);
};
btnEnviar.addEventListener("click", valoresTarefas);
