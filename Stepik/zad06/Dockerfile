FROM nginx

WORKDIR /app

COPY default.conf /etc/nginx/conf.d/default.conf

COPY index.html /usr/share/nginx/html/

COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 8888


CMD ["nginx", "-g", "daemon off;"]