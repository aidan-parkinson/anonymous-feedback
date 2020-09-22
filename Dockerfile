# Install Apache web server
From httpd:2.4

# Copy static content
COPY ./anonymous-feedback/build/ /usr/local/apache2/htdocs/

# Expose on the web server
EXPOSE 8080
