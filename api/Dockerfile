FROM node:20-alpine

RUN addgroup -S app && adduser -S app -G app
USER app
WORKDIR /app
COPY package*.json ./
USER root
RUN npm install

COPY . .
EXPOSE 3000
ENTRYPOINT npm run dev
