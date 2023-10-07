// Define a variável GASOLINA
const GASOLINA = "Gasolina";

// Define a variável ETANOL
const ETANOL = "Etanol";

// Classe Combustivel
class Combustivel {
  constructor(tipo, preco) {
    this.tipo = tipo;
    this.preco = parseFloat(preco);
  }
}

// Classe Posto
class Posto {
  constructor(nome, gasolina, etanol) {
    this.nome = nome;
    this.gasolina = new Combustivel(GASOLINA, parseFloat(gasolina));
    this.etanol = new Combustivel(ETANOL, parseFloat(etanol));
  }

  // Método para sugerir o combustível
  sugereCombustivel() {
    // Calcula o percentual do etanol em relação à gasolina
    const percentualEtanol = parseFloat(this.etanol.preco) / parseFloat(this.gasolina.preco);

    // Verifica se é vantajoso abastecer com etanol
    if (percentualEtanol < 0.7) {
      // É vantajoso abastecer com etanol
      return `É vantajoso abastecer com ${this.etanol.tipo} no posto ${this.nome}. O percentual é de ${percentualEtanol.toFixed(2) * 100}%.`;
    } else {
      // Não é vantajoso abastecer com etanol
      return `Não é vantajoso abastecer com ${this.etanol.tipo} no posto ${this.nome}. O percentual é de ${percentualEtanol.toFixed(2) * 100}%.`;
    }
  }
}

// Função para calcular o combustível mais vantajoso
function calcularCombustivel() {
  // Obtém os dados do formulário
  const nomePosto = document.querySelector("input[name='nome']").value;
  const precoGasolina = parseFloat(document.querySelector("input[name='precoGasolina']").value);
  const precoEtanol = parseFloat(document.querySelector("input[name='precoEtanol']").value);

  // Cria um objeto Posto com os valores inseridos pelo usuário
  const posto = new Posto(nomePosto, precoGasolina, precoEtanol);

  // Obtém o elemento de resultado
  const resultado = document.querySelector("#resultado");

  // Obtém a sugestão de combustível do posto
  const sugestao = posto.sugereCombustivel();

  // Exibe a sugestao no elemento de resultado
  resultado.innerHTML = sugestao;

  // Impede o envio do formulário
  return false;
}
