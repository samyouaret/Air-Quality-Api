#!/bin/sh

yarn run migrate:deploy

node ./build/index.js
