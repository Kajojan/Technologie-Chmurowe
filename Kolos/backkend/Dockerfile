
FROM nginx:latest

COPY nginx.conf /etc/nginx/conf.d/default.conf

ENV PORT=3000

EXPOSE $PORT

CMD ["nginx", "-g", "daemon off;"]