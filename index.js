/**
 * Simple Logger Tracer by Sanix Darker
 */
const fs = require('fs'), // File reading writting
			createIfNotExist = require("create-if-not-exist"),
				fileExists = require('file-exists');

/**
 * [getCurrentDate description]
 * Retourne la date courrante
 * @return {[type]} [description]
 */
function getCurrentDate(){
	var objToday = new Date()
	return (objToday.toLocaleString()).replace("/","-").replace("/","-");
}

var Kennylog = function(){ }

Kennylog.prototype.logit = function(level,string){
	var currentfile = "log/log "+(getCurrentDate().split(','))[0]+".html";
	var currentmessage = "["+getCurrentDate()+"] ["+level+"]: "+string+"<br>";

	if(fileExists.sync(currentfile)){
		fs.appendFile(currentfile, currentmessage, function(err, data){
		    if (err) console.log(err);
		});
	}else{
		createIfNotExist(currentfile,'');
		fs.writeFile(currentfile, currentmessage, function(err, data){
		    if (err) console.log(err);
		});
	}
	console.log("Successfully Save to the Daily log File.");
    console.log(currentmessage);
};
Kennylog.prototype.trace = function(string){ 
	this.logit("TRACE",string);
};
Kennylog.prototype.debug = function (string) { 
	this.logit("DEBUG",string);
};
Kennylog.prototype.info = function (string) { 
	this.logit("INFO",string);
};
Kennylog.prototype.warn = function (string) { 
	this.logit("WARN",string);
};
Kennylog.prototype.error = function (string) { 
	this.logit("ERROR",string);
};
Kennylog.prototype.fatal = function (string) { 
	this.logit("FATAL",string);
};

// Usage:
var klog = new Kennylog();
klog.trace("Example of logging something with level trace");