# Simple Logger Tracer npm nodeJS

A simple and easy Tracking log  for your project [FOR TRACKING YOUR SYSTEM ACTIONS :-P]

### Installing

Run:<br>
  ```cmd
    npm install
  ```
## Usage
  There is many level of logging, try these examples:
```javascript
  var klog = new Kennylog();
  klog.trace("Problem for level trace");
  klog.debug("Problem for level debug");
  klog.info("Problem for level info");
  klog.warn("Problem for level warn");
  klog.error("Problem for level error");
  klog.fatal("Problem for level fatal");
```
OR when you are doing a try catch:
```javascript
  try {
    console.log(asdasd); // A variable not set
  } catch(e) {
    klog.error(e.stack);
  }
```
## How to test it
  ```cmd
    cd /path/to/thedownload/project
    node index.js
  ```

## Dependencies
  Only 2 dependencies
  ```cmd
      fs 
      createIfNotExist 
  ```
## What is done?
  
  In your */log* directory, Kennylog will store *each daily logs* of the system life

## What you can get?
  ```cli
    [1-21-2018, 12:56:23 AM] [TRACE]: Example of logging something with level trace
    [1-21-2018, 12:56:23 AM] [ERROR]: ReferenceError: asdasd is not defined at Object
  ```
## Why use this?

  I assumes, there is a lot of kind of tracers for nodeJS, but, this is the best you can use because, you know exactly how you can personnalize it for your project and it's need only *2 dependencies*
  
## Authors

* **Sanix Darker**

## Acknowledgments

* Hat tip to anyone who's code was used
* Inspiration
* etc
