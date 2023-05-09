/**
 * greet(name):
 * - receives a name
 * - logs "Hello <name>"
 *
 * e.g.
 * greet("Hamza") logs "Hello Hamza"
 */
function greet(name) {
  console.log("Hello"+" "+name);
}
greet("Ahmad");
/**
 * isOdd(n):
 * - receives a number n
 * - returns true if it's odd, false otherwise
 *
 * e.g.
 * isOdd(7) -> true
 * isOdd(10) -> false
 */
function isOdd(n) {
  if(n%2 == 1){

  console.log("true");
  }else{
    console.log("false");
  }

  }
  isOdd(7);

/**
 * oddsSmallerThan(n):
 * - receives a number n
 * - returns the number of ODD numbers smaller than n
 *
 * e.g.
 * oddsSmallerThan(7) -> 3
 * oddsSmallerThan(15) -> 7
 */
function oddsSmallerThan(n) {
  let count =0;
for(let i =0; i<n-1; i++){
if (n%2==1){

  count++;
i++
}
}
return count;

}
console.log(oddsSmallerThan(15))
/**
 * squareOrDouble(n):
 * - receives a number n
 * - returns its square if it's odd
 * - returns its double if it's even
 *
 * e.g.
 * squareOrDouble(16) -> 32
 * squareOrDouble(9) -> 81
 */
function squareOrDouble(n) {
  if (n%2==1){
    return(Math.pow(n,2));
  }else if (n%2==0){

return(n*2);

    }
  }
let num1=squareOrDouble(16);
console.log(num1);
