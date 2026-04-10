# Vehicles API - NestJS

API RESTful para gerenciamento de veículos desenvolvida com NestJS.

## Tecnologias

* Node.js
* NestJS
* Jest
* Docker

## Funcionalidades

* CRUD de veículos
* Testes unitários
* API RESTful

## Como rodar

```bash
npm install
npm run start:dev
```

## Testes

```bash
npm run test
```

## Docker

```bash
docker build -t vehicles-api .
docker run -p 3000:3000 vehicles-api
```

## 📬 Exemplos de uso da API

### ➕ Criar veículos (POST /vehicles)

```bash
POST http://localhost:3000/vehicles
```

### Body (JSON) - Exemplo 1

```json
{
  "placa": "ABC1234",
  "chassi": "9BWZZZ377VT004251",
  "renavam": "12345678901",
  "modelo": "Civic",
  "marca": "Honda",
  "ano": 2020
}
```

### Body (JSON) - Exemplo 2

```json
{
  "placa": "DEF5678",
  "chassi": "8AD3CN6B48G123456",
  "renavam": "98765432100",
  "modelo": "Corolla",
  "marca": "Toyota",
  "ano": 2022
}
```

### Body (JSON) - Exemplo 3

```json
{
  "placa": "GHI9012",
  "chassi": "3VWFE21C04M000001",
  "renavam": "45612378900",
  "modelo": "Gol",
  "marca": "Volkswagen",
  "ano": 2018
}
```

### Body (JSON) - Exemplo 4

```json
{
  "placa": "JKL3456",
  "chassi": "1HGCM82633A123456",
  "renavam": "32165498700",
  "modelo": "Onix",
  "marca": "Chevrolet",
  "ano": 2021
}
```

### Body (JSON) - Exemplo 5

```json
{
  "placa": "MNO7890",
  "chassi": "5YJ3E1EA7JF000000",
  "renavam": "78912345600",
  "modelo": "Model 3",
  "marca": "Tesla",
  "ano": 2023
}
```
---

### Listar veículos

```bash
GET http://localhost:3000/vehicles
```

---

### Buscar veículo por ID

```bash
GET http://localhost:3000/vehicles/{id}
```

---

### Atualizar veículo

```bash
PUT http://localhost:3000/vehicles/{id}
```

---

### Remover veículo

```bash
DELETE http://localhost:3000/vehicles/{id}
```
