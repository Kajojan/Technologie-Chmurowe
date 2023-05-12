FROM node:18-alpine

WORKDIR /app

COPY package*.json .

RUN apk add --update npm

RUN npm install

COPY . .

EXPOSE 3000
