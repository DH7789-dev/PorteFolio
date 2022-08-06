FROM node:16.15.0 as node
WORKDIR /app
COPY . .
RUN npm install --legacy-peer-deps
RUN npm run build

FROM nginx:alpine
COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=node /app/dist/cloud-coding /usr/share/nginx/html
