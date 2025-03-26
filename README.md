# JS-Topics

In JavaScript, falsy values are values that evaluate to false when used in a Boolean context. There are exactly 7 falsy values:

Falsy Values in JavaScript:
false → The Boolean false
0 → The number zero (also -0 and 0n for BigInt)
"" (empty string) → A string with no characters
null → Represents the absence of any object value
undefined → A variable that has been declared but not assigned a value
NaN → "Not-a-Number," usually from invalid mathematical operations
document.all → A special case (deprecated but still falsy)

if (false) console.log("Falsy");  // Won't execute
if (0) console.log("Falsy");      // Won't execute
if ("") console.log("Falsy");     // Won't execute
if (null) console.log("Falsy");   // Won't execute
if (undefined) console.log("Falsy");  // Won't execute
if (NaN) console.log("Falsy");    // Won't execute



if ("Hello") console.log("Truthy");  // Output: Truthy
if ([]) console.log("Truthy");       // Output: Truthy
if ({}) console.log("Truthy");       // Output: Truthy
if (1) console.log("Truthy");        // Output: Truthy
if (-42) console.log("Truthy");      // Output: Truthy
if (" ") console.log("Truthy");      // Output: Truthy
