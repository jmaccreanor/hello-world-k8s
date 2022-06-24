# Choose build image
FROM node:16

# Create directory to hold app
WORKDIR /usr/src/app

# Copy package / package-lock
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Bundle source code inside docker image
COPY . .

# Expose port 3000
EXPOSE 3000

# Define comamnds to run app
CMD ["node", "src/app.js"]
