// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

//document.body
//element.childNodes
//element.classList

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
	
	var elements = [];
	
	function checkNestedTags(currentTag, elements, className){
		var arrayOfTags = currentTag.childNodes;
		for (var i = 0; i < arrayOfTags.length; i++){
		    var classes = arrayOfTags[i].classList;
		    if (classes && classes.contains(className)) {
		        elements.push(arrayOfTags[i]);
		    }
		    if (arrayOfTags[i].childNodes[0]){
		        checkNestedTags(arrayOfTags[i], elements, className);
		    }
		}
	}
	checkNestedTags(document.body, elements, className);
	return elements;
};