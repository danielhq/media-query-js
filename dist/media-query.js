// TODO:
// Add px to em conversion, allowing to output em values with pixels input
// Add more complex queries

//Pixel value of our base font
const FONT_BASE = 16;

const breakpoints = {
    xs: 470,
    sm: 768,
    md: 960,
	lg: 1200
};

function em(pixels) {
	return Number( pixels / FONT_BASE );
}


var utils = {

	// Returns true if the string contains "px"
    isPixel: function(value) {
    	return value.indexOf('px') > 1;
    },

    // Returns true if the string contains "em"
    isEm: function(value) {
    	return value.indexOf('em') > 1;
    },

    //Returns the numeric value from a string
    gimmeValue: function(string) {
    	var value;
    	if ( utils.isPixel(string) ) {
        	value = string.split("px")[0];
        } else if ( utils.isEm(string) ) {
        	value = string.split("em")[0];
        }

        return Number(value);
    }

}

var media = {
    query: function(breakpoint = media.md, operator = "<=") {
    	var unit = "em";
		return "(" +
        media.getOperator(operator) +
        ":" +
        media.getBreakpoint(breakpoint, unit) +
       " )";
    },

    // Gets the pixel value from our object
    // if breakpoint is not found returns the conversion in em if a pixel value is passed, otherwise your breakpoint is passed.
	getBreakpoint: function(breakpoint, unit) {
    	var obj = breakpoints;
        found = false;
        for (const prop in obj) {
        	if ( prop === breakpoint ) {
            	found = true;
          		return obj[prop];
          	}
        }
        if ( !found ) {
        	if ( utils.isPixel(breakpoint) ) {
        		return em( utils.gimmeValue( breakpoint ) ) + unit;
            } else {
            	return breakpoint;
            }
        }
    },

    // Returns the operator, defaults to what is passed if not found.
    getOperator: function(operator) {
        if (operator == "<=") {
            return "min-width";
        } else if (operator == ">=") {
            return "max-width";
        } else {
        	return operator;
        }
    }



};