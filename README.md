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

**Note**: by Default docker compose will try to roun orphan containers within the same project. the new version included as a command will raise a warning, while the old docker-compose will run them.

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
        │       └── 20221220171215_init
        └── gateways
            └── http
                └── routes

```