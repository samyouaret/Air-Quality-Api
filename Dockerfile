FROM node:16-alpine

WORKDIR /app

RUN chown -R node:node /app

USER node

ENV HOST=http://localhost

EXPOSE 3000

COPY package*.json /app/

COPY yarn.lock /app/

COPY --chown=node:node . /app/

RUN yarn install

RUN yarn build

CMD [ "node","build/index.js" ]