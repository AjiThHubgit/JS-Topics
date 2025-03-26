String.prototype.myIncludes = function (searchString, position = 0) {
    console.log(this); // It Print like Object so we use toString for the below line.
    let str = this.toString();
    console.log(str); // Hello Worl
    let searchLen = searchString.length;
    let strLen = str.length;
    if (searchLen === 0) return true;
    // If position is negative, start from 0
    let start = Math.max(position, 0);
    // Loop through the string to find a match
    for (let i = start; i <= strLen - searchLen; i++) {
        console.log(str.substring(i, i + searchLen)); 
        if (str.substring(i, i + searchLen) === searchString) { // substring(start, end)
            return true; // Match found
        }
    }

    return false; // No match found
};

// Example usage
console.log("Hello World".myIncludes("d")); 