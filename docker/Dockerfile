FROM node:8 as builder
RUN mkdir -p ./sports-web
WORKDIR ./sports-web
COPY ./ ./
RUN yarn && yarn build
FROM nginx:alpine
COPY ./docker/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /sports-web /var/lib/html/sports
EXPOSE 80