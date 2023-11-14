//       1. Declare and initialize an empty multidimensional array.
// (Array of arrays)
var arrys =[  [    ] ,     [   ]  , [ ] ]
// 2. Declare and initialize a multidimensional array
// representing the following matrix:
     var arr =[ [0,1,2,3  ] ,   [ 1,0,1,2  ]   ,  [ 2,1,0,1  ]           ]
     for ( var i =0; i < arr.length; i++   ){
     for ( var j =0;j <arr[i].length; j++      ){
      document.write( arr[i]     [j]        )
     }
     document.write("<br>")
     }
// 3. Write a program to print numeric counting from 1 to 10.
   for ( var i = 1; i <=10; i++   ){
 document.write(   i   +     "<br>"    )
   }
//       4. Write a program to print multiplication table of any
// number using for loop. Table number & length should be
// taken as an input from user.
        var table = prompt("enter your table")
        var length = prompt("enter  the length")
       for (var i=1;  i <= length ; i++ ){
           document.write(    table +"  x " + i +" = " + i * table + "<br>" )
       }
// //        5. Write a program to print items of the following array
// // using for loop:
// // fruits = [“apple”, “banana”, “mango”, “orange”,
// // “strawberry”]
   var fruits = [ "Apple","Banana","Orange" , "Mango","Stawberry "     ]
      document.write(         fruits    +   "  <br> " )
      document.write("Elenment at index 0 is : " + fruits [ 0] +   "  <br> "  )
      document.write("Elenment at index 1 is : " + fruits [ 1]  +   "  <br> "   )
      document.write("Elenment at index 2 is : " + fruits [ 2]    +   "  <br> "       )
      document.write("Elenment at index 3 is : " + fruits [ 3]      +   "  <br> "       )
      document.write("Elenment at index 4 is : " + fruits [ 4]     +   "  <br> "        )
// 6. Generate the following series in your browser. See
// example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k
document.write(  "<h3>   Counting :    <h3>")
for (var i = 1; i <=15; i++){
             document.write(   i  +"," )  
}
document.write(  "<h3> Revers  Counting :    <h3>")
for (var i = 10; i >=0; i--){
             document.write(   i  +"," )  
}
document.write(  "<h3>  Even :    <h3>")
for (var i = 2; i <=20; i+= 2){
             document.write(   i  +"," )  
}
document.write(  "<h3>  Odd:    <h3>")
for (var i = 1; i <=19; i+= 2){
             document.write(   i  +"," )  
}
document.write(  "<h3>    Series        <h3>")
for (var i = 2; i <=20; i+=2){
             document.write(   i +"k,")
}
// 7. You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array.
// After searching, prompt the user whether the given item is
// found in the list or not.
             var userinp =prompt("  What do you want to order? ")
        var store =[ "cake"," Apple pie ","cookie" ,"chips","patties" ]
         var match = false; 
        for (var i = 0; i < store.length; i++  ){
            if (userinp === store [i]){
                  match = true
                  alert(   " This item is available  in my bakery")
                  break;
            }  
        }    
        if ( match == false ){
            alert(    " This is not available in my bakery")
        }
      // 8. Write a program to identify the largest number in the
// given array.
   var num = [24, 53, 78, 91, 12]
 var largestNum =num[0];
  for (var i =0; i<num.length;i++){
    if(num[i] > largestNum){
        largestNum = num[i]
    } 
  }
  document.write(" <h2>Array Items are :24, 53, 78, 91, 12 <h2> ")
  document.write("  <h2>  The largest Number is : " +largestNum +"<h2>");
// 9. Write a program to identify the smallest number in the
// given array.
var num = [24, 53, 78, 91, 12]
 var smallest =num[0];
  for (var i =0; i<num.length;i++){
    if(num[i] < smallest){
        smallest = num[i]
    } 
  }
  document.write(" <h2>Array Items are :24, 53, 78, 91, 12 <h2> ")
  document.write("  <h2>  The smallest Number is : " +smallest +"<h2>");


//       10. Write a program to print multiples of 5 ranging 1 to
// // 100.
document.write("Q No is 10 <br> ")
for (var i=5; i <=100;i+=5 ){
    document.write(i +",")
}
