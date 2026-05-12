let totalVendasAcumulado = 0;
let estoqueAtual = 500;

function finalizarVenda() {
    // Captura de valores
    const nomeCliente = document.getElementById('cliente').value;
    const valorUnitario = parseFloat(document.getElementById('valorUnitario').value);
    const qtd = parseInt(document.getElementById('quantidade').value);
    const isVip = document.getElementById('vip').checked;

    // Validação simpleslet totalVendasAcumulado = 0;
let estoqueAtual = 500;

function finalizarVenda() {
    // Captura de valores
    const nomeCliente = document.getElementById('cliente').value;
    const valorUnitario = parseFloat(document.getElementById('valorUnitario').value);
    const qtd = parseInt(document.getElementById('quantidade').value);
    const isVip = document.getElementById('vip').checked;

    // Validação simples
    if (!nomeCliente || isNaN(valorUnitario) || isNaN(qtd) || qtd <= 0) {
        alert("Por favor, preencha todos os campos corretamente.");
        return;
    }

    if (qtd > estoqueAtual) {
        alert("Quantidade insuficiente em estoque!");
        return;
    }

    // Cálculo do Total com regra de negócio (VIP ganha 10% de desconto)
    let totalVenda = valorUnitario * qtd;
    if (isVip) {
        totalVenda *= 0.9; 
    }

    // Atualização de variáveis globais
    totalVendasAcumulado += totalVenda;
    estoqueAtual -= qtd;

    // Atualização do Dashboard
    document.getElementById('displayTotal').innerText = `R$ ${totalVendasAcumulado.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`;
    document.getElementById('displayEstoque').innerText = estoqueAtual;

    // Adicionar na tabela
    adicionarNaTabela(nomeCliente, qtd, totalVenda);

    // Limpar campos
    limparCampos();
}
    if (!nomeCliente || isNaN(valorUnitario) || isNaN(qtd) || qtd <= 0) {
        alert("Por favor, preencha todos os campos corretamente.");
        return;
    }

    if (qtd > estoqueAtual) {
        alert("Quantidade insuficiente em estoque!");
        return;
    }

    // Cálculo do Total com regra de negócio (VIP ganha 10% de desconto)
    let totalVenda = valorUnitario * qtd;
    if (isVip) {
        totalVenda *= 0.9; 
    }

    // Atualização de variáveis globais
    totalVendasAcumulado += totalVenda;
    estoqueAtual -= qtd;

    // Atualização do Dashboard
    document.getElementById('displayTotal').innerText = `R$ ${totalVendasAcumulado.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`;
    document.getElementById('displayEstoque').innerText = estoqueAtual;

    // Adicionar na tabela
    adicionarNaTabela(nomeCliente, qtd, totalVenda);

    // Limpar campos
    limparCampos();
}

function adicionarNaTabela(cliente, qtd, total) {
    const tabela = document.getElementById('tabelaVendas').getElementsByTagName('tbody')[0];
    const novaLinha = tabela.insertRow(0); // Adiciona no topo

    const agora = new Date();
    const horario = agora.getHours().toString().padStart(2, '0') + ":" + agora.getMinutes().toString().padStart(2, '0');

    novaLinha.innerHTML = `
        <td>${horario}</td>
        <td>${cliente}</td>
        <td>${qtd}</td>
        <td>R$ ${total.toFixed(2)}</td>
    `;
}

function limparCampos() {
    document.getElementById('cliente').value = "";
    document.getElementById('valorUnitario').value = "";
    document.getElementById('quantidade').value = "";
    document.getElementById('idProduto').value = "";
    document.getElementById('vip').checked = false;
}