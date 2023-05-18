FROM node:18-alpine

WORKDIR /opt/app

COPY ./package*.json .

RUN apk add --update npm && npm install && apk add curl

COPY . .

EXPOSE 3000

HEALTHCHECK --interval=10s --timeout=10s --retries=3 \
  CMD curl -f http://localhost:3000/ || exit 1

CMD ["npm", "start"]