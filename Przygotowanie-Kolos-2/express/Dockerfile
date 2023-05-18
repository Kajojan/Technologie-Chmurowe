FROM alpine:latest 

WORKDIR /app

RUN apk add --no-cache nodejs npm 

COPY package*.json ./


RUN npm install

COPY . .