#!/bin/bash
# Script Name: deploy.sh
#
# Author: Sanjeev Kumar Pandit
# Date : 2018/05/20
#
# Description: The following script builds a node image from the root directory using the docker/Dockerfile
#             and then deploys the node image to the registry.lftechnology.com
#

export $(cat .env | grep -v ^# | xargs)

printf "Starting\n"

printf "Installing dependencies...\n"
docker-compose up web_yarn

printf "Preparing production build...\n"
docker-compose up web_build

printf "Preparing docker image...\n"
docker build -t registry.lftechnology.com/sports:latest -f ./docker/Dockerfile .

printf "Pushing docker image...\n"
docker push registry.lftechnology.com/sports:latest

printf "Deploying docker image...\n"
curl -X POST --user $DEPLOYMENT_USERNAME:$DEPLOYMENT_PASSWORD https://registry.lftechnology.com/deploy/dev.sports.lftechnology.com
