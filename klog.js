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
		createIfNotExist(globalfile_highlight,'<link rel="stylesheet" type="text/css" href="../klog_css/kenny.css">');
		createIfNotExist(globalfile,'');
	}

	if(!fs.existsSync(currentfile)){
		createIfNotExist(currentfile,'<link rel="stylesheet" type="text/css" href="../klog_css/kenny.css">');	
	}

	fs.appendFile(currentfile, currentmessage_highlignt, function(err, data){ if (err) console.log(err); });
	fs.appendFile(globalfile, currentmessage, function(err, data){ if (err) console.log(err); });
	fs.appendFile(globalfile_highlight, currentmessage_highlignt, function(err, data){ if (err) console.log(err); });

	console.log("Successfully Save to the Daily log File.");
    console.log(currentmessage);
};
module.exports = {
	trace: function(string){ 
		Kennylog.prototype.logit("TRACE", string);
	},
	debug : function (string) { 
		Kennylog.prototype.logit("DEBUG", string);
	},
	info : function (string) { 
		Kennylog.prototype.logit("INFO", string);
	},
	warn : function (string) { 
		Kennylog.prototype.logit("WARN", string);
	},
	error : function (string) { 
		Kennylog.prototype.logit("ERROR", string);
	},
	fatal : function (string) { 
		Kennylog.prototype.logit("FATAL", string);
	}
};