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