FROM node:lts-alpine

WORKDIR /app


COPY ./package.json /app

RUN npm install

COPY . /app

RUN npm install --prefix ./api

RUN npm install -g concurrently

#ENTRYPOINT ["ls", "./api/node_modules"]

CMD ["concurrently","npm:start", "npm:start --prefix ./api"]
