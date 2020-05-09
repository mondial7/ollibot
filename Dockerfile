FROM node:alpine

WORKDIR /app

COPY package.json .
RUN yarn install

COPY ./api/index.js ./api/index.js

CMD ["yarn", "start"]
