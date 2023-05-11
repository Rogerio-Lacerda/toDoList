const navLinks = document.querySelectorAll("[data-nav]");
const texto = document.querySelector("#texto");
const btnEnviar = document.querySelector(".btn-enviar");
const btnRemoverTudo = document.querySelector(".btn-remove-tudo");
const ul = document.querySelector(".ul-tarefas");

const clickNav = (event) => {
  event.preventDefault();
  const link = event.target;
  navLinks.forEach((item) => item.classList.remove("active"));
  link.classList.add("active");
};
navLinks.forEach((item) => item.addEventListener("click", clickNav));

let itensTarefas = [];

const removerTudo = () => {
  itensTarefas = [];
};
btnRemoverTudo.addEventListener("click", removerTudo);

const verificaTexto = (event) => {
  event.preventDefault();
  const value = texto.value;
  if (value === "") {
    const formToDoList = document.querySelector("#form-toDoList");
    const existe = document.querySelector(".erro");
    if (!existe) {
      const span = document.createElement("span");
      span.classList.add("erro");
      span.innerText = "Preencha o campo de texto!";
      formToDoList.appendChild(span);
    }
  } else {
    const existe = document.querySelector(".erro");
    if (existe) {
      existe.remove();
    }
    setandoTarefa();
  }
};
btnEnviar.addEventListener("click", verificaTexto);

function setandoTarefa() {
  if (itensTarefas.length >= 20) {
    alert("Limite máximo de 20 itens atingido!");
    return;
  }

  itensTarefas.push({ item: texto.value, status: "" });
  uptadeTarefas();
}

function uptadeTarefas() {
  localStorage.setItem("todolist", JSON.stringify(itensTarefas));
  loadTarefas();
}

function loadTarefas() {
  ul.innerHTML = "";
  itensTarefas = JSON.parse(localStorage.getItem("todolist")) ?? [];
  console.log(itensTarefas);
  itensTarefas.forEach((item, index) => {
    insertItemTela(item.item, item.status, i);
  });
}
