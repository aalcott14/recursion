// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
) {
  var elements = [];
  function searchForElements(node) {
		if(node.classList.contains(className)){
       elements.push(node);
  	}
  	for(var i = 0; i < node.children.length; i++){
      searchForElements(node.children[i]);
  	}
  }
  searchForElements(document.body);
  return elements;
};
