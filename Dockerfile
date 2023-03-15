FROM node:alpine

#scieżka gdzie zapisać 
WORKDIR /opt/app

COPY . .

RUN NPM INSTALL 

RUN NODE index.js