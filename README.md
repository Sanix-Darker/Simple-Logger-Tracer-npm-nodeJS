# Simple Logger Tracer npm nodeJS

A simple and easy Traquing log  for your project [FOR TRACKING YOUR SYSTEM ACTIONS :-P]

### Installing

Run:<br>
  ```cmd
    npm install
  ```
## Usage
```javascript
  var klog = new Kennylog();
  klog.trace("Probleme de creation de l'utilisateur");
  klog.debug("Probleme de creation de l'utilisateur");
  klog.info("Probleme de creation de l'utilisateur");
  klog.warn("Probleme de creation de l'utilisateur");
  klog.error("Probleme de creation de l'utilisateur");
  klog.fatal("Probleme de creation de l'utilisateur");
```
## How to test it
  ```cmd
    cd /path/to/thedownload/project
    node index.js
  ```

## What is done?
  
  In your */log* directory, Kennylog will store *each daily logs* of the system life

## Why use this?

  I assume, ther is a lot of king of tracer for nodeJS, but, this is the best you can use because, you know exactly how you can personnalize it and it's need only 3 dependencies
  
## Authors

* **Sanix Darker**

## Acknowledgments

* Hat tip to anyone who's code was used
* Inspiration
* etc
