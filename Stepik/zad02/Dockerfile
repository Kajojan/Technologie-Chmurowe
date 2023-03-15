FROM node:14

WORKDIR /app

COPY package*.json ./
COPY server.js ./

RUN npm install

EXPOSE 8080

CMD [ "npm", "start" ]