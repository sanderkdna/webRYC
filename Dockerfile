# Use Node.js as the base image
FROM node:18.15.0-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install --frozen-lockfile

# Copy the app's source code to the container
COPY . .

# Build the React app
RUN npm run build

# Install 'serve' globally to serve the built app
RUN npm install -g serve

# Serve the build
CMD ["serve", "-s", "build"]