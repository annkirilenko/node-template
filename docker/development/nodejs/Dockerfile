FROM node:18-alpine

RUN apk update && apk add bash

ARG NPM_CUSTOM_REGISTRY=https://registry.npmjs.org
RUN npm set registry ${NPM_CUSTOM_REGISTRY}

WORKDIR /app

RUN chown node:node /app -R

USER node
