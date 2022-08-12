/*
    Write a function that takes an object with two properties and a string as arguments. It should return the value of the property with key equal to the value of the string. For this challenge, you could take from 10 up to 15 minutes.
    function myFunction(obj, key){return }

    Test Cases:
        myFunction({  continent: 'Asia',  country: 'Japan'}, 'continent')
        Expected 'Asia'
        
        myFunction({  country: 'Sweden',  continent: 'Europe'}, 'country')
        Expected 'Sweden'
*/

var demo = {
    continent:'Asia',
    country:'Japan'
};

function showProperty(obj, value){
    for (var prop in obj) {
        // if it encounters the first character of a property, for example:
        // u wrote 'cou', it determines its the country, so it gives Japan
        // it returns -1 if the element is not present
        if (prop.indexOf(value) == 0){
            return obj[prop];
        }
    }
}

output = showProperty(demo,'cou');
console.log(output);