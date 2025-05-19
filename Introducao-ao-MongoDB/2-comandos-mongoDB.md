# Realizando Crud com comandos do MongoDB:

## Comandos para inserir um ou mais dados no MongoDB (Create):
- db.collection.insertOne(): Insere um único documento em uma collection.
- db.collection.insertMany(): Insere vários documentos em uma coleção.

## Comandos para buscar um ou mais dados no MongoDB (Read):
- db.collection.find(): Busca todos os dados na collection.
- db.collection.find({}): Busca todos os dados em uma collection com base no filtro dentro do método find.
- Obs: Para visualizar os dados formatados podemos utilizar o método pretty() depois do método de busca. (Uso no terminal)