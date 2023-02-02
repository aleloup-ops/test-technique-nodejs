# Use an official node image as the base image
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the project files
COPY . .

# Build the app
RUN npm run build

# Set the environment variables
ENV HOST 0.0.0.0

# Expose the port that the app will listen on
EXPOSE 3000

# Start the app
CMD [ "npm", "run", "dev" ]