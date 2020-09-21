#Install node
FROM node:14.10.1

# Setting working directory
WORKDIR /usr/src/app

# Install dependencies
COPY /anonymous-feedback/package*.json ./
RUN npm install

# Copy source files
COPY /anonymous-feedback/. .

# Build app
RUN npm run build

# Run the server
CMD ["npm", "server"]
