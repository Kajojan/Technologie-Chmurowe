#!/bin/bash

docker network create my_network
docker run -itd --name db --network my_network -p 3306:3306 -e MYSQL_ROOT_PASSWORD=1234 mysql

docker run -itd --name web --network my_network -p 80:80 nginx
docker cp Stepik/zad17/nginx.conf web:/etc/nginx/conf.d/default.conf
docker exec web nginx -s reload




docker logs -f web
