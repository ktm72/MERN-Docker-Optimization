## Node Js

1. cd into dir

2. `npm install`

3. Connect to Mongodb url, setup env

4. developement mode - `npm run dev`

5. build - `npm run build`

6. production mode - `npm run start`

7. cors allowed -

```
    "http://localhost:8080",
    "http://localhost:5173"
    "http://localhost:4173",
    "http://localhost:3000",
```

```Dockerfile

FROM node:20-alpine AS build

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .

RUN npm run build

FROM node:20-alpine AS runtime

WORKDIR /app

COPY --from=build /app .

EXPOSE 8080

CMD ["npm", "start"]

```
