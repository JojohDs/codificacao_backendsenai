import express from 'express'

const app = express ();
const PORT = 3000

let animais = [
{id: 1, nome:"Blue", especie:"cachorro"},
{id: 2, nome:"Sansa", especie:"coelho"},
{id: 3, nome:"Mimi", especie:"gato"},
{id:4, nome:"Lua", especie:"égua"},
]

animais.get('/animais/getAll', (req, res) => {
    res.json({
        sucess: true,
        data: animais,
    })
})

animais.listen(PORT, () => {
    console.log(' O server está conectado em: http://localhost:3000:${PORT}')
});
