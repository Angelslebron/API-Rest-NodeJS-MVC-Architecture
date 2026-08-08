# API-Rest-NodeJS-MVC-Architecture
Repository which show an API rest with node JS and MVC architecture.

## previous requirements
- Node.js
- MongoDB (by Docker)

\`\`\`
npm install
\`\`\`

## enviroment variables
Create a file \`.env\` with:
MONGODB_URI=mongodb://localhost:27017/products_db

## Use
\`\`\`bash
npm run dev
\`\`\`

## Structure of the project

\`\`\`
api-/
├── config/
├── controllers/
├── models/
├── routes/
├── app.js
|___docker-compose.yml
|
└── package.json
\`\`\`