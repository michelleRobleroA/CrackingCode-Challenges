/*
    Write a function that takes an object with two properties and a string as arguments. It should return the value of the property with key equal to the value of the string. For this challenge, you could take from 10 up to 15 minutes.
    function myFunction(obj, key){return }

    Test Cases:
        myFunction({  continent: 'Asia',  country: 'Japan'}, 'continent')
        Expected 'Asia'
        
        myFunction({  country: 'Sweden',  continent: 'Europe'}, 'country')
        Expected 'Sweden'
*/

const getKeyValues = (obj, property) => obj[property];

obj1 = { continent: "Asia", country: "Japan" };
obj2 = { country: "Sweden", continent: "Europe" };

// Test Cases:
console.log(getKeyValues(obj1, "continent")); //Expected 'Asia'
console.log(getKeyValues(obj2, "country")); //Expected 'Sweden'