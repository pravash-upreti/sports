# LF-Sports

LF Sports Management Website Development

## Installation

### Requirements

* [Docker](https://www.docker.com/)
* [Docker compose](https://docs.docker.com/compose/)

### Instructions

* Open the project in terminal:

  ```bash
  cd /path/to/the/project/source/code
  ```

* Make a copy of `.env.docker` and save as `.env` and update the configurations accordingly.

* Run the following command to install the npm packages:

  ```bash
  docker-compose up sports_web_yarn chess_api_yarn
  ```

* Run the following command to run the latest database migration:

  ```bash
  docker-compose up chess_db_migrate
  ```

* Run the following command to rollback the database migration:

  ```bash
  docker-compose up chess_db_rollback
  ```

* Run the following command:

  ```bash
  docker-compose up
  ```

* Run the mentioned app ports in browser or terminal.

* Enjoy coding... :D:D:D

## Website

Coming soon...
