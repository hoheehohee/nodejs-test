FROM nginx
COPY nginx/conf.d /etc/nginx/conf.d
COPY nginx/nginx.conf /etc/nginx/nginx.conf
COPY . /src
EXPOSE 3000
CMD [ "yarn", "start" ]