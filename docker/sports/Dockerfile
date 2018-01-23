FROM nginx:1.12-alpine

COPY sports/frontend/build /var/lib/html/sports/frontend/build
COPY docker/sports/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
