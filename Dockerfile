FROM alpine:latest

RUN apk add --no-cache nodejs npm python yarn
RUN npm install

WORKDIR /app

COPY . .

RUN yarn install

EXPOSE 8000

ENTRYPOINT ["yarn"]

CMD ["start"]
