const express = require('express')
const app = express()
const port = 3000

// //const alunos = [
//   {id: 1, nome: "Joh", idade: 18},
//   {id: 2, nome: "Saara", idade: 17},
//   {id: 3, nome: "Cathayssa", idade: 23},
// ]*//

let frutas = [
  {id: 1, nome: "Cereja", cor: "Vermelha"},
  {id: 2, nome: "Uva", cor: "Roxa"},
  {id: 3, nome: "Laranja", cor: "Laranja"},
  {id: 4, nome: "Limão", cor: "Verde"},
]

//app.get('/', (req, res) => {
 // res.send('Hello World!')
//})

app.get('/alunos/getAll', (req, res) => {
  res.json({
       sucess: true,
       data: alunos
  })
})

app.get('/frutas/getAll', (req, res) => {
  res.json({
       sucess: true,
       data: frutas
  })
})

app.get('/alunos/getAll', (req, res) => {
  res.json({
       sucess: true,
       data: alunos
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})