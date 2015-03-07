function doText(node)  {
	var v = node.nodeValue;
	
    v = v.replace(/\bInternet of Things\b/g, "Butts");
    v = v.replace(/\bInternet of things\b/g, "Butts");
	v = v.replace(/\binternet of things\b/g, "butts");
	v = v.replace(/\binternet of Things\b/g, "butts");
	
	node.nodeValue = v;
}

var walk = function(node) {
	var child, next;
	switch(node.nodeType) {
		case 1:  //Element,
		case 9:  //Document,
		case 11: //Document fragment
			child = node.firstChild;
			while(child) {
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;
		case 3: // Text
			doText(node);
			break;
	}
}

walk(document.body);

// Largely based on https://github.com/logancollins/cloud-to-butt-safari