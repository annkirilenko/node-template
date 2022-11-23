# Builds dist files
FROM node:18-alpine as builder

ARG NPM_CUSTOM_REGISTRY=https://registry.npmjs.org
RUN npm set registry ${NPM_CUSTOM_REGISTRY}

WORKDIR /app

COPY ./package*.json ./
RUN npm i --platform=linuxmusl

COPY ./tsconfig.json ./
COPY ./src ./src
RUN npm run compile

# Loads production modules
FROM node:18-alpine as dep-loader

WORKDIR /app

COPY ./package*.json ./
RUN npm ci --only=production --platform=linuxmusl

# Main app
FROM node:18-alpine as app 

RUN apk update && apk add bash

WORKDIR /app

COPY --from=dep-loader /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist
COPY ./public ./public
COPY ./package.json ./

RUN chown node:node ./ -R

USER node