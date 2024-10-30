const cors = require('cors');
const express = require('express');
const admin = require('firebase-admin')

const serviceAccount = {
    type: "service_account",
    project_id: "bananamaca-bdf69",
    private_key_id: "9310d86453b087fd5e003ab8c922fd6d1e6db050",
    private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCaXyxWEu63XGnv\nk6+hAXkRRmWlRHxj6zRcH6/H6cLTLLKQZsy5+PktcMghW8SGa/KeZoZe/pJYezij\n/ToLA3WMUPdkFN0yUzU8jgtNxfCYNBBKa1bOXcAQ5Ms+OFA+tiNj/MH6i5ULFgEP\nJAwys2eLm7BtX67og/LwcC4v1eq+ZHM3/A8OYJfIDz0FA9aSbtavxZw4j5ltaQ8w\nd7isArgqPq/ySOZcDhvc13L5Jh6CEK2HSJDuHL36hVFo78kmcPOoKxWMB4yD/DYs\nXElBZ0K4onG7kTW/CGDAFFywnFowodPAjQTV3uydEGm7uoa1sRdEAyXsnVQ3xlxi\nGFJSXi5JAgMBAAECggEAG16faj1eFKVuZNsu6uFreSwdjnE3irGjbWfyzwN7ltxY\nZnDLgHeLmkpiOUPfcqPF9t6fmU0SXlyufKjDdztsRm3+hsCKPUdya2OVznq3Pw0Q\nDFm+oMUPbg9al5P9ajj5ylsAe27vBHGoy2ntPboANEjsvV+XD8OBOa7yCWoofgvj\nmlatRY1V5UIFiuALpuW/85ILLdTqrD+acdPYR52QFKS9405i3n80Y39pBcbXhz+w\nQbjGBdDJbLOava7KAgBZbECDyjwfVsw1wRxRpmpWilXtRky+zpaXLRnzhuFBxhIe\nvS8tOUCjXWeBlbOnznJPl/PKv4uSKOAXwHjbwRuXhwKBgQDUXitI+okI1AR6CDu9\nup5VVfWKXeEMBrijrJZp31t7vWStuJvufur3Zkdwtyi5P82Bi1ukG3evayS3R8Mr\nxVAzzqQr4cYvWCl4lGfMhA+w9AW7Xn96F78cwhzDaTMyTPq+3ox6p7itvtCNGe79\nHMKsTL456pkRuW0zs6Z5RmYntwKBgQC6FptBeSoc+uVSo0wI3wKTf4JvS1yufUyA\nPNqTHw5fyvynOKrLUV12phb/fRftILP20rErStrrbi+EJXsZbH0QmwNFY7YFeY/R\nRaRiatUvd/8xUZno9z4I1QSd5fq01NEGBs7tBzBgr61C+gy4AWHR+GrbQZUuZtAH\nhZ3726JZ/wKBgFziMxxgN79cu/iD0V1SWh4I0rQKC3wvFGLCAaecwW6Fj5tLuye8\n6xf57BUohu8/MKsQQKyuNtLKkex3vq1OR53hK3zl6sCaVskeX6fbuuEyWa9xzV+h\nMz1oyRvOz02YzbLds6OR5/xWEPEl/plGEv85MZozOW+/IjwSvyUb3WJRAoGAfpc4\nYO7zJinL7U6nP/Wtw/dfHSUQVKdqbmZ3btQWrDXjcEKNdajRQxCz3nQT3b18j7E+\n0yumB7i6XFQ/DMmPvsclD4RIZCsRGhUdQdJZWmRwVvWjFSd0rP90l5HG3lNUKpxh\nEj/suiloXYLLOjW+fN9YmfVgbeOFK0jLc3UzWbMCgYBBPUACOvnA1ZSbFLNj+XV5\nMs1w+PVQdcZHJWZjvIotJvUAJDNYMOX1ku+MhJpwU234AT2CMZaRMPGkJ5ys6QDU\ndDqr3RzAk5+LWkwgFeRaLQn0B24UuMZ9qfjbrk2awch8mBGGeNGZ8+ENgJD9Jx6H\nr4XpyP6SmU4p6mfF8Hry2g==\n-----END PRIVATE KEY-----\n",
    client_email: "firebase-adminsdk-yptcq@bananamaca-bdf69.iam.gserviceaccount.com",
    client_id: "107893444605566400444",
    auth_uri: "https://accounts.google.com/o/oauth2/auth",
    token_uri: "https://oauth2.googleapis.com/token",
    auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
    client_x509_cert_url: "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-yptcq%40bananamaca-bdf69.iam.gserviceaccount.com",
    universe_domain: "googleapis.com"
}


admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
})
const bd = admin.firestore()

const app = express();

app.use(cors());
app.use(express.json());

// let produtos = [
//     {
//         nome: "CARTAO1",
//         valor: "R$9,99",
//         img: 'https://services.meteored.com/img/article/o-misterio-da-antimateria-solucionado-novo-experimento-comprova-como-a-antimateria-interage-1695942655165_1280.png'
//     },
//     {
//         nome: "CARTAO2",
//         valor: "R$14,50",
//         img: 'https://services.meteored.com/img/article/o-misterio-da-antimateria-solucionado-novo-experimento-comprova-como-a-antimateria-interage-1695942655165_1280.png'
//     },
//     {
//         nome: "CARTAO3",
//         valor: "R$25,00",
//         img: 'https://services.meteored.com/img/article/o-misterio-da-antimateria-solucionado-novo-experimento-comprova-como-a-antimateria-interage-1695942655165_1280.png'
//     },
//     {
//         nome: "CARTAO4",
//         valor: "R$34,90",
//         img: 'https://services.meteored.com/img/article/o-misterio-da-antimateria-solucionado-novo-experimento-comprova-como-a-antimateria-interage-1695942655165_1280.png'
//     },
//     {
//         nome: "CARTAO5",
//         valor: "R$49,99",
//         img: 'https://services.meteored.com/img/article/o-misterio-da-antimateria-solucionado-novo-experimento-comprova-como-a-antimateria-interage-1695942655165_1280.png'
//     },
//     {
//         nome: "CARTAO6",
//         valor: "R$59,00",
//         img: 'https://services.meteored.com/img/article/o-misterio-da-antimateria-solucionado-novo-experimento-comprova-como-a-antimateria-interage-1695942655165_1280.png'
//     },
//     {
//         nome: "CARTAO7",
//         valor: "R$79,99",
//         img: 'https://services.meteored.com/img/article/o-misterio-da-antimateria-solucionado-novo-experimento-comprova-como-a-antimateria-interage-1695942655165_1280.png'
//     },
//     {
//         nome: "CARTAO8",
//         valor: "R$99,90",
//         img: 'https://services.meteored.com/img/article/o-misterio-da-antimateria-solucionado-novo-experimento-comprova-como-a-antimateria-interage-1695942655165_1280.png'
//     },
//     {
//         nome: "CARTAO9",
//         valor: "R$129,50",
//         img: 'https://services.meteored.com/img/article/o-misterio-da-antimateria-solucionado-novo-experimento-comprova-como-a-antimateria-interage-1695942655165_1280.png'
//     },
//     {
//         nome: "CARTAO10",
//         valor: "R$199,99",
//         img: 'https://services.meteored.com/img/article/o-misterio-da-antimateria-solucionado-novo-experimento-comprova-como-a-antimateria-interage-1695942655165_1280.png'
//     },
//     {
//         nome: "CARTAO11",
//         valor: "R$299,00",
//         img: 'https://services.meteored.com/img/article/o-misterio-da-antimateria-solucionado-novo-experimento-comprova-como-a-antimateria-interage-1695942655165_1280.png'
//     },
//     {
//         nome: "CARTAO12",
//         valor: "R$49,99",
//         img: 'https://services.meteored.com/img/article/o-misterio-da-antimateria-solucionado-novo-experimento-comprova-como-a-antimateria-interage-1695942655165_1280.png'
//     }
// ];

app.get('/produtos', async (req, res) => {
    try {
        const response = await bd.collection('cartao').get()
        const cartoes = response.docs.map(doc => ({
            id: doc.id, ...doc.data(),
        }))
        console.log(cartoes)
        res.status(200).json({ cartoes })

    } catch (e) {
        console.log(e)
    }

    res.status(200).json({ cartoes })
    console.log(bah)
})


app.post('/produtos', async (req, res) => {
    const { nome, valor, img } = req.body;
    if (!nome) {
        res.status(400).json({ mensagem: 'Nome do cartao invalida!' })
        console.log('novo cartao nao cadastrado, Nome invalida')
    } else if (!valor) {
        res.status(400).json({ mensagem: 'Valor do cartao invalido' })
        console.log('Novo cartao nao cadastrado, Valor invalido')
    } else if (!img) {
        res.status(400).json({ mesagem: 'Imagem do cartao invalida' })
        console.log('Novo cartao nao cadastrado, imagem invalida')
    } else {
        try {
            const novoCartaoRef = await bd.colletion('cartao').add({
                nome,
                valor,
                img,
                criadoEm: admin.firestore.FieldValue.serverTimestamp()
            })
            res.status(201).json({ mensagem: 'Cartao cadastrado com sucesso', id: novoCartaoRef })
            console.log('Novo cartao cadastrado com Id:', novoCartaoRef.id)
        } catch (erro) {
            console.error('Erro ao cadastrar cartao', erro)
            res.status(500).json({ mensagem: 'Erro ao cadastrar cartao' })
        }
    }
})

app.delete('/produtos', async (req, res) => {
    const id = req.body.cartao;
    if (!id) {
        res.status(400).json({ mensagem: 'ID do cartao nao fornecido' })
        console.log('Novo cartao nao cadastrado, o ID é obrigatorio')
    } else {
        try {
            const cartaoRef = bd.collection('cartao').doc(id)
            const doc = await cartaoRef.get()
            if (!doc.exists) {
                res.status(404).json({ mensagem: 'Cartao com Id ' + cartao + 'nao encontrado' })
                console.log('cartao nao encontrado')
            } else {
                await cartaoRef.delete()
                res.status(200).json({mensagem: 'Cartao com ID' + cartao + 'deletado' })
            }
        } catch (e) {
            console.error('Erro ao deletar o cartao', e)
            res.status(500).json({ mensagem: 'Erro ao deletar o cartao ' })
        }

    }
});

app.put('/produtos', async (req, res) => {
   const { nome, valor, img, id} = req.body
if(!id) {
    res.status(400).json({mensagem: 'ID do cartao nao fornecido'})
    console.log('Cartao nao atualizado, ID invalido.')
} else {
    try{ const cartaoRef = bd.collection('cartao').doc(id)
        const doc = await cartaoRef.get()
        if (!doc.exists) {
            res.status(404).json({mensagem: 'cartao com ID' + id + 'nao encontrado'})
            console.log('Cartao nao encontrado')
        } else{
            const dadosAtualizados = {}
            if (nome) dadosAtualizados.nome = nome
            if (valor) dadosAtualizados.valor = valor
            if (img) dadosAtualizados.img = img
            await cartaoRef.update(dadosAtualizados)
            res.status(200).json({mensagem: ' cartao com ID' + id + 'atualizado'})
            console.log('Cartao com ID' + id + 'Atualizado')
        }
    }catch (error) {
        console.error('Erro ao atualizar cartao', error)
        res.status(500).json({mensagem: 'Erro ao atualizar cartao'})
    }
    
}
});

module.exports = app

// app.listen(3000, () =>{
//     console.log('rodando')
// })