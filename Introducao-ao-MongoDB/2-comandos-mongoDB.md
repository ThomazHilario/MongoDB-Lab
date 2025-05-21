# Realizando Crud com comandos do MongoDB:

## Comandos para inserir um ou mais dados no MongoDB (Create):
- db.collection.insertOne(): Insere um único documento em uma collection.
- db.collection.insertMany(): Insere vários documentos em uma coleção.

## Comandos para buscar um ou mais dados no MongoDB (Read):
- db.collection.find(): Busca todos os dados na collection.
- db.collection.find({}): Busca todos os dados em uma collection com base no filtro dentro do método find.
- db.collection.find({property: {$in:["value1", "value2"]}}): Busca de dados utilizando o operador $in. O in faz com que a busca seja de acordo com o valor passado, no exemplo busca dados de acordo com os valores que contem na propriedade value1 ou value2.
- db.collection.find({value: {$gt:10}}): Busca dados no qual a propriedade value seja maior que 10. O fator determinante para isso é o operador $gt
- db.collection.find({value: {$lt:10}}): Busca dados no qual a propriedade value seja menor que 10. O fator determinante para isso é o operador $lt
- db.collection.find($or: [{value: {$gt: 10}}, {value: {$lt: 50}}]): Buscar dados com base no operador $or, que busca dados com base entre um valor e outro.
- Obs: Para visualizar os dados formatados podemos utilizar o método pretty() depois do método de busca. (Uso no terminal)

## Comandos para Atualizar um ou mais dados no MongoDB (Update):
- db.collection.updateOne({_id: 1}, {$set: { property: "new value" }}): Atualizando um registro no MongoDB.
- db.collection.updateMany({categories: "react", { $set: { property: "new value" } }}): Atualiza a propriedade de todos os dados do mongoDB que pertencem a categoria react.
- db.collection.replaceOne({ _id:120 }, {name: "new name"}): Troca os dados existentes de uma registro por outro.
- db.collection.updateOne({ -id:120 }, {$push: {categories: "value"}}): Atualiza uma propriedade que é um array, adicionando o novo valor a este array.

## Comandos para Deletar um ou mais dados no MongoDB (Delete):
- db.collection.deleteOne({ _id:1 }): Deleta o registro de dado que tem o id 1.
- db.collectiondeleteOne(): Deleta vários registro de dados com base no filtro passado.

## Outros operadores:
- $gte: Busca dados no qual tem o valor igual ou maior que.
- $lte: Busca dados no qual tem o valor igual ou menor que.
- $ne: Tras dados com valores diferentes do escolhido pelo operador.
- $exist: Retorna dados que possuem determinado campo

### OBS:
- Todos os comandos acima são muito mais utilizados no terminal do que em sí em um código, claro que alguns dos comandos acima irão se assemelhar durante o desenvolvimento de uma api utilizando linguagens de programação.