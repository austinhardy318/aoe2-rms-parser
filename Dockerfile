# Multi-stage build for aoe2-rms-parser
FROM node:22-alpine AS base

# Install dependencies needed for native modules
RUN apk add --no-cache python3 make g++

# Set working directory
WORKDIR /app

# Husky is a dev-only git hook tool; skip it during container installs.
ENV HUSKY=0

# Copy package files
COPY package.json package-lock.json ./

# Install dependencies
RUN npm ci --omit=dev --ignore-scripts

# Development stage
FROM base AS development
COPY . .
RUN npm ci
EXPOSE 3000
CMD ["npm", "run", "build:watch"]

# Build stage
FROM base AS build
COPY . .
RUN npm ci
RUN npm run build

# Test stage
FROM base AS test
COPY . .
RUN npm ci
CMD ["npm", "test"]

# Production stage
FROM node:22-alpine AS production
WORKDIR /app
ENV HUSKY=0
COPY --from=build /app/dist ./dist
COPY --from=build /app/package.json ./
COPY --from=build /app/package-lock.json ./
RUN npm ci --omit=dev --ignore-scripts
CMD ["node", "dist/index.js"]
