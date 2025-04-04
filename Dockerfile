# Step 1: Build the frontend app
FROM node:alpine3.18 AS build
WORKDIR /app 

COPY package.json package-lock.json . 
RUN npm install 

COPY . . 
RUN npm run build 

# Step 2: Serve with Nginx
FROM nginx:1.23-alpine
WORKDIR /usr/share/nginx/html

RUN rm -rf ./*  
COPY --from=build /app/dist .  

EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]
