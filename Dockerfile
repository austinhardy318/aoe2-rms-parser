# Multi-stage build for aoe2-rms-parser
FROM node:20-alpine AS base

# Install dependencies needed for native modules
RUN apk add --no-cache python3 make g++

# Set working directory
WORKDIR /app

# Copy package files
COPY package.json ./

# Install dependencies
RUN npm install --omit=dev

# Development stage
FROM base AS development
COPY . .
RUN npm install
EXPOSE 3000
CMD ["npm", "run", "build:watch"]

# Build stage
FROM base AS build
COPY . .
RUN npm install
RUN npm run build

# Test stage
FROM base AS test
COPY . .
RUN npm install
CMD ["npm", "test"]

# Production stage
FROM node:20-alpine AS production
WORKDIR /app
COPY --from=build /app/dist ./dist
COPY --from=build /app/package.json ./
RUN npm install --omit=dev
CMD ["node", "dist/index.js"]
