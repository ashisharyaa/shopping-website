# Use an official nginx image as the base
FROM nginx:alpine

# Set the working directory
WORKDIR /usr/share/nginx/html

# Copy the current directory contents into the container
COPY . .

# Expose port 80 to allow external access
EXPOSE 80

# Start nginx when the container starts
CMD ["nginx", "-g", "daemon off;"]

