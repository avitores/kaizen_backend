# Kaizen backend API por Alfonso Vítores.

## Características

- **Truetype** 
- **Nodejs** 
- **API Rest** 
- **Docker** 
- **Jest** 
- **Swagger** 


## Inicio 

```
npm init -y
npm install express @types/express typescript ts-node @types/node
```

```
npm install joi --save
npm install http-status-codes --save
```


## Confirguración de Typescript

"tsconfig.json"

```
npx tsc --init
```

## Source

- **Server** 
- **Modelos** (Task)
- **Rutas** (CRUD)
- **Controladores** 
- **Servicios** 


## Docker

- Docker
- docker-compose.yml

```
docker-compose build
docker-compose up
```

## Rutas

- GET http://localhost:3000/api/v1/tasks
- GET http://localhost:3000/api/v1/task/:id
- POST http://localhost:3000/api/v1/task/
- PUT http://localhost:3000/api/v1/task/:id
- DELETE http://localhost:3000/api/v1/task/:id

## Postman

Public Workspace para testing

> https://www.postman.com/dev-ava/workspace/kaizen-tasks-api


## Ejemplo JSON BODY

```
{
    "title": "Poner la lavadora",
    "description": "Meter la ropa sucia, echar detergente, poner suavizante, ajustar el programa y darle al boton de empezar"
}
```

## Test unitarios (Jest)

```
npm install --save-dev ts-jest supertest
npm install -D jest ts-jest @types/jest @jest/globals
```

```
npx ts-jest config:init
```

```
npm test welcome
npm test task.routes
```
## Documentación por Swagger

```
npm install swagger-autogen swagger-ui-express @types/swagger-ui-express
```
