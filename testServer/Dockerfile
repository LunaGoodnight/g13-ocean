# Test API Server Dockerfile
FROM node:20-alpine

WORKDIR /app

# Copy package.json if exists, otherwise create a basic one
COPY package.json* ./
RUN if [ ! -f package.json ]; then \
    echo '{"name":"test-api","version":"1.0.0","main":"index.js","dependencies":{"express":"^5.1.0"}}' > package.json; \
    fi

# Install dependencies
RUN npm install

# Copy source code
COPY . .

EXPOSE 5009

# Start the server
CMD ["node", "index.js"]