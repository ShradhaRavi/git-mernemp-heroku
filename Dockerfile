# Dockerfile for React client

# Build react client
FROM node:latest

# Working directory be app
WORKDIR /usr/src/app

COPY package.json ./
COPY package-lock.json ./

###  Installing dependencies

RUN npm install 

# copy local files to app folder
COPY . ./

EXPOSE 3001

CMD ["index.js"]