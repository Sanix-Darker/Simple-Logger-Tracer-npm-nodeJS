/**
 * Simple Logger Tracer by Sanix Darker
 */
const fs = require('fs'), // File reading writting
			createIfNotExist = require("create-if-not-exist");

/**
 * [getCurrentDate description]
 * Retourne la date courrante
 * @return {[type]} [description]
 */
function getCurrentDate(){
	var objToday = new Date()
	return (objToday.toLocaleString()).replace("/","-").replace("/","-");
}

/**
 * [Kennylog description]
 */
var Kennylog = function(){ }

Kennylog.prototype.logit = function(level,string){
	var globalfile = "log/kennyLog"+(getCurrentDate().split(','))[0].split('-')[1]+".txt";
	var globalfile_highlight = "log/kennyLog"+(getCurrentDate().split(','))[0].split('-')[1]+".html";

	var currentfile = "log/log "+(getCurrentDate().split(','))[0]+".html";

	var currentmessage = "\n \n ["+(getCurrentDate()).replace("-","/").replace("-","/")+"] ["+level+"]: "+string;
	var currentmessage_highlignt = "<br><b>["+(getCurrentDate()).replace("-","/").replace("-","/")+"]</b> <span class='"+level+"'>["+level+"]</span>: <i>"+string+"</i>";

	if(!fs.existsSync(globalfile) && !fs.existsSync(globalfile_highlight)){
		createIfNotExist(globalfile_highlight,'<link rel="stylesheet" type="text/css" href="../kenny.css">');
		createIfNotExist(globalfile,'');
	}

	if(!fs.existsSync(currentfile)){
		createIfNotExist(currentfile,'<link rel="stylesheet" type="text/css" href="../kenny.css">');	
	}

	fs.appendFile(currentfile, currentmessage_highlignt, function(err, data){ if (err) console.log(err); });
	fs.appendFile(globalfile, currentmessage, function(err, data){ if (err) console.log(err); });
	fs.appendFile(globalfile_highlight, currentmessage_highlignt, function(err, data){ if (err) console.log(err); });

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

// A sample with a try catch
try {
   console.log(asdasd);
} catch(e) {
  klog.error(e.stack);
}

  klog.trace("Problem for level trace");
  klog.debug("Problem for level debug");
  klog.info("Problem for level info");
  klog.warn("Problem for level warn");
  klog.error("Problem for level error");
  klog.fatal("Problem for level fatal");