#!/bin/bash

docker build -t node-app .

docker run -p 8080:8080 -d node-app
