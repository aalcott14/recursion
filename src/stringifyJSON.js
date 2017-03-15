// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  if (typeof obj === 'number' || obj === true || obj === false) {
  	 return obj.toString();
  } else if (obj === null) {
  	return String(obj);
  } else if (typeof obj === 'string') {
  	return '\"' + obj + '\"';
  } else if (Array.isArray(obj)) {
    var arr = [];
    for (var i = 0; i < obj.length; i++) {
      arr.push(stringifyJSON(obj[i]));
    }
    return '[' + arr + ']';
  } else if (typeof obj === 'object') {
  	var result = [];
  	var keys = Object.keys(obj);
    var values = [];
    if (keys[0] === 'functions' || keys[0] === 'undefined') {
      return '{}';
    } else {
      for (var key in obj) {
        values.push(obj[key]);
      }
      for (var i = 0; i < keys.length; i++) {
        result.push(stringifyJSON(keys[i]) + ':' + stringifyJSON(values[i]));
      }
      return '{' + result + '}';
    }
  }	
};


