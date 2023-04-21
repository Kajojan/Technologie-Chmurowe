#!/bin/bash

# docker network  create app_network

docker build -t nginx-node .  --build-arg GIT_REPO=https://github.com/matt1sor/vanilla_react_app.git

docker run -d --name my_nginx -p 80:80 --network app_network nginx-node 