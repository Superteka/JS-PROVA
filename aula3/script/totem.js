const professorButton = document.getElementById('totem');

professorButton.addEventListener('click', () => {
  let sandwichName = '';

  sandwichName = prompt('Digite o nome do seu sanduíche');

  let sandwichValue = 15;

  const accompaniments = [];

  while (true) {
    const accompaniment = prompt('Digite o acompanhamento ou digite "concluir" para finalizar seu pedido');

    if (accompaniment === 'concluir') {
      break;
    }

    accompaniments.push(accompaniment);
  }

  let totalValue = sandwichValue + (accompaniments.length * 2);

  alert(`Seu pedido foi:\n\n- Sanduíche: ${sandwichName} (R$ ${sandwichValue.toFixed(2)})\n- Acompanhamentos: ${accompaniments.join(', ')} (R$ ${(accompaniments.length * 2).toFixed(2)})\n\nTotal: R$ ${totalValue.toFixed(2)}`);
});
