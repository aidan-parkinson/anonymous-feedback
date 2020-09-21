# Install Apache web server
From httpd:2.4

# Install dependencies
COPY anonymous-feedback/build /usr/local/apache2/htdocs

# Expose on the web server
EXPOSE 8080
