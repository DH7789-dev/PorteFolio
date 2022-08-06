ARG environment=prod
FROM node:16.15.0 as node
ARG environment
WORKDIR /app
COPY . .
RUN npm install --legacy-peer-deps
RUN npm run build:${environment}

FROM nginx:alpine
COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=node /app/dist/cloud-coding /usr/share/nginx/html
