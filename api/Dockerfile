FROM node:latest

ARG STRAPI_LICENSE=""
WORKDIR /app
ADD ./package.json /app
ADD ./yarn.lock /app
RUN yarn install --frozen-lockfile

ADD . /app
RUN yarn seed
RUN yarn build

EXPOSE 1337

CMD ["/app/scripts/start.sh"]
