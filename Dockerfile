FROM node:16-alpine AS builder

WORKDIR /app

RUN chown -R node:node /app

USER node

EXPOSE 3000

COPY yarn.lock /app/

COPY --chown=node:node . /app/

RUN yarn install

RUN yarn run prisma generate

RUN yarn build


FROM builder AS development

RUN chmod +x ./startup.sh

ENTRYPOINT [ "./startup.sh" ]

FROM builder AS test

RUN chmod +x ./test-startup.sh
# override prisma .env
COPY  .env.testing .env
ENTRYPOINT [ "./test-startup.sh" ]