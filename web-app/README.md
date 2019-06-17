# Sports Web App

## Setup Instructions

### Clone

Clone this repository and change directory to `web`.

```bash
git clone git@gitlab.lftechnology.com:sports/web.git

cd web/
```

### Copy environment file

```bash
cp `.env.example` `.env.development.local`
```

### Setup with docker

Install dependencies and run the application locally.

```bash
docker-compose up -d web
```

To view logs of the container:

```bash
docker-compose logs -f web
```

For production build:

```bash
docker-compose up web_build
```

### Setup w/o docker

Install dependencies.

```bash
yarn install
```

Start application in development mode.

```bash
yarn run serve
```

For production build:

```bash
yarn run build
```

Lints and fixes files

```bash
yarn run lint
```
