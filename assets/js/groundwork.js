var gw = {};

/* DOM */
gw.ready = function (callback){
  /in/.test(document.readyState)?setTimeout(gw.ready,9,callback):callback();
}

gw.getChildren = function (node, skipMe){
    var r = [];
    var elem = null;
    for ( ; node; node = node.nextSibling ) 
       if ( node.nodeType == 1 && node != skipMe)
          r.push( node );
    return r;
};

gw.getSiblings = function (node) {
    return getChildren(node.parentNode.firstChild, node);
}

gw.html = function(element,html) {
  if(!element) return;
  if(!html) return element.innerHTML;
  element.innerHTML = html;
}

gw.fullHTML = function (element) {
  var temp = document.createElement("DIV");
  temp.appendChild(element.cloneNode(true));

  return gw.html(temp);
}

/* Classes */
gw.hasClass = function (element, className) {
  return element.className && new RegExp("(^|\\s)" + className + "(\\s|$)").test(element.className);
}

gw.addClass = function (element, className) {
  var thisClassName = " " + className;
  element.className = element.className.replace(thisClassName,"");
  element.className = element.className + thisClassName;
}

gw.removeClass = function (element,className) {
  var thisClassName = " " + className;
  element.className = element.className.replace(thisClassName,"");
}

gw.toggleClass = function (element, className){
    if (!element || !className) return;

    var classString = element.className, nameIndex = classString ? classString.indexOf(className): -1;
    if (nameIndex == -1) {
      classString += ' ' + className;
    }
    else {
        classString = classString.substr(0, nameIndex) + classString.substr(nameIndex+className.length);
    }
    element.className = classString;
}

/* AJAX */
gw.post = function (url,data) {
  if (!url) return;
  if (!data) var data = {};

  var request = new XMLHttpRequest();
  request.open('POST', url, true);
  request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
  request.send(data);
}

/* Animations */
gw.fadeIn = function (element, duration) {
  if (!element) return;
  if (!duration) var duration = 400;
  element.style.opacity = 0;

  var last = +new Date();
  var tick = function() {
    element.style.opacity = +element.style.opacity + (new Date() - last) / duration;
    last = +new Date();

    if (+element.style.opacity < 1) {
      (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16)
    } else {
      element.style.opacity = 1;
    }
  };
  tick();
}

gw.fadeOut = function (element, duration) {
  if (!element) return;
  if (!duration) var duration = 400;
  element.style.opacity = 1;

  var last = +new Date();
  var tick = function() {
    element.style.opacity = -element.style.opacity - (new Date() - last) / duration;
    last = +new Date();

    if (+element.style.opacity > 0) {
      (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16)
    } else {
      element.style.opacity = 0;
    }
  };
  tick();
}