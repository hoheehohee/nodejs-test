FROM nginx
COPY nginx/conf.d /etc/nginx/conf.d
COPY nginx/nginx.conf /etc/nginx/nginx.conf
FROM node:9
COPY package.json /src/package.json  
RUN  cd /src; npm install 
COPY . /src
EXPOSE 3000
WORKDIR /src
CMD node server.js 