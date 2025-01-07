# Gunakan Node.js versi 22 sebagai base image
FROM node:20-alpine

# Set work directory
WORKDIR /app

# Copy file package.json dan package-lock.json ke container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy seluruh kode aplikasi ke container
COPY . .

# Expose port aplikasi Vite (default 5173)
EXPOSE 5173

# Jalankan aplikasi Vite
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]
