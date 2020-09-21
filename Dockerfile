#Install node
FROM node:12

# Setting working directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install dependencies
COPY /anonymous-feedback/package*.json ./
RUN npm install

# Copy source files
COPY /anonymous-feedback/. .

# Build app
RUN npm run build

# Run the server
EXPOSE 3000
CMD ["npm", "server"]
