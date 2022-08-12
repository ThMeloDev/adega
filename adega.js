const adega = [
    {
        nome: 'Portada Reserva Vinho Regional Lisboa 2018',
        quantidade: 1,
        tipo: 'T'
    },
    {
        nome: 'Los Caserones Vinho Tinto',
        quantidade: 2,
        tipo: 'T'
    },
    {
        nome: 'Pirueta Cabernet Sauvignon 2021',
        quantidade: 3,
        tipo: 'T'
    },
    {
        nome: 'Alísios Pinot Grigio 2021',
        quantidade: 4,
        tipo: 'B'
    },
    {
        nome: 'Mestre André Vinho Branco',
        quantidade: 5,
        tipo: 'B'
    },
    {
        nome: 'Cruzeiro Vinho Verde DOC',
        quantidade: 3,
        tipo: 'B'
    },
    {
        nome: "Portada Winemaker's Selection Rosé 2020",
        quantidade: 2,
        tipo: 'R'
    },
    {
        nome: 'Flor de Sal IV Bronze Aragonez Touriga',
        quantidade: 2,
        tipo: 'R'
    },
    {
        nome: 'Alto Lima Rosé Vinho Verde DOC 2020',
        quantidade: 3,
        tipo: 'R'
    }
]



const vinhosTintos = []
const vinhosBrancos = []
const vinhosRoses = []
const outrosVinhos = []

let quantidadeTotalDeVinhos = 0
let quantidadeDeVinhosTintos = 0
let quantidadeDeVinhosBrancos = 0
let quantidadeDeVinhosRoses = 0
let quantidadeDeOutrosVinhos = 0

adega.forEach(vinho => {
    quantidadeTotalDeVinhos += vinho.quantidade
    if (vinho.tipo == 'T'){
      vinhosTintos.push(vinho)
      quantidadeDeVinhosTintos += vinho.quantidade
    }   
    else if (vinho.tipo == 'B'){
        vinhosBrancos.push(vinho)
        quantidadeDeVinhosBrancos += vinho.quantidade
    } 
    else if (vinho.tipo == 'R'){
        vinhosRoses.push(vinho)
        quantidadeDeVinhosRoses += vinho.quantidade
    } 
    else{
        outrosVinhos.push(vinho)
        quantidadeDeOutrosVinhos+= vinho.quantidade
    } 
});

let comando = ''
let porcentagemTintos = 0
let porcentagemBrancos = 0
let porcentagemRoses = 0
let porcentagemOutros = 0

while(comando !== 'F'){
    comando = prompt('Você quer informação de qual tipo de vinhos?\nT: TINTO\nB: BRANCO\nR: ROSE\nO: OUTROS\n\nA: ADICIONAR VINHO\nF: SAIR').toUpperCase()

    switch(comando){
        case 'T':
            console.log('--- VINHOS TINT0S ---')
            if(quantidadeDeVinhosTintos != 0){
                porcentagemTintos = (quantidadeDeVinhosTintos/quantidadeTotalDeVinhos)*100
                
                vinhosTintos.forEach(vinho => {
                    console.log(`Vinho: ${vinho.nome}\nQuantidade: ${vinho.quantidade}`)
                });
               
                console.log(`Quantidade Total: ${quantidadeDeVinhosTintos}\nPorcentagem de vinhos tintos: ${porcentagemTintos.toFixed(2)}%`)
            }else{
                console.log(`Quantidade Total: 0\nPorcentagem de vinhos tintos: 0%`)
            }
            
            
            break
        case 'B':
            console.log('--- VINHOS BRANCOS ---')
            if(quantidadeDeVinhosBrancos != 0){
                porcentagemBrancos = (quantidadeDeVinhosBrancos/quantidadeTotalDeVinhos)*100

                vinhosBrancos.forEach(vinho => {
                    console.log(`Vinho: ${vinho.nome}\nQuantidade: ${vinho.quantidade}`)
                })

                console.log(`Quantidade Total: ${quantidadeDeVinhosBrancos}\nPorcentagem de vinhos brancos: ${porcentagemBrancos.toFixed(2)}%`)
            }else{
                console.log(`Quantidade Total: 0\nPorcentagem de vinhos brancos: 0%`)
            }
            break
        case 'R':
            console.log('--- VINHOS ROSES ---')
            if(quantidadeDeVinhosRoses != 0){
                porcentagemRoses = (quantidadeDeVinhosRoses/quantidadeTotalDeVinhos)*100

                vinhosRoses.forEach(vinho => {
                    console.log(`Vinho: ${vinho.nome}\nQuantidade: ${vinho.quantidade}`)
                })

                console.log(`Quantidade Total: ${quantidadeDeVinhosRoses}\nPorcentagem de vinhos roses: ${porcentagemRoses.toFixed(2)}%`)
            }else{
                console.log(`Quantidade Total: 0\nPorcentagem de vinhos roses: 0%`)
            }
            break
        case 'O':
            console.log('--- OUTROS VINHOS ---')
            if(quantidadeDeOutrosVinhos != 0){
                porcentagemOutros = (quantidadeDeOutrosVinhos/quantidadeTotalDeVinhos)*100

                outrosVinhos.forEach(vinho => {
                    console.log(`Vinho: ${vinho.nome}\nQuantidade: ${vinho.quantidade}`)
                })

                console.log(`Quantidade Total: ${quantidadeDeOutrosVinhos}\nPorcentagem de outros vinhos: ${porcentagemOutros.toFixed(2)}%`)
            }else{
                console.log(`Quantidade Total: 0\nPorcentagem de vinho tinto: 0%`)
            }
            break
        case 'A':
            let estaNoEstoque = prompt('Esse vinho já tem no estoque? (S,N) ').toUpperCase()
            if(estaNoEstoque == 'S'){
                let tipoDoVinho = ''
                let posicaoDoVinho = 0
                let quantidade = 0
                let nome = ''
                while( tipoDoVinho != 'T' && tipoDoVinho != 'B' && tipoDoVinho != 'R' && tipoDoVinho != 'O'  ){
                    console.log(tipoDoVinho)
                    tipoDoVinho = prompt('Qual o tipo do vinho?\nT: TINTO\nB:BRANCO\nR: ROSE\nO: OUTRO').toUpperCase()
                    switch (tipoDoVinho){
                        case 'T':
                            for (let i = 0; i < vinhosTintos.length; i++) {
                                console.log(`${i}: ${vinhosTintos[i].nome}`)   
                            }
                            posicaoDoVinho = Number(prompt('Digite o número do vinho que você quer adicionar: '))
                            nome = vinhosTintos[posicaoDoVinho].nome
                            quantidade = Number(prompt('Quantos vinhos você quer adicionar: '))
                            for (let i = 0; i < adega.length; i++) {
                                if(adega[i].nome == nome){
                                    adega[i].quantidade += quantidade
                                    break;
                                }
                            }
                            quantidadeTotalDeVinhos += quantidade
                            quantidadeDeVinhosTintos += quantidade
                            
                            break;
                        case 'B':
                            for (let i = 0; i < vinhosBrancos.length; i++) {
                                console.log(`${i}: ${vinhosBrancos[i].nome}`)   
                            }
                            posicaoDoVinho = Number(prompt('Digite o número do vinho que você quer adicionar: '))
                            nome = vinhosBrancos[posicaoDoVinho].nome
                            quantidade = Number(prompt('Quantos vinhos você quer adicionar: '))
                            for (let i = 0; i < adega.length; i++) {
                                if(adega[i].nome == nome){
                                    adega[i].quantidade += quantidade
                                    break;
                                }
                            }
                            quantidadeTotalDeVinhos += quantidade
                            quantidadeDeVinhosBrancos += quantidade
                            
                            break;
                        case 'R':
                            for (let i = 0; i < vinhosRoses.length; i++) {
                                console.log(`${i}: ${vinhosRoses[i].nome}`)   
                            }
                            posicaoDoVinho = Number(prompt('Digite o número do vinho que você quer adicionar: '))
                            nome = vinhosRoses[posicaoDoVinho].nome
                            quantidade = Number(prompt('Quantos vinhos você quer adicionar: '))
                            for (let i = 0; i < adega.length; i++) {
                                if(adega[i].nome == nome){
                                    adega[i].quantidade += quantidade
                                    break;
                                }
                            }
                            quantidadeTotalDeVinhos += quantidade
                            quantidadeDeVinhosRoses += quantidade
                            
                            break;
                        case 'O':
                            for (let i = 0; i < outrosVinhos.length; i++) {
                                console.log(`${i}: ${outrosVinhos[i].nome}`)   
                            }
                            posicaoDoVinho = Number(prompt('Digite o número do vinho que você quer adicionar: '))
                            nome = outrosVinhos[posicaoDoVinho].nome
                            quantidade = Number(prompt('Quantos vinhos você quer adicionar: '))
                            for (let i = 0; i < adega.length; i++) {
                                if(adega[i].nome == nome){
                                    adega[i].quantidade += quantidade
                                    break;
                                }
                            }
                            quantidadeTotalDeVinhos += quantidade
                            quantidadeDeOutrosVinhos += quantidade
                            break;
                        default:
                            console.log('TIPO DE VINHO NÃO ENCONTRADO')
                    }
                }
            }
            else{
                let nomeDoVinho = prompt('Digite o nome do vinho: ')
                let tipoDoVinho = prompt('Digite o tipo do vinho: ').toUpperCase()
                let quantidadeDoVinho = Number(prompt('Digite a quantidade de vinhos: '))
                adega.push({nome: nomeDoVinho,quantidade: quantidadeDoVinho, tipo: tipoDoVinho})
                quantidadeTotalDeVinhos++
                switch(tipoDoVinho){
                    case 'T':
                        vinhosTintos.push({nome: nomeDoVinho, quantidade: quantidadeDoVinho, tipo: tipoDoVinho})
                        quantidadeDeVinhosTintos += quantidadeDoVinho
                        break
                    case 'B':
                        vinhosBrancos.push({nome: nomeDoVinho,quantidade: quantidadeDoVinho, tipo: tipoDoVinho})
                        quantidadeDeVinhosBrancos += quantidadeDoVinho
                        break;
                    case 'R':
                        vinhosRoses.push({nome: nomeDoVinho, quantidade: quantidadeDoVinho, tipo: tipoDoVinho})
                        quantidadeDeVinhosRoses += quantidadeDoVinho
                        break
                    default:
                        outrosVinhos.push({nome: nomeDoVinho, quantidade: quantidadeDoVinho, tipo: tipoDoVinho})
                        quantidadeDeOutrosVinhos += quantidadeDoVinho
                }
            }
        case  'F':
            break
        default:
            console.log('Opção Inválidas')
        
    }


}

console.log(`Quantidade Total de Vinhos no Estoque: ${quantidadeTotalDeVinhos}`)



