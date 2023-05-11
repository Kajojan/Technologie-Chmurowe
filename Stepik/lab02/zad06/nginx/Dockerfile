FROM nginx

WORKDIR /

RUN  apt-get  install openssl

COPY app/default.conf /etc/nginx/conf.d/default.conf

COPY app/key.crt /etc/nginx/ssl/

COPY app/key.key /etc/nginx/ssl/


EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]