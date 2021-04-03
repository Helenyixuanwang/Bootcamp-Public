//Given array and an additional value, insert this value at the beginning of the array. Do this without using any built-in array methods.
function pushFront(arr, num) {
    for ( var i = arr.length-1; i>=0; i--) {
        arr[i+1] = arr[i];
    }
    arr[0] = num;
    return arr;
}
var newarr = pushFront([1,2,3], 19);
console.log(newarr);

//Array: Insert At. Given array, index, and additional value, insert th evalue into array at given index. Do this without using built-in array methods. You can think of pushFront(arr,val)as equivalent to insertAt(arr,0,val).
function insertAt(arr,index,val) {
    if (index > arr.length) {
        console.log("set index less than or equal to array's length")
    }
    else {
    
    for (var i = arr.length-1;i >= index; i--) {
        arr[i+1] = arr[i];
        console.log("index "+i, "array is "+"["+arr+"]");
        
    }
    arr[index]=val;
    console.log("The length of current array is "+arr.length);
    return arr;
}
}
var array = insertAt([1,23,10,32],0,'Dojo')
console.log(array);

//Array: Pop and Front. Given array, remove and return the value at the beginning of the array. Do this without using any built-in array methods except pop().
function popFront(arr) {
       var num=arr[0];
    for ( var i = 1; i < arr.length; i++) {
            arr[i-1]=arr[i];
            
        
               
    }
     arr.pop();
    console.log(arr);
    return num;
  
}
var y= popFront([1,2,3,4,'coding','dojo',7,8,9,10]);
console.log("The first value is "+y);

//Array:Remove AT. Given array and an index into array, remove and return the array value at that index. Do this without using built-in array methods except pop(). Think of PopFront(arr) as equivalent to removeAT(arr,0).
function removeAt(arr,index) {
    var num = arr[index];
    if (index > arr.length) console.log("Beyong Array's range, unvalid")
    else {
    for (var i = index+1; i <arr.length; i++) {
        arr[i-1]=arr[i];
        console.log("["+arr+"]");
    }
    arr.pop();
    console.log("["+arr+"]")
    return num;
}
}
var x=removeAt([2,9,10,-8,1,'Dojo'],0);
console.log(x);

//array: swap pairs. swap positions of successive of values of given array. If ilength is odd, do not change the final elements. As with all array challenges, do this without using any built-in array methods.
function swapPairs(arr) {
   for (var i = 0; i < arr.length-2; i+=2) {
     var temp = arr[i];
     arr[i] = arr[i+1];
     arr[i+1] = temp;
    
}
if (arr.length % 2 === 1)
    return arr;
else {
    temp=arr[arr.length-2];
    arr[arr.length-2]= arr[arr.length-1];
    arr[arr.length-1]=temp;
    return arr
    }

}
var newarr= swapPairs([1,2,3,4,'coding','dojo',8,'hi',100,98,-9,41]);
console.log(newarr);

//array: Min to Front. Given an array of comparable values, move the lowest element to array's front, shifting backward any elements previously ahead of it. Do not otherwise change the array's order. Given[4,2,1,3,5] change it to [1,4,2,3,5] and return it. As always, do this without using built-in functions.
/* The following looks like a min-max order code, not for this minToFront function.
function minToFront (arr) {
    var num=arr[0];
    for ( var i= 1; i < arr.length; i++) {
       
        if ( num > arr[i]) {
            num = arr[i];
            var index = i;

            for (var j=index-1; j>=0; j--) {
                arr[j+1]=arr[j];
                console.log(arr);
            }
            arr[0]=num;
            
        }
    }
    return arr;

}
var array = minToFront([4,3,2,1]);
console.log(array);
*/

function minToFront(arr) {
    var min = arr[0];
    for ( var i = 1; i < arr.length; i++) {
        if (min > arr[i]) {
            min = arr[i];
            var index = i;
        }
    }
    for (var j=index-1 ;j >= 0; j--) {
        arr[j+1]= arr[j];
    }
    if (arr[0]==min) {
           index=0;
           console.log("The minimum index is "+ index, ", and Min value is "+ min);  
        }
    else {
        arr[0]=min;
    console.log("The minimum index is "+ index, ", and Min value is "+ min);
    }
    return arr;
}
var array = minToFront([4,6,7,-5,8,-1]);
console.log("The final array is "+"["+array+"]");