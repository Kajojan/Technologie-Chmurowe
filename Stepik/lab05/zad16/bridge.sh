#!/bin/bash

docker network create --driver=bridge --subnet=192.168.1.1/24  my_bridge

docker run -it -d --name my_container --network my_bridge alpine

docker exec my_container ping 192.168.1.1

