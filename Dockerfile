FROM node:22.14.0-alpine3.21 AS build
COPY . .
RUN npm i \
    && npm run build

FROM node:22.14.0-alpine3.21
WORKDIR /app
COPY --from=build dist .
COPY --from=build node_modules node_modules
CMD ["node", "index.js"]