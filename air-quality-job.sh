#! /bin/sh

# This is the script that will be run by the cron job.
## it track Paris air quality
# the result will be store and tracked by the API
curl -X POST -H "Content-Type: application/json" -d '{
    "latitude":"48.856613",
    "longitude":"2.352222"
}' http://localhost:3000/api/iqair/tracker
