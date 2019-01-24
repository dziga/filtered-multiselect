FROM node:10-alpine

WORKDIR /app

COPY package*.json ./
COPY index.js ./
COPY ./server ./server
COPY ./client ./client

RUN npm install

EXPOSE 3000
CMD [ "npm", "start" ]