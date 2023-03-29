FROM node

WORKDIR /usr/src/app

COPY package*.json  ./
COPY server.js  ./

RUN npm install 

COPY . .

EXPOSE 3000

RUN chown -R node /usr/src/app

USER node
CMD [ "npm", "run", "start" ]