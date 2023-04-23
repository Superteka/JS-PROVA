document.getElementById('chamada').addEventListener('click', function() {
    var alunosPresentes = [];
    var nomeAluno = prompt('Digite o nome do aluno(a):'); 
    
    while (nomeAluno !== '') {
      alunosPresentes.push(nomeAluno);
      nomeAluno = prompt('Digite o nome do aluno(a):');
    }
    
    alert('Alunos Presentes:\n' + alunosPresentes.join('\n') + '\nTotal de Alunos: ' + alunosPresentes.length);
  });
  