FROM node:9
COPY package.json /src/package.json  
COPY lib/db.js /src/lib/db.js
RUN  cd /src; npm install 
COPY . /src
EXPOSE 3002
WORKDIR /src
CMD node index.js 