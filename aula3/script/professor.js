document.getElementById("professor").addEventListener("click", function() {
    let alunos = "";
    let nome;
    let versao = prompt("Digite 'do-while' para usar a versão com do..while ou 'while' para usar a versão somente com while:");
  
    if (versao === "do-while") {
      console.log("Versão selecionada: do..while");
      do {
        nome = prompt("Digite o nome do aluno (ou deixe em branco para encerrar a chamada):");
        if (nome !== "") {
          alunos += nome + ",";
        }
      } while (nome !== "");
    } else {
      console.log("Versão selecionada: while");
      while (true) {
        nome = prompt("Digite o nome do aluno (ou deixe em branco para encerrar a chamada):");
        if (nome === "") {
          break;
        }
        alunos += nome + ",";
      }
    }
  
    console.log(alunos.slice(0, -1));
    alert("Alunos presentes: " + alunos.slice(0, -1));
  });
  