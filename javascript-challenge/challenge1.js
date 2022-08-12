/* 
    Write a function that takes an object (a) as argument, return the sum of all object values. You could use regular or arrow function format for this. For this challenge, you could take from 10 up to 15 minutes.
    function myFunction(a){return }

	Test Cases:
		myFunction({a:1,b:2,c:3})
		Expected6
		
        myFunction({j:9,i:2,x:3,z:4})
		Expected18
			
        myFunction({w:15,x:22,y:13})
		Expected50
*/


const numbers = {};
numbers.n1 = 1;
numbers.n2 = 2;
numbers.n3 = 3;

let sum=0;
function sumNumbers(numbers){
    for(let key in numbers){
        sum += numbers[key];
    }
    console.log(sum);
}
let value=sumNumbers(numbers);