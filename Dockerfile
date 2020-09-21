#Install node
FROM node:14.10.1

# Setting working directory
WORKDIR /anonymous-feedback

# Install dependencies
COPY package*.json
RUN npm install

# Copy source files
COPY . .

# Build app
RUN npm run build

# Run the server
CMD ["npm", "server"]
