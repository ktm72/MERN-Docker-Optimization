FROM node:20-alpine as build-stage

WORKDIR /react

COPY package*.json .

RUN npm install

COPY . .

RUN npm run build

FROM nginx:stable-alpine as production-stage

COPY --from=build-stage /react/dist /usr/share/nginx/html

EXPOSE 3000

CMD ["nginx","-g","daemon off;"]