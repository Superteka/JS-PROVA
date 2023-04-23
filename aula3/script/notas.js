document.getElementById("notas").addEventListener("click", function() {
  var alunos = [];

  for (var i = 1; i <= 5; i++) {
    var nome = prompt("Digite o nome do aluno " + i);
    if (nome === "") {
      break;
    }
    var modulo = prompt("Digite o módulo do aluno " + i);
    var nota4 = parseFloat(prompt("Digite a nota 4 do aluno " + i));
    var nota6 = parseFloat(prompt("Digite a nota 6 do aluno " + i));

    var aluno = {
      nome: nome,
      modulo: modulo,
      nota_4: nota4,
      nota_6: nota6
    };

    alunos.push(aluno);
  }

  function calcularMedia(aluno) {
    var media = (aluno.nota_4 + aluno.nota_6) / 2;
    return media;
  }

  var resultados = "";

  for (var i = 0; i < alunos.length; i++) {
    var aluno = alunos[i];
    var media = calcularMedia(aluno);

    var resultado = aluno.nome + " - " + aluno.modulo + " - Média: " + media.toFixed(2) + " - ";

    if (media >= 6) {
      resultado += "Aprovado";
    } else {
      resultado += "Reprovado";
    }

    resultados += resultado + "\n";
  }

  alert(resultados);
});
