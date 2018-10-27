FROM node:8 as builder
RUN mkdir -p /source
WORKDIR /source
COPY ./ ./
RUN yarn && yarn build
FROM nginx:alpine
COPY ./docker/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /source/dist /var/lib/html/sports
EXPOSE 80
