FROM node:lts-alpine
#ENV NODE_ENV=production
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*",  "./"]
RUN npm install
#COPY . .
EXPOSE 4200
#RUN node /usr/src/app
#CMD ["npm", "start"]
