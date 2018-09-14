FROM mhart/alpine-node:10
ARG BUNDLER
WORKDIR /usr/src
COPY package.json yarn.lock ./
RUN yarn install
ENV NODE_ENV="production"
COPY . .
RUN yarn build
CMD ["node", "server"]