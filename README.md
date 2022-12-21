# Air Quality Api

## Running the Application

Using docker

    docker build --tag air-quality . --no-cache

    docker run -p 3000:3000 air-quality

Using Docker compose 

    docker compose -f docker-compose.yml -d -p air-quality-api

## Running test

To run tests inside using docker compose, note the `--abort-on-container-exit` is necessary to make all containers(the postgres database container) exist after the tests finished.

    docker-compose -f test-docker-compose.yml up 
    --abort-on-container-exit

To run without docker, a postgres database is needed, then run 

    yarn run test

**Note**: by Default docker compose will try to run orphan containers within the same project. the new version included as a command will raise a warning, while the old docker-compose will run them.

to Avoid this conflicts add the flag `--remove-orphans` or add the option `p` with a project name.

## Application project structure

```
├── build
├── coverage
└── src
    ├── core
    ├── domains
    │   ├── air-quality
    │   │   ├── contracts
    │   │   └── tests
    │   │       ├── e2e
    │   │       ├── integration
    │   │       └── unit
    │   └── air-quality-tracker
    │       ├── contracts
    │       └── tests
    │           ├── e2e
    │           ├── integration
    │           └── unit
    └── infrastructure
        ├── airq-api
        ├── databases
        │   ├── config
        │   └── migrations
        └── gateways
            └── http
                └── routes

```


## Setup Cron job

To setup the cron job, first we need to add to bins directory to avoid using relative paths.

    cp air-quality-job.sh /usr/bin/

Add Execution permissions

    chmod +x /usr/bin/air-quality-job.sh

### Register the cron job

First edit the crontab file run
    crontab -e

Then Add a job that run every 1 minute the last of the file, and save the file.

    * * * * * /usr/bin/air-quality-job.sh

To Confirm that the cron tab has been added successfully run

    crontab -l

you should see `* * * * * /usr/bin/air-quality-job.sh` at the end of the output.
