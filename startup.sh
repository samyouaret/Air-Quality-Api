#!/bin/sh

yarn run prisma migrate deploy

if [[ "$APP_ENV" == "development" || $APP_ENV == "production" ]]; then
    node ./build/index.js
elif [[ "$APP_ENV" == "test" ]]; then
    yarn run test
fi
