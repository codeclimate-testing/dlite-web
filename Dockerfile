# base image
FROM node:9.6.1

# set working directory
WORKDIR /usr/src/app

# Bundle app source
COPY . .

# install app dependencies
RUN npm install --quiet --production
