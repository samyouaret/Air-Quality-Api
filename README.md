# Air Quality Api

## Getting Started

For a quick setup, the application can be built and run with **Docker** and `docker-compose` you can start by cloning this repository.

    git clone https://github.com/samyouaret/air-Quality-Api.git

Create an .env file from of env.example
    
    cp .env.example .env

API docs provide a good start to get up and running with the endpoints of the application [Demo docs](http://localhost:3000/api/docs). The API is documented using [openApi]([https://](https://swagger.io/specification/)).

### Using docker-compose

Using Docker compose 

    docker compose -f docker-compose.yml up --remove-orphans --build

to Avoid conflict with test containers we use the flag `--remove-orphans`.

## Application project structure

```
build/
src/
├── core
│   ├── ApplicationContract.ts
│   ├── Application.ts
│   └── bootstrap.ts
├── domains
│   ├── air-quality
│   │   ├── AirQualityController.ts
│   │   ├── AirQualityService.ts
│   │   ├── contracts
│   │   │   └── AirQualityServiceContract.ts
│   │   ├── routes.ts
│   │   └── tests
│   │       ├── e2e
│   │       ├── integration
│   │       └── unit
│   └── air-quality-tracker
│       ├── AirQualityTrackerController.ts
│       ├── AirQualityTrackerRepository.ts
│       ├── AirQualityTrackerService.ts
│       ├── contracts
│       ├── routes.ts
│       └── tests
│           ├── e2e
│           ├── integration
│           └── unit
├── index.ts
└── infrastructure
    ├── airq-api
    │   ├── IqairApiFactory.ts
    │   └── IqairApi.ts
    ├── databases
    │   ├── config
    │   │   └── prisma.ts
    │   ├── createPrisma.ts
    │   ├── migrations
    │   └── schema.prisma
    └── gateways
        └── http
            ├── ExpressApplication.ts
            ├── ExpressFactory.ts
            ├── routes
            │   ├── index.ts
            │   ├── swagger.ts
            │   └── swagger.yaml
            └── routes.ts
```

The `core` directory contains the basic code to init and start the application.

The `domains` directory contains apps to server the requests, here we have an air-quality and iqair-tracker to track request `latitude` and `longitude`.

Each domain has its own `contracts` which contain interfaces used by the domain. it has also a `tests` directory that includes unit/integrations/E2E tests.

a domain Usually has a `controller`, a `service`, and optionally a database if it needs db access like `iqair-tracker`.

A repository maintains Access to the database.


The `infrastructure` directory contains External dependencies used by the application, including the HTTP gateway(we use express.js), Prisma as data access ORM, 
and a proxy to call the `IQair API.

The HTTP server acts as a **Gateway** for our application.

Controllers interact with Application Gateway(HTTP server), and **service** to process and serve those requests.

The starting point to run the application manages an **Application gateway** which in our case we are using **express.js**.

The `bootstrap.ts` contains the code that inits and bootstraps the application.

```
├── core
│   └── bootstrap.ts
```

## Setup Cron job

The cron job will trigger the `air-quality-tracker` API to track records for a specific latitude and longitude(Paris 48.856613 2.352222).

To set up the cron job, first, we need to add it to the bin directory to avoid using relative paths.

    cp air-quality-job.sh /usr/bin/

Add Execution permissions

    chmod +x /usr/bin/air-quality-job.sh

### Register the cron job

The easiest way is to add crontab.sh to the system cron jobs

    crontab crontab.sh

Alternatively, edit the crontab file by  running

    crontab -e

Then Add a job that runs every 1 minute at the end of the file, and save the file.

    * * * * * /usr/bin/air-quality-job.sh

To Confirm that the cron tab has been added successfully run

    crontab -l

you should see `* * * * * /usr/bin/air-quality-job.sh` at the end of the output/file.

## Running test

To run tests inside using docker-compose, first create testing env file

Create an .env file from of env.example
    
    cp .env.example .env.testing

Then use docker compose to run `test-docker-compose.yml`

    docker-compose -f test-docker-compose.yml up 
    --abort-on-container-exit

the `--abort-on-container-exit` is necessary to make all containers(the Postgres database container) exist after the tests are finished.

Alternatively, we can use the dev docker-compose.yml file to run the tests, Note that tests will use the Development database
    
    docker-compose -f docker-compose.yml up --remove-orphan --abort-on-container-exit

Then simply run

    yarn run test

**Note**: by Default, docker-compose will try to run orphan containers within the same project. the new version included as a command will raise a warning, while the old docker-compose will run them.

to Avoid these conflicts add the flag `--remove-orphans`.