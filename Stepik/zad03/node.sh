#!/bin/bash

# docker network create app

docker build -t express-mongo-app .

docker run -p 8080:8080 express-mongo-app 



docker run --network app  express-mongo-app

# docker run --network app --name Callendar_mongo mongo



