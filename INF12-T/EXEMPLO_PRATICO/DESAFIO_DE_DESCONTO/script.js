// --- VARIÁVEIS GLOBAIS (Memória do Sistema) ---
let totalVendasAcumulado = 0;
let estoqueAtual = 500;

/**
 * FUNÇÃO PRINCIPAL: Executada ao clicar no botão
 */
function finalizarVenda() {
    // 1. ENTRADA DE DADOS: Pegando informações do HTML
    const nomeCliente = document.getElementById('cliente').value;
    const valorUnitario = parseFloat(document.getElementById('valorUnitario').value);
    const qtd = parseInt(document.getElementById('quantidade').value);
    const isVip = document.getElementById('vip').checked;

    // 2. VALIDAÇÃO: Verificando se os campos estão preenchidos corretamente
    if (!nomeCliente || isNaN(valorUnitario) || isNaN(qtd) || qtd <= 0) {
        alert("⚠️ Preencha todos os dados da venda!");
        return; // Para a execução aqui
    }

    // 3. REGRA DE ESTOQUE: Verificando se há produtos suficientes
    if (qtd > estoqueAtual) {
        alert("❌ Estoque insuficiente!");
        return;
    }

    // 4. PROCESSAMENTO: Calculando o valor da venda
    let totalVenda = valorUnitario * qtd;

    // Lógica de Desconto VIP
    if (isVip) {
        totalVenda = totalVenda * 0.9; // Tira 10% do valor
    }

    // --- 🏆 DESAFIO PARA OS ALUNOS ---
    // Implemente um IF aqui que dê 5% de desconto EXTRA 
    // se a quantidade (qtd) for maior ou igual a 10.
    // Dica: totalVenda = totalVenda * 0.95;



    // 5. ATUALIZAÇÃO: Atualizando os totais globais
    totalVendasAcumulado += totalVenda;
    estoqueAtual -= qtd;

    // 6. SAÍDA: Mostrando os resultados na tela
    document.getElementById('displayTotal').innerText = `R$ ${totalVendasAcumulado.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`;
    document.getElementById('displayEstoque').innerText = estoqueAtual;

    alert(`✅ Venda de R$ ${totalVenda.toFixed(2)} confirmada para ${nomeCliente}!`);
    
    // CHAMADA DA FUNÇÃO DE LIMPEZA (Eles devem criar ou completar)
    limparFormulario();
}

/**
 * FUNÇÃO AUXILIAR: Limpa os campos para a próxima venda
 */
function limparFormulario() {
    document.getElementById('cliente').value = "";
    document.getElementById('valorUnitario').value = "";
    document.getElementById('quantidade').value = "";
    document.getElementById('vip').checked = false;
}