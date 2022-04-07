FROM node:10-alpine as production-build
RUN mkdir -p /app
WORKDIR /app
COPY package.json /app/
RUN npm install
COPY . /app/
RUN npm run build --prod
FROM nginx:1.17.1-alpine
COPY --from=production-build /app/dist/portefolio /usr/share/nginx/html
