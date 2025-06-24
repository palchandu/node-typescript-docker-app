####=============================
# Stage 1:  Development Build
####=============================
FROM node:20-alpine AS dev

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./
# Ignore node_modules and other unnecessary files
COPY .dockerignore ./
# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build
# Expose the application port
EXPOSE 3900
# Start the application
CMD ["npm", "run", "dev"]

####=============================
# Stage 2: Production Build
####=============================
FROM node:20-alpine AS prod

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install only production dependencies
RUN npm install

# Copy the rest of the application code
COPY . .
# Make build directory
RUN npm run build
# Expose the application port
EXPOSE 3900

# Start the application
CMD ["npm", "start"]
