function iniciarJogoDaForca() {
  const palavras = [
  "astronauta", "borboleta", "dinossauro", "universo", "travesseiro", "camiseta", "pincel", "geladeira", "xadrez", "arcoiris",
  "escorregador", "tartaruga", "abacate", "esponja", "ferrovia","planeta", "mochila", "anel", "quadro", "viagem","foguete",
  "museu", "gramado", "estante", "lagarta", "teclado", "bigorna", "formiga", "nuvem", "dragao"
];

  const maxErros = 5;

  alert("Bem-vindo ao Jogo da Forca!\nTente adivinhar a palavra, letra por letra.");

  while (true) {
    const palavraSecreta = palavras[Math.floor(Math.random() * palavras.length)].toLowerCase();
    const letrasDescobertas = Array(palavraSecreta.length).fill("_");
    const letrasTentadas = [];
    let erros = 0;
    let acertou = false;

    while (erros < maxErros && letrasDescobertas.includes("_")) {
      const estadoAtual = letrasDescobertas.join(" ");
      const letra = prompt(`Palavra: ${estadoAtual}\nLetras tentadas: ${letrasTentadas.join(", ")}\nErros: ${erros}/${maxErros}\nDigite uma letra:`);

      if (letra === null) {
        alert("Jogo encerrado pelo jogador.");
        return;
      }

      const tentativa = letra.toLowerCase().trim();

      if (tentativa.length !== 1 || !/^[a-zçáéíóúàãõâêîôû]$/.test(tentativa)) {
        alert("⚠️ Digite apenas uma letra válida.");
        continue;
      }

      if (letrasTentadas.includes(tentativa)) {
        alert("⚠️ Você já tentou essa letra. Tente outra.");
        continue;
      }

      letrasTentadas.push(tentativa);

      if (palavraSecreta.includes(tentativa)) {
        for (let i = 0; i < palavraSecreta.length; i++) {
          if (palavraSecreta[i] === tentativa) {
            letrasDescobertas[i] = tentativa;
          }
        }
        alert("✅ Boa! Você acertou uma letra.");
      } else {
        erros++;
        alert("❌ Letra incorreta.");
      }
    }

    if (!letrasDescobertas.includes("_")) {
      alert(`🎉 Parabéns! Você descobriu a palavra: ${palavraSecreta.toUpperCase()}`);
    } else {
      alert(`💀 Você perdeu! A palavra era: ${palavraSecreta.toUpperCase()}`);
    }

    const jogarNovamente = prompt("🔁 Deseja jogar novamente? (s para sim / qualquer outra tecla para sair)");
    if (!jogarNovamente || jogarNovamente.trim().toLowerCase() !== "s") {
      alert("👋 Obrigado por jogar! Até a próxima.");
      break;
    }
  }
}

iniciarJogoDaForca();
