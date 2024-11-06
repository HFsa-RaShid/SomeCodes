// console.log(5);


// function sum(num1,num2){
//     return num1+num2;
// }
// const Total = sum(5,10);
// console.log(Total);



// function sumOfArr(arr){
//     let sum =0;

//     for(let ele  of arr){
//         sum += ele;
//     }
//     console.log(sum);//16
// }

// const arr =[1,2,3,4,6];
// sumOfArr(arr);


// let a= 6;
// let b= 7;

// let maxValue = Math.max(a,b);
// console.log(maxValue);



// const arr = [1,2,3,4,5,67];
// const maxEle = Math.max(...arr);
// console.log(maxEle);


// function unique(arr){
//     let newArr =[];
//     for(let ele of arr){
//         if(newArr.includes(ele) === false){
//             newArr.push(ele);
//         }
//     }
//     return newArr;

// }

// const arr = [1,2,1,2,3,4,6];

// let size = unique(arr).length;
// console.log(size);



// function isPrime(n){
//     if(n<=1) return false;
//     for(let i=2; i<=Math.sqrt(n);i++)
//     {
//         if(n%i === 0)
//         {
//             return false;
//         }
//     }
//     return true;

// }

// let num = 1;
// let value = isPrime(num);
// if(value===true)
// {
//     console.log('prime');
// }
// else
// {
//     console.log("Not Prime");
// }



// function isPrime(n){
//     if(n<=1) return false;
//     for(let i=2; i<=Math.sqrt(n);i++)
//     {
//         if(n%i === 0)
//         {
//             return false;
//         }
//     }
//     return true;

// }

// let num = [1,2,3,4,5,6,7,8]
// let value = num.filter(isPrime).length;
// console.log(value);



// function countPalindrome(n){
//     let str = n.toString();
//     return str === str.split('').reverse().join('');

// }

// let arr = [111,232,345,567,977];
// let count = arr.filter(countPalindrome).length;
// console.log(count);


// function countPalindrome(str){
//     return str === str.split('').reverse().join('');

// }

// let arr = ['111','232','345','567','977'];
// let count = arr.filter(countPalindrome).length;
// console.log(count);


// function palindrome(str){
//     return str === str.split('').reverse().join('');

// }

// let string = "aabaa";
// let ans = palindrome(string);
// if(ans ===  true){
//     console.log("Palindrome");
// }
// else{
//     console.log("Not Palindrome");
// }


// function count(n){
//     if(n === 1) return 1;
//     let c =2;

//     for(let i=2; i<n; i++){
//         if(n%i === 0){
//             // console.log(i);
//             c++;
//         }
//     }
//     return c;

// }
// let num =20;
// let ans = count(num);
// console.log(ans);


// function sumNaturalNum(n){
//     return ((n * (n+1))/2);
// }

// console.log(sumNaturalNum(5));


// function isPerfectSquare(n){
//     let ans = Math.sqrt(n);
//     let result = Number.isInteger(ans);
//     if(result === true){
//         console.log("perfect Square");
//     }
//     else{
//         console.log("Not perfect Square");
//     }
// }

// isPerfectSquare(18);



// function factorial(n){
//     if(n === 0) return 1;
//     return n * factorial(n-1);
// }
// console.log(factorial(4));


// function fibonacci(n){
//     let fib = [0,1];
//     for(let i=2; i<n; i++){
//         fib.push(fib[i-1] + fib[i-2]);
//     }
//     return fib;

// }
// console.log(fibonacci(5));


// function sorting(arr){
//     let sorts1 = [...arr].sort(function(a,b) {return a-b});
//     let sorts2 = [...arr].sort(function(a,b) {return b-a});
//     console.log(sorts1);
//     console.log(sorts2);
// }
// let arr = [1,12,2,3,34];
// sorting(arr);


// const numbers = [1, 2, 3, 4, 5];
// const squares = numbers.map(num => num * num);
// console.log(squares);

const fruits = ["Apple", "Banana", "Cherry", "Date"];
const result = fruits.join(" - ");
console.log(result);

// let arr = [1,2,3,4,5]
// let rev = [];
// for(let num of arr){
//     rev.unshift(num);
// }
// console.log(rev);


// let a ='hafsa';
// let b = a;
// console.log(b);


// let a = 'hafsa';
// console.log(a.toUpperCase());

// let b= 'HAFSA';
// console.log(b.toLowerCase());


// let a = 'hafsa';
// let b = '         hafsa';

// console.log(b.trim());


// const a = 'afgshdj';
// const ans = a.slice(1,4);
// console.log(ans);

// let a= [1,2,3,4,5];
// const ans = a.slice(1,4);
// console.log(ans);

// let a= [1,2,3,4,5];
// const ans = a.join('|');
// console.log(ans);



// ts


// unique value of a array

// const removeDuplicates = (numbers: number[]): number[]=>{
//     return [...new Set(numbers)]; //spreed for show array
// }

// const result22 = removeDuplicates([1, 2, 2, 3, 4, 4, 5]);
// console.log(result22);
