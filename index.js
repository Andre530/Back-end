const express = require('express');
const cors = require('cors');

const app = express();
const porta = 3000;

app.use(cors());
app.use(express.json());

let produtos = [
    {
        nome: "CARTAO1",
        valor: "R$9,99",
        img: 'https://services.meteored.com/img/article/o-misterio-da-antimateria-solucionado-novo-experimento-comprova-como-a-antimateria-interage-1695942655165_1280.png'
    },
    {
        nome: "CARTAO2",
        valor: "R$14,50",
        img: 'https://services.meteored.com/img/article/o-misterio-da-antimateria-solucionado-novo-experimento-comprova-como-a-antimateria-interage-1695942655165_1280.png'
    },
    {
        nome: "CARTAO3",
        valor: "R$25,00",
        img: 'https://services.meteored.com/img/article/o-misterio-da-antimateria-solucionado-novo-experimento-comprova-como-a-antimateria-interage-1695942655165_1280.png'
    },
    {
        nome: "CARTAO4",
        valor: "R$34,90",
        img: 'https://services.meteored.com/img/article/o-misterio-da-antimateria-solucionado-novo-experimento-comprova-como-a-antimateria-interage-1695942655165_1280.png'
    },
    {
        nome: "CARTAO5",
        valor: "R$49,99",
        img: 'https://services.meteored.com/img/article/o-misterio-da-antimateria-solucionado-novo-experimento-comprova-como-a-antimateria-interage-1695942655165_1280.png'
    },
    {
        nome: "CARTAO6",
        valor: "R$59,00",
        img: 'https://services.meteored.com/img/article/o-misterio-da-antimateria-solucionado-novo-experimento-comprova-como-a-antimateria-interage-1695942655165_1280.png'
    },
    {
        nome: "CARTAO7",
        valor: "R$79,99",
        img: 'https://services.meteored.com/img/article/o-misterio-da-antimateria-solucionado-novo-experimento-comprova-como-a-antimateria-interage-1695942655165_1280.png'
    },
    {
        nome: "CARTAO8",
        valor: "R$99,90",
        img: 'https://services.meteored.com/img/article/o-misterio-da-antimateria-solucionado-novo-experimento-comprova-como-a-antimateria-interage-1695942655165_1280.png'
    },
    {
        nome: "CARTAO9",
        valor: "R$129,50",
        img: 'https://services.meteored.com/img/article/o-misterio-da-antimateria-solucionado-novo-experimento-comprova-como-a-antimateria-interage-1695942655165_1280.png'
    },
    {
        nome: "CARTAO10",
        valor: "R$199,99",
        img: 'https://services.meteored.com/img/article/o-misterio-da-antimateria-solucionado-novo-experimento-comprova-como-a-antimateria-interage-1695942655165_1280.png'
    },
    {
        nome: "CARTAO11",
        valor: "R$299,00",
        img: 'https://services.meteored.com/img/article/o-misterio-da-antimateria-solucionado-novo-experimento-comprova-como-a-antimateria-interage-1695942655165_1280.png'
    },
    {
        nome: "CARTAO12",
        valor: "R$49,99",
        img: 'https://services.meteored.com/img/article/o-misterio-da-antimateria-solucionado-novo-experimento-comprova-como-a-antimateria-interage-1695942655165_1280.png'
    }
];

app.get('/produtos', (req, res) => {
    res.status(200).json({ produtos });
    console.log('deu certin')
});

app.post('/produtos', (req, res) => {
    const { nome, valor, img } = req.body;
    
    produtos.push({ nome: nome, valor: valor, img : img });
    console.log(vetor);
    res.status(201).json({ mensagem: 'é POST' });

});

app.delete('/fds', (req, res) => {
    const numero = req.body.numero;
    produtos.splice(numero, 1);
    console.log(vetor);
    res.status(201).json({ mensagem: 'é DELETE' });

});

app.put('/fds', (req, res) => {
    const numero = req.body.numero;
    const mensagem = req.body.mensagem;
    produtos[numero], mensagem = mensagem;
    console.log(vetor);
    res.status(201).json({ mensagem: 'é PUT' });

});

app.listen(porta, () => {
    console.log(`Servidor rodando na porta ${porta}`);
});