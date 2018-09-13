FROM node as final

MAINTAINER Barath

WORKDIR /usr/wstore-node-express

COPY package.json .


RUN npm install

# Bundle app source
COPY . .

EXPOSE 3000

CMD [ "npm", "start" ]