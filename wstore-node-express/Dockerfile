FROM node 

# best practice is not to use root user
RUN adduser -D demo 
USER demo

WORKDIR /usr/wstore-node-express

COPY package.json .


RUN npm install

# Bundle app source
COPY . .

EXPOSE 3000

CMD [ "npm", "start" ]