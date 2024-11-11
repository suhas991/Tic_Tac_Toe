# Use the official Node.js image as the base
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire project to the working directory in the container
COPY . .

# Expose the port that Vite uses by default (5173)
EXPOSE 5173

# Start the Vite development server
CMD ["npm", "run", "dev"]
