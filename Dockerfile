FROM node:12-alpine

# create destination directory
RUN mkdir -p /usr/src/nuxt-app
WORKDIR /usr/src/nuxt-app

# update and install dependency
RUN apk update && apk upgrade
RUN apk add git
RUN apk add yarn

# copy the app, note .dockerignore
COPY . /usr/src/nuxt-app/
RUN yarn install

# build necessary, even if no static files are needed,
# since it builds the server as well
RUN yarn generate

# expose 5000 on container
EXPOSE 6001

# set app serving to permissive / assigned
ENV NUXT_HOST=0.0.0.0
# set app port
ENV NUXT_PORT=6001

# start the app
CMD [ "npm", "start" ]
