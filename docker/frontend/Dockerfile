FROM nginx:1.12-alpine

COPY frontend/dist /var/lib/html/sports/frontend/build
COPY docker/frontend/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
