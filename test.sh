#!/bin/sh

if [ "$APP_ENV" = "development" ]; then
    echo "hello dev"
elif [ "$APP_ENV" = "test" ]; then
    echo "hello test"
fi
