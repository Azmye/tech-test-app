# Use a Node.js base image
FROM node:20-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and yarn.lock
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install

# Copy the rest of the project files
COPY . .

# Copy .env file
COPY .env ./

# Build the app
RUN yarn build

# Expose port
ARG PORT=3000
EXPOSE ${PORT}

# Start the app
CMD ["sh", "-c", "yarn dev --port $PORT --host $HOST"]
