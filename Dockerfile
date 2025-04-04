# Step 1: Build Stage
FROM node:18-alpine AS build
WORKDIR /app

# Copy package.json and package-lock.json separately for better caching
COPY package.json package-lock.json ./

# Install dependencies
RUN npm ci --omit=dev

# Copy the rest of the application files
COPY . .

# Build the React app
RUN npm run build

# Step 2: Production Stage
FROM nginx:1.23-alpine
WORKDIR /usr/share/nginx/html

# Remove default Nginx HTML files
RUN rm -rf ./*

# Copy the built React files from the build stage
COPY --from=build /app/dist ./

# Copy Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80 for serving the application
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
