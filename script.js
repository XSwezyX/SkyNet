function adicionarTarefa() {
  const input = document.getElementById("tarefa");
  const lista = document.getElementById("lista");

  if (input.value.trim() === "") {
    alert("Digite uma tarefa!");
    return;
  }

  const li = document.createElement("li");
  li.textContent = input.value;

  // botão remover (EXTRA pra ganhar ponto)
  const botao = document.createElement("button");
  botao.textContent = "Remover";
  botao.style.marginLeft = "10px";

  botao.onclick = function () {
    lista.removeChild(li);
  };

  li.appendChild(botao);
  lista.appendChild(li);

  input.value = "";
}
