// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {

	var convertToString = '';

	if (Array.isArray(obj)) {
	    var mapped = obj.map(function(item) {
	    	return stringifyJSON(item);
	    });
	    return '[' + mapped + ']';
	  }
	  if (obj && typeof(obj) === 'object') {
	    var strings = [];
	    for (var key in obj) {
	      if (obj[key] === undefined || typeof(obj[key]) === 'function') {
	         break;
	      }
	      strings.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key]));
	    }
	    return '{' + strings.join() + '}';
	  }
	  if (typeof(obj) === 'string') {
	    return '"' + obj + '"';
	  }
	  return convertToString + obj;
};
