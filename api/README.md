# API

## Techs

- Typescript
- GraphQL
- Apollo Server
- ExpressJS

## Requirements

- NodeJS: 8+
- PostgreSQL: 9.6+
- Yarn

## Setup Instructions

- Copy environment file

  ```bash
  cp `.env.example` `.env`
  ```

- Install dependencies.

  ```bash
  yarn
  ```

- Start application in development mode.

  ```bash
  yarn start:dev
  ```

- For production build:

  ```bash
  yarn build
  ```

- Migrations

  ```bash
  yarn migrate:make <migration_name>
  yarn migrate
  ```

- Seed

  ```bash
  yarn seed:make <seed_name>
  yarn seed
  ```
