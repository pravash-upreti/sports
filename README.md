# Sports Web App

This is the Sports Web App.

## Setup

Clone this repository and change directory to `web`.

```bash
$ git clone git@gitlab.lftechnology.com:sports/web.git

$ cd web/
```

Make a copy of `.env.docker` and save as `.env`.

```bash
$ cp .env.docker .env
```

Install dependencies and run the application locally.

```bash
$ docker-compose up -d web
```

Run the following command to view logs of the container.

```bash
$ docker-compose logs -f web
```

## Others

Building for Production

```bash
$ docker-compose up web_build
```
