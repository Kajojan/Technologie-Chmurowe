#!/bin/bash

tar -cvzf ./volumes.tar.gz  /var/lib/docker/volumes

gpg -c ./volumes.tar.gz

gpg --decrypt ./volumes.tar.gz.gpg