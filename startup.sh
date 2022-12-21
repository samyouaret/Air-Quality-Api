#!/bin/sh

yarn run prisma migrate deploy

node ./build/index.js
