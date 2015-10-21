function loadCSSfile(filename, filetype){
	if(filetype == "css"){
		var fileref = document.createElement("link");
		fileref.setAttribute("rel", "stylesheet");
		//fileref.setAttribute("type", "text/css");
		fileref.setAttribute("href", filename)
	}
};

loadCSSfile("//fonts.googleapis.com/css?family=Open+Sans:400,700", "css");