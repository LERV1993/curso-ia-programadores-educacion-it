# Usar una imagen base de Node.js
FROM node:18-alpine

# Establecer el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar los archivos de configuración de dependencias
COPY package.json package-lock.json ./

# Instalar las dependencias
RUN npm install --production

# Copiar el resto del código de la aplicación
COPY . .

# Exponer el puerto en el que la aplicación escucha
EXPOSE 4000

# Comando para ejecutar la aplicación
CMD ["node", "src/index.js"]