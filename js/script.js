const texto = document.querySelector("#texto");
const btnEnviar = document.querySelector(".btn-enviar");
const btnRemoverTudo = document.querySelector(".btn-remove-tudo");
const ul = document.querySelector(".ul-tarefas");

let itensTarefas = [];

const removerTudo = () => {
  itensTarefas = [];
  updateTarefas();
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
  updateTarefas();
}

function updateTarefas() {
  localStorage.setItem("todolist", JSON.stringify(itensTarefas));
  loadTarefas();
}

function loadTarefas() {
  ul.innerHTML = "";
  itensTarefas = JSON.parse(localStorage.getItem("todolist")) ?? [];
  itensTarefas.forEach((item, index) => {
    insertItemTela(item.item, item.status, index);
  });
}

function insertItemTela(text, status, i) {
  const li = document.createElement("li");
  li.innerHTML = `
  <div class='divLi'>
  <div>
   <input type='checkbox' ${status} data-i=${i} onchange='done(this, ${i});'/>
   <span data-si='${i}'>${text}</span>
  </div> 
  <button class='btn-remove' onclick="removeItem(${i})" data-i=${i}><i class='bx bx-trash'></i></button>
  </div>
  `;

  ul.appendChild(li);

  texto.value = "";
}

function done(chk, i) {
  if (chk.checked) {
    itensTarefas[i].status = "checked";
  } else {
    itensTarefas[i].status = "";
  }

  updateTarefas();
}

function removeItem(i) {
  itensTarefas.splice(i, 1);
  updateTarefas();
}

loadTarefas();
