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

const sumValues = (obj) => Object.values(obj).reduce((a, b) => a + b, 0);

// Test Cases
objA = { a: 1, b: 2, c: 3 };
objB = { j: 9, i: 2, x: 3, z: 4 };
objC = { w: 15, x: 22, y: 13 };

// Result
console.log(sumValues(objA));
console.log(sumValues(objB));
console.log(sumValues(objC));