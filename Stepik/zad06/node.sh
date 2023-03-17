#!/bin/bash

docker build -t nginx .


docker run -d -p 8888:8888 nginx





