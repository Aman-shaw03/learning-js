
// Summary:
// There are two types of arrays: holey arrays and continuous arrays. These arrays can contain three types of elements: SMI (Small Integer), Packed Element, and Double.

// 1. **Holey Array**: A holey array is an array that contains missing or empty elements. For example, [1, 2, , 4] is a holey array because it has a missing element. Holey arrays are less optimized for performance.

// 2. **Continuous Array**: A continuous array is an array that does not contain missing or empty elements. For example, [1, 2, 3, 4] is a continuous array because it has no missing elements. Continuous arrays are more optimized for performance.

// In terms of optimization, continuous arrays are more efficient and optimized for various operations compared to holey arrays.

// tier list for Optimatiztion are :

// continuous
// SMI => Double => Packed elements

// Holey
// SMI => Double => Packed elements

/* So the code starts from a 2 line code 
const myArr = []
%DebugPrint(myArr)

result => undefined function debug print => resason that our node is running from V8 engine same if i explore we found there are so many more engines of JS , one of em is v8-debug which require us to install it , flag it and then use it 

upon using It will show us some category of optimatization of our Array (myArr) like continuous/packed and Holey*/

// once a Array has been optimatised as anything => it can further downgrade but never upgrade interms of optimization 

/*SMI for array like [1,2,3,4,5] include small integer and continupus and if we add a float/boolean (6.0,8.2) it will downgrade to "double", and if we add anything (function, object etc) => it will further downgrade to Packed elements.

same process of optimatization for Holey elements */