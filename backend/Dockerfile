FROM node:16

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 4040

CMD ["sh", "-c", "npm run build && npm start"]