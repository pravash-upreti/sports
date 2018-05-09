FROM nginx:1.12-alpine

COPY build/ /var/lib/html/sports/build
COPY docker/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
