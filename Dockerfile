FROM node:15.4.0-alpine3.10

WORKDIR /app
COPY . /app
RUN npm install --only-production
EXPOSE 3000
CMD node index.js
