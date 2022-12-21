#! /bin/sh

# This is the script that will be run by the cron job.

curl -X POST -H "Content-Type: application/json" -d '{
    "longitude":"48.856614",
    "latitude":"37.338208"
}' http://localhost:3000/api/tracker
