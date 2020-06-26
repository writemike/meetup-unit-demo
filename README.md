# NGINX Unit demo for APCJ meetup - June 2020

Sorry for the small terminal font in the actual demo!

Here are all the files to used to setup the demo. This demo was based on Nick Shadrin's Meet-up demo (https://github.com/nshadrin/2018-04-unit-demo)  

Here are the steps taken before the starting the demonstration:  
 - Downloaded and compiled the NGINX Unit Source code directly from the GitHub Repo (https://github.com/nginx/unit).  
 - Downloaded and installed all the programming languages and dependencies from the Unbuntu Repository.  
 - Uploaded code examples for all 8 supported programming languages (PHP, Python, Perl, Go, Ruby, Node.js, Java, and Assembly).  
 - Compiled code examples using Go and Assembly (https://unit.nginx.org/howto/samples/).  

While trying out NGINX Unit, please consider how NGINX Plus can not only load balance your NGINX Unit Microservices, but also secure them with JWT Authentication, validate an operational service with active health checks, and maintain state, in stateful applications, using our integrated key-value store across multiple NGINX Plus instances.  

Once your NGINX Unit instance has been built, add these configurations by using:  
```sudo curl --unix-socket /var/run/control.unit.sock -X PUT --data-binary @./certs/certkey.pem http://localhost/certificates/demo-bundle```  

```sudo curl --unix-socket /var/run/control.unit.sock -X PUT -d @/config/full-config.json http://localhost/config```  
