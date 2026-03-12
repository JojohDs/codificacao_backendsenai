const express = require('express')
const app = express()
const port = 3000

let alunos = [
   {id: 1, nome: "Joh", idade: 18},
   {id: 2, nome: "Saara", idade: 17},
   {id: 3, nome:"Cathayssa", idade: 23},
 ]

//app.get('/', (req, res) => {
  //res.send('Hello World!')
//})

app.get('/alunos/:id', (req, res) => {
  const id = parseInt(req.params.id)
  const aluno = alunos.find(a => a.id === id)
        if (!aluno) {
            return res.status(404).json({
                success: false,
                message: 'aluno não encontrado'
            })
        }

        res.json({
            success: true,
            data: aluno
        })
  })



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.post('/alunos', (req, res) => {
    const{ nome, idade } = req.body
       if(!nome || !idade){
         return res.status(404).json({
          success: false,
          menssage: 'nome e idade são obrigatorios'
         })
       }

       const novoAluno = {
        id: alunos.legth + 1,
        nome, 
        idade
       }

       aluno.post(novoAluno)

       res.status(201).json({
        success: true,
        data: novoAluno,
        menssage: 'certo'
       })
})  
   