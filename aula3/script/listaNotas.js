let listaAlunos = [
    { nome: "Maria", modulo: "Módulo 1", nota_4: 3.5, nota_6: 5.8 },
    { nome: "João", modulo: "Módulo 1", nota_4: 4.2, nota_6: 6.7 },
    { nome: "Pedro", modulo: "Módulo 2", nota_4: 3.8, nota_6: 8.0 },
    { nome: "Ana", modulo: "Módulo 2", nota_4: 4.8, nota_6: 7.2 },
    { nome: "Lucas", modulo: "Módulo 3", nota_4: 4.0, nota_6: 9.5 }
  ];
  
  function calcularMedia(nota4, nota6) {
    return (nota4 * 2 + nota6 * 3) / 5;
  }
  
  function cadastrarAluno() {
    let nome = prompt("Digite o nome do aluno:");
    let modulo = prompt("Digite o módulo do aluno:");
    let nota4 = parseFloat(prompt("Digite a nota do aluno na avaliação de 4 pontos:"));
    let nota6 = parseFloat(prompt("Digite a nota do aluno na avaliação de 6 pontos:"));
  
    listaAlunos.push({ nome, modulo, nota_4: nota4, nota_6: nota6 });
  }
  
  function exibirRelatorio() {
    let relatorio = "";
  
    for (let aluno of listaAlunos) {
      let media = calcularMedia(aluno.nota_4, aluno.nota_6);
      let status = media >= 5 ? "Aprovado" : "Reprovado";
      relatorio += `Nome: ${aluno.nome} - Módulo: ${aluno.modulo} - Média: ${media.toFixed(2)} - Status: ${status}\n`;
    }
  
    let maiorNota = 0;
    let alunoMaiorNota = "";
    let abaixoMedia = 0;
    for (let aluno of listaAlunos) {
      let media = calcularMedia(aluno.nota_4, aluno.nota_6);
      if (media > maiorNota) {
        maiorNota = media;
        alunoMaiorNota = aluno.nome;
      }
      if (media < 7) {
        abaixoMedia++;
      }
    }
  
    relatorio += `Aluno com a maior nota: ${alunoMaiorNota} - Média: ${maiorNota.toFixed(2)}\n`;
    relatorio += `Quantidade de alunos abaixo da média 7.0: ${abaixoMedia}`;
  
    alert(relatorio);
  }
  
  document.getElementById("listaNotas").addEventListener("click", () => {
    let cadastrar = prompt("Gostaria de cadastrar novos alunos ou apenas consultar os já cadastrados? Digite sim para cadastrar e não para apenas consultar:");
    if (cadastrar === "sim") {
      cadastrarAluno();
    }
    exibirRelatorio();
  });
  