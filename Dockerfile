# Use official Node LTS, small image
FROM node:20-alpine

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies (prefer package-lock over package.json)
COPY package*.json ./
RUN npm ci --omit=dev

# Bundle app source
COPY . .

# Production env
ENV NODE_ENV=production

# App listens on 5000
EXPOSE 5000

# Start the server
CMD ["node", "src/server.js"]
