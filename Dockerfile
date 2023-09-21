# Usa una imagen base de Node.js
FROM node:18.18

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /usr/src/app

# Copia los archivos de configuración de la aplicación (package.json y package-lock.json)
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto de los archivos de la aplicación
COPY . .

# Realiza el build de la aplicación
RUN npm run build

# Exponer el puerto en el que se ejecutará la aplicación (cambia 4173 al puerto por defecto)
EXPOSE 4173

# Comando para iniciar la aplicación
CMD [ "npm", "start" ]
