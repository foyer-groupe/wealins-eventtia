// add new styles on iframe
let styleIframe = function(iFrameSelector, stylesheetURL) {

	var cssLink = document.createElement("link") 
	cssLink.href = stylesheetURL; 
	cssLink.rel = "stylesheet"; 
	cssLink.type = "text/css";

	// if we have only one frame
	// Works for Firefox
	if ( frames.length = 0 ) {
		frames.frame.contentDocument.head.appendChild(cssLink);
	}
	// Works on Chrome & Firefox
	document.querySelector(iFrameSelector).contentDocument.head.appendChild(cssLink);

	// Debug
	console.log(frames, document.querySelector(iFrameSelector), cssLink);
};