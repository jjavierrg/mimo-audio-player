FROM nginx:alpine
RUN rm -rf ./*
COPY . /usr/share/nginx/html

ENTRYPOINT ["nginx", "-g", "daemon off;"]
