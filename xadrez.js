let engine;

function startEngine() {
  // cria o Worker a partir do arquivo stockfish.js
  engine = new Worker('stockfish.js');

  // pega mensagens do Stockfish e manda pro <pre>
  engine.onmessage = function(event) {
    document.getElementById('output').textContent += event.data + "\n";
  };

  // inicializa o motor
  engine.postMessage("uci");

  // define uma posição exemplo (jogadas iniciais)
  engine.postMessage("position startpos moves e2e4 e7e5");

  // pede análise leve (depth 5) pra não travar muito
  engine.postMessage("go depth 5");
}