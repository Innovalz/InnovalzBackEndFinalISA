
FROM node:12.6
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package*.json /usr/src/app/
RUN npm cache verify
RUN npm install typescript -g
RUN npm install
COPY . /usr/src/app
EXPOSE 3443
CMD [ "npm" , "start"]