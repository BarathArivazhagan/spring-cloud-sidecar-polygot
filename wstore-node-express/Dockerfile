FROM node:12.4.0-alpine

WORKDIR /usr/wstore-node-express

COPY package.json .


RUN npm install

# Bundle app source
COPY . .

EXPOSE 3000

CMD [ "npm", "start" ]