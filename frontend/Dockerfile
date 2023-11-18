FROM node:lts-bullseye as build

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build


### Stage 2

FROM nginx:alpine
ADD ./config/default.conf /etc/nginx/conf.d/default.conf
COPY --from=build /usr/src/app/dist /var/www/app/
EXPOSE 80
CMD [ "nginx", "-g", "daemon off;" ]