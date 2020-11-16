# Stage 1 - the build process
FROM node:14 AS build
WORKDIR /app
COPY package.json ./
RUN yarn
COPY . ./
RUN yarn build

# Stage 2 - the production environment
FROM nginx:1.19-alpine
ENV BACKEND_URL="/api"
ADD scripts/start.sh /start.sh
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["/start.sh"]
