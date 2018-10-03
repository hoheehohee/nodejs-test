FROM node:9
COPY package.json /src/package.json 
RUN  cd /src; npm install 
COPY . /src
EXPOSE 3002
WORKDIR /src
CMD node index.js 