# Use an official Node.js runtime as a parent image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build

# Install a simple server to serve the static files
RUN npm install -g serve

# Expose the port the app will run on
EXPOSE 5000

# Command to run the application
CMD ["serve", "-s", "dist", "-l", "5000"]
