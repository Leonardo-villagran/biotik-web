# Dockerfile para el frontend
FROM node:latest
# Crear y establecer el directorio de trabajo
WORKDIR /app

# Instalar la última versión de npm globalmente
RUN npm install -g npm@latest

# Instalar el servidor web de Node.js
RUN npm rebuild esbuild

# Copiar los archivos necesarios y el package.json
COPY package*.json ./

# Instalar las dependencias
RUN npm install

# Copiar el resto de los archivos del frontend
COPY . .

RUN npm run build

EXPOSE 3000

# Servir los archivos estáticos del build con el servidor web incorporado de Node.js
CMD ["npx", "serve", "-s", "dist"]
