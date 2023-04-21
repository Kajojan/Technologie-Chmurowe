#!/bin/bash

docker network  create app_network

docker build -t nginx-flask . 

docker run -d --name my_nginx -p 80:80 --network app_network -e PORT=80 nginx-flask  