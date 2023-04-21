FROM alpine:latest as build

WORKDIR /app

ARG  GIT_REPO

RUN apk add --no-cache curl git nodejs npm 
RUN git clone ${GIT_REPO}

WORKDIR vanilla_react_app/vanilla/

RUN npm install

RUN npm run build 

FROM nginx:latest
COPY --from=build /app /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
CMD ["nginx", "-g", "daemon off;"]
