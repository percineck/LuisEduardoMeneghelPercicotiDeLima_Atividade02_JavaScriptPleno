document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("caixa-eletronico-form");
  const resultadoDiv = document.getElementById("resultado");

  form.addEventListener("submit", function(event) {
      event.preventDefault();
      resultadoDiv.innerHTML = ""; // Limpar resultados anteriores

      const saque = parseInt(document.getElementById("saque").value);

      if (isNaN(saque) || saque < 10 || saque > 600) {
          resultadoDiv.textContent = "Por favor, insira um valor válido entre 10 e 600 reais.";
      } else {
          calcularNotas(saque);
      }
  });

  function calcularNotas(valor) {
      const notasDisponiveis = [100, 50, 20, 10, 5, 2, 1];
      let resultado = {};

      for (let nota of notasDisponiveis) {
          const quantidade = Math.floor(valor / nota);
          if (quantidade > 0) {
              resultado[nota] = quantidade;
              valor %= nota;
          }
      }

      exibirResultado(resultado);
  }

  function exibirResultado(resultado) {
      resultadoDiv.innerHTML = "<h2>Notas fornecidas:</h2>";
      for (let nota in resultado) {
          resultadoDiv.innerHTML += `${resultado[nota]} nota(s) de ${nota} reais<br>`;
      }
  }
});
