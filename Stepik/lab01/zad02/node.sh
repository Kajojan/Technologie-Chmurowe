#!/bin/bash

docker build -t express-app .

# Uruchamianie kontenera Docker
docker run -p 8080:8080 express-app
