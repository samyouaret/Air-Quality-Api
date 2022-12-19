FROM node:16-alpine

WORKDIR /app

COPY package*.json .

COPY yarn.lock .

COPY . .

EXPOSE 3000

RUN yarn install

RUN yarn run build

CMD [ "node", "build/index.js" ]
