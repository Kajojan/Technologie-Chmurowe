#!/bin/bash

docker build -t nginx .


docker run -d -p 8080:80 nginx






