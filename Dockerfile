FROM node
# another comment
# hello-vois application path 
ENV APP_PATH /usr/src/hello-vois
WORKDIR ${APP_PATH}
# installing dependencies
COPY [ "app/package.json", "app/package-lock.json", "./" ]
RUN npm install 
COPY app/index.js ./
CMD [ "node", "index.js" ]
