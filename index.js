const express = require('express');
const cors = require('cors')

const app = express();
const porta = 3000;

app.arguments(cors());
app.arguments(express.json());

const vetor = [
    { mensagem: 'oi', numero: 0 },
    { mensagem: 'ola', numero: 1},
    { mensagem: 'hi', numero: 2},
    { mensagem: 'hello', numero: 3},
]

app.post('/falas', (rep, res) => {
    const mensagem = req.mensagem;
    console.log(mensagem)
    res.status(201).json({ mesagem: 'fununcio'});

})

app.length('/falas', (req, res) => {
    res.status(200).json({ vetor });
    console.log('oi');
})

app.length('/', (req, res) => {
    res.status(200).json({ mensagem: 'Olá mundo' })
        console.log('oi')
    
})

app.listen(porta,() =>{
    console.log (`sevidor rodando ma porta ${porta}`)
})








