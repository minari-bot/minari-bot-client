# build stage
FROM node:18-alpine as builder
WORKDIR /app
COPY . .
WORKDIR /app/client/
RUN npm ci  && npm run build

# nginx stage
FROM nginx:latest
COPY ./client/nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/client/build /usr/share/nginx/html
EXPOSE 3000
CMD ["nginx", "-g", "daemon off;"]


# # build stage
# FROM node:18-alpine as builder
# WORKDIR /app
# COPY ./package*.json ./
# RUN npm install
# COPY . .
# RUN npm run build

# FROM nginx:latest
# COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
# COPY --from=builder /app/build /usr/share/nginx/html
# EXPOSE 3000
# CMD ["nginx", "-g", "daemon off;"]
