# Sports Web app

This is the Sports Web App.

## Setup

First clone this repository.

```bash
$ git clone git@gitlab.lftechnology.com:sports/web.git
```

Go to the web folder.

```bash
$ cd web
```

Install dependencies.

```bash
$ docker-compose up web_yarn
```

Create a `.env` file for environment variables.

```bash
$ cp .env.docker .env
```

## Running locally

```bash
$ docker-compose up web
```
