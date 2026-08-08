# API REST de Productos

Práctica desarrollada con Node.js, Express, MongoDB, Mongoose, Dotenv y Arquitectura MVC para la gestión de productos. La base de datos MongoDB se ejecuta en un contenedor Docker. La práctica cumple los requisitos establecidos en el enunciado de la asignación. 【1-857eec】

---

## Tecnologías utilizadas

- Node.js
- Express
- MongoDB
- Mongoose
- Docker
- Docker Compose
- Dotenv
- Nodemon

---

## Arquitectura MVC

El proyecto está organizado siguiendo el patrón MVC (Model View Controller).

```text
├── config
│   └── db.js
│
├── controllers
│   └── productController.js
│
├── models
│   └── Product.js
│
├── routes
│   └── productRoutes.js
│
├── .env
├── .gitignore
├── app.js
├── Dockerfile
├── docker-compose.yml
├── package.json
└── README.md
```

### Model

Define la estructura de los datos y las validaciones.

```text
models/Product.js
```

### Controller

Contiene la lógica de negocio para las operaciones CRUD.

```text
controllers/productController.js
```

### Routes

Define los endpoints de la API.

```text
routes/productRoutes.js
```

### Config

Administra la conexión con MongoDB.

```text
config/db.js
```

---

## Modelo de Producto

```json
{
  "nombre": "Laptop HP",
  "descripcion": "Ryzen 7",
  "precio": 45000,
  "categoria": "Computadoras",
  "stock": 10,
  "disponible": true
}
```

Campos:

| Campo | Tipo |
|---------|---------|
| nombre | String |
| descripcion | String |
| precio | Number |
| categoria | String |
| stock | Number |
| disponible | Boolean |

---

## Configuración del entorno

Archivo `.env`

```env
PORT=3000
MONGODB_URI=mongodb://localhost:27017/productosdb
```

---

# Instalación

## 1. Clonar el repositorio

```bash
git clone git@github.com:Angelslebron/API-Rest-NodeJS-MVC-Architecture.git
```

```bash
cd api-productos
```

---

## 2. Instalar dependencias

```bash
npm install
```

---

## 3. Iniciar MongoDB en Docker

Levantar el contenedor:

```bash
docker compose up -d
```

Verificar:

```bash
docker ps
```

---

## 4. Ejecutar la API

Modo desarrollo:

```bash
npm run dev
```

Modo producción:

```bash
npm start
```

---

# Endpoints

## Obtener todos los productos

```http
GET /api/productos
```

---

## Obtener producto por ID

```http
GET /api/productos/:id
```

Ejemplo:

```http
GET /api/productos/68952d74e4c40d5135f3b5f7
```

---

## Registrar producto

```http
POST /api/productos
```

Body:

```json
{
  "nombre": "Laptop HP",
  "descripcion": "Ryzen 7",
  "precio": 45000,
  "categoria": "Computadoras",
  "stock": 10,
  "disponible": true
}
```

---

## Actualizar producto

```http
PUT /api/productos/:id
```

Body:

```json
{
  "precio": 50000,
  "stock": 20
}
```

---

## Eliminar producto

```http
DELETE /api/productos/:id
```

---

# Flujo de la aplicación

```text
Postman
   │
   ▼
Routes
   │
   ▼
Controllers
   │
   ▼
Models (Mongoose)
   │
   ▼
MongoDB (Docker)
   │
   ▼
Respuesta JSON
```

---

# Pruebas realizadas

La API fue probada utilizando Postman ejecutando las operaciones CRUD:

- Crear producto (POST)
- Obtener productos (GET)
- Obtener producto por ID (GET)
- Actualizar producto (PUT)
- Eliminar producto (DELETE)

Todas las respuestas son devueltas en formato JSON. 【1-857eec】

---

# Autor

**Angel Duarte Montero Lebron**
