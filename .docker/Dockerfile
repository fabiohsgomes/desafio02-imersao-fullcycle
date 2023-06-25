FROM node:20-bullseye as build

COPY ../desafio-nest /home/node/app

WORKDIR /home/node/app

RUN npm install && npm run build

FROM node:20-bullseye as deploy

WORKDIR /home/node/app

COPY --from=build /home/node/app/node_modules ./node_modules
COPY --from=build /home/node/app/dist ./dist
COPY --from=build /home/node/app/.env ./.env

CMD [ "node", "dist/main" ]