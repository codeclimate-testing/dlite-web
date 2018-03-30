# base image
FROM node:9.6.1

# set working directory
WORKDIR /usr/src/app

# Bundle app source
COPY . .

# # Clean up dev files
RUN rm -fr node_modules/*
RUN rm -fr .git

# install app dependencies
RUN npm install --quiet
RUN node_modules/webpack/bin/webpack.js -p --config webpack.config.prod.js

CMD npm start
