var klog = require('./klog');

// Usage:
klog.trace("Example of logging something with level trace");

// A sample with a try catch
try {
    console.log('asdasd');
} catch(e) {
    klog.error(e.stack);
}

klog.trace("A log for level trace");

klog.debug("A log for level debug");

klog.info("A log for level info");

klog.warn("A log for level warn");

klog.error("A log for level error");

klog.fatal("A log for level fatal");