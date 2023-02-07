FROM node:16-alpine

RUN mkdir /app
WORKDIR /app

# install global packages
RUN npm i -g  expo-cli@6.0.6

COPY . /app

RUN npm install

CMD sleep infinity

