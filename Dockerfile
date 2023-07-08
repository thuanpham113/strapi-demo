FROM arm32v7/node:12-alpine

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 1337

CMD ["npm", "start"]
