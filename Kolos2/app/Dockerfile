FROM alpine:latest 

WORKDIR /app

RUN apk add --no-cache nodejs npm 

COPY package*.json ./


RUN npm install

HEALTHCHECK --interval=10s --timeout=10s --retries=3 \
  CMD curl -f http://localhost:3000/user || exit 1

COPY . .