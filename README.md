# Air Quality Api

## Getting Started

For a quick setup, the application can be built and run with **Docker** and `docker-compose` you can start by cloning this repository.

    git clone https://github.com/samyouaret/air-Quality-Api.git

API docs provide a good start to get up and running with the endpoints of the application [Demo docs](http://localhost:3000/api/docs). The API is documented using [openApi]([https://](https://swagger.io/specification/)).

### Using docker-compose

Using Docker compose 

    docker compose -f docker-compose.yml up --remove-orphans --build

to Avoid conflict with test containers we use the flag `--remove-orphans`.

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

The application structure is a simple layered architecture that strives for low coupling, better Testability, and maintenance

it Contains an HTTP server that acts as a **Gateway** for our application.

Controllers interact with Application Gateway(HTTP server), and **service** to process and serve those requests.

Services hold the business logic, although our application has only a few concerns at the moment all business logic should happen in services.

**Repositories** Acts as the **gateway** to access data.

Back to the root application, it is the starting point to run the application, it manages an **Application gateway** which in our case we are using **expressjs**.

## Setup Cron job

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

To run tests inside using docker-compose, the `--abort-on-container-exit` is necessary to make all containers(the Postgres database container) exist after the tests are finished.

    docker-compose -f test-docker-compose.yml up 
    --abort-on-container-exit

Alternatively, we can use the dev docker-compose.yml file to run the tests, Note that tests will use the Development database
    
    docker-compose -f docker-compose.yml up --remove-orphan --abort-on-container-exit

Then simply run

    yarn run test

**Note**: by Default, docker-compose will try to run orphan containers within the same project. the new version included as a command will raise a warning, while the old docker-compose will run them.

to Avoid these conflicts add the flag `--remove-orphans`.