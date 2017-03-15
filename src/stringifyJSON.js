// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  if (typeof obj === 'number' || obj === true || obj === false) {
  	return obj.toString();
  } else if (obj === null) {
  	return String(obj);
  } else if (typeof obj === 'string') {
  	return '\"'+ obj + '\"';
  } else if (typeof obj === 'object') {
  	var objArray = Array.prototype.slice.call(obj);
  	var result = [];
  	if (obj.length === 0) {
  		return '[]';
  	} else if (objArray.length === 0) {
  	  return result.toString();
    } else {
  	  result.push(objArray.pop());
  	  stringifyJSON(objArray);
    }
  }	
};
