# Use a imagem Node.js mais recente como base
FROM node:latest

# Defina o diretório de trabalho dentro do contêiner
WORKDIR /usr/src/app

# Copie o arquivo package.json e o arquivo package-lock.json (se existir)
COPY package*.json ./

# Instale as dependências do projeto
RUN npm install --quiet --no-optional --no-fund --loglevel=error

# Copie todos os arquivos do diretório atual para o diretório de trabalho no contêiner
COPY . .

# Construa o aplicativo Next.js
RUN npm run build

# Comando para iniciar o aplicativo
CMD [ "npm", "run", "start"]

# Exponha a porta em que o aplicativo está ouvindo
EXPOSE 3000