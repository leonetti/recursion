// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  var string = '';
  
  // IF OBJECT IS ARRAY
  
  if (Array.isArray(obj)) {
  	string = '[';
  	for (var i = 0; i < obj.length; i++) {
  		// Check for nested Array
  		if (Array.isArray(obj[i])) {
  			stringifyJSON(obj[i]);
  		}
  		// Check for object already a string
  		else if (typeof obj[i] === 'string') {
  			string += ('"' + obj[i] + '"');
  		} 
  		// Check for multiple objects in array
  		else if (obj[i+1] || typeof obj[i+1] === 'number' && obj[i+1] === 0) {
  			string += obj[i] + ',';
  		}
  		//Otherwise add value to the string 
  		else {
  			string += obj[i];
  		}
  	}
  	return string + ']';
  }
  
  // IF OBJECT IS A VALUE
  if (typeof obj === 'string') {
  	return '"' + obj + '"';
  } else {
  	return string + obj;
  }
  
};
