#!/bin/bash

docker volume create nginx_data

docker run -d -p 8080:8080 -v nginx_data:/usr/share/nginx/html nginx

echo "Change Hello World !!!" > /var/lib/docker/volumes/nginx_data/usr/share/nginx/html/index.html
