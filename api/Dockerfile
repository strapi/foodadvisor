FROM node:16-alpine

# For strapi
RUN apk add --no-cache build-base gcc autoconf automake zlib-dev libpng-dev nasm bash

# For sharp
RUN apk add --no-cache g++ make py3-pip

EXPOSE 1337

WORKDIR /app

COPY package*.json data.zip ./

# Need to be writable in the container
COPY database ./database
COPY public ./public
COPY script ./script

#ENV PATH="/app/node_modules/.bin:$PATH"

RUN npm ci --unsafe-perm

RUN npm run seed && npm run build

CMD npm run start
