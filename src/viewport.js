'use strict';

var inViewport = function() {

  this.viewports = {};
  
}

/**
 * Checks if given target is on or out of the window size
 * @param  {[type]} target [description]
 * @return {[type]}        [description]
 */

inViewport.prototype.is = function(target) {

	var targetType = this.getTargetType(target),
		targetWidth = targetType.width,
		windowWidth = window.outerWidth,
		isInViewport = false;

	/* If getTargetType() returns width and operators */
	if (targetWidth && targetType.operator) {

		switch(targetType.operator) {
			case ('<'):
				isInViewport = (windowWidth < targetWidth);
			break;
			case ('>'):
				isInViewport = (windowWidth > targetWidth);
			break;
			case ('>='):
			case ('=>'):
				isInViewport = (windowWidth >= targetWidth);
			break;
			case ('<='):
			case ('=<'):
				isInViewport = (targetWidth <= windowWidth);
			break;
			case ('='):
				isInViewport = (targetWidth == windowWidth);
			break;
			default:
				isInViewport = (targetWidth <= windowWidth);
			break;
    }
    
	}
	/* If only a target with was set */
	else if (targetWidth) {

    isInViewport = (targetWidth <= windowWidth);
    
	}

  return isInViewport;
  
};

/**
 * Analyses the given target string and returns a object with width and operator values
 * @param  {string|number} target
 * @return {Object} target values
 */

inViewport.prototype.getTargetType = function(target) {

	var viewports = this.viewports,
		operator, targetWidth;

	if(!target) {

    return;
    
	}

	/* Check for string */
	if (typeof(target) === 'string') {

		/* Extract operators */
		if (target.match(/[<=>]{1,2}/)) {
			operator = target.match(/[<=>]{1,2}/)[0];
		}

		/* Is pixel value */
		if (target.match(/[0-9]*px/)) {
			targetWidth = parseInt(target.match(/[0-9]*px/)[0], 10);
		}
		/* Is a value in viewport set */
		else if (viewports) {

			if (target.match(/[<=>]{1,2}([a-zA-Z-]*)/) && target.match(/[<=>]{1,2}([a-zA-Z-]*)/)[1]) {

        targetWidth = viewports[target.match(/[<=>]{1,2}([a-zA-Z-]*)/)[1]];
        
      }
      
    }
    
  }
  
	/* If is number */
	else if (typeof(target) === 'number') {
    
    targetWidth = parseInt(target, 10);
    
	}

	return {
		'width': targetWidth,
		'operator': operator
  }
  
}

/**
 * Add/Replace set of viewports
 * @param {Object} viewports
 */

inViewport.prototype.setViewports = function(viewports) {

  this.viewports = viewports;
  
}

/**
 * Get the set of viewports
 * @return {Object} viewports
 */

inViewport.prototype.getViewports = function() {

  return this.viewports;
  
}

/**
 * Add single viewport to viewport list
 * @param {String} name 
 * @param {number} width
 */

inViewport.prototype.addViewport = function(name, width) {

  this.viewports[name] = parseInt(width, 10);
  
}