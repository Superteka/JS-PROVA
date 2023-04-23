const clientes = ['João', 'Maria', 'José', 'Ana', 'Lucas', 'Carla', 'Pedro', 'Fernanda', 'Felipe', 'Larissa'];
const saldos = [1000.00, 500.00, 0.00, -200.00, -300.50, 1500.25, -1000.75, 800.50, -50.00, 1200.00];

document.getElementById('saldo').addEventListener('click', () => {
  let nome = '';
  while (true) {
    const nomes = clientes.join('\n');
    alert(`Lista de Clientes:\n${nomes}`);

    nome = prompt('Digite o nome do cliente para consultar o saldo:');
    const index = clientes.findIndex(cliente => cliente.toLowerCase() === nome.toLowerCase());

    if (index === -1) {
      const opcao = confirm('Cliente não encontrado, deseja consultar a lista novamente?');
      if (!opcao) break;
    } else {
      const saldo = saldos[index];
      alert(`O saldo de ${clientes[index]} é R$ ${saldo.toFixed(2)}`);
      break;
    }
  }
});
