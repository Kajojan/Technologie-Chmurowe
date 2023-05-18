FROM arm64v8/node

ENV PORT=3000

WORKDIR /app

COPY package.json .

RUN npm install --production

COPY server.js .

EXPOSE ${PORT}

CMD [ "node", "server.js" ]