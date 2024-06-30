ARG NODE_VERSION=22-alpine

# build
FROM node:${NODE_VERSION} as build
WORKDIR /opt/app
COPY ./package*.json ./
RUN npm ci --omit=dev
COPY . .
RUN npm run build

# deploy
FROM node:${NODE_VERSION}
WORKDIR /opt/app
COPY --from=build /opt/app/.next ./.next
COPY --from=build /opt/app/node_modules ./node_modules
COPY ./package*.json ./
ENV NODE_ENV production
CMD ["npm", "start"]
EXPOSE 3000