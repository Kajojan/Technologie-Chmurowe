#!/bin/bash

docker volume create nodejs_data

docker run -d --name nodejs_container -v nodejs_data:/app node:latest

docker run --rm -it -v nodejs_data:/app busybox touch app/test.txt

docker volume create all_volumes


docker run -it -v nginx_data:/src -v all_volumes:/dst busybox sh -c "cp -R /src/. /dst/"

docker run -it -v nodejs_data:/src -v all_volumes:/dst busybox sh -c "cp -R /src/. /dst/"


