const express = require('express');
const routes = express.Router();
const UserController = require('./Controller/User')

//Index =Listagem 
//Show = Visualizar os dados gravados
//Store = Gravar
//Destroy = Delete
//este exemplo é o mesmo da segundo exemplo só que simpificado
//app.get('/', (req, res) => res.send('Hello World!'));

//este exemplo completo de uma reuqisição simples
routes.get('/',function(req, res){
    res.send("Hello word");
})

//este exemplo de get onde traz um usuario com base no id passado
routes.get('/users/:id', UserController.show);

//Get => Buscar info -- Select para listagem de infos
//req.query = acessar a query ou params (filtros)
//localhost:3000/?idade=37&sexo=M
routes.get('/users',UserController.index);

//Methodo POST // Create -- Gravação
//Formulario de login e senha  por exemplo
// vai enviar o login e a senha no corpo da requisição
routes.post('/users', UserController.store);

//Mehodo PUT é usado para fazer o update para atualizar os dados do banco de dados
// localhost:3000/users/5
routes.put('/users/:id', UserController.update);

//Methodo Delete - Serve para deletar um registro
routes.delete('/users/:id',UserController.destroy);

module.exports = routes;