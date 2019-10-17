// Basic requirement

// A - 0

function each(coll, f) { 
    if (Array.isArray(coll)) { 
        for (var i = 0; i < coll.length; i++) { 
            f(coll[i], i); 
        } 
    } else { 
        for (var key in coll) { 
            f(coll[key], key); 
        } 
    } 
} 

function map(array, f) { 
    var acc = []; 
    each(array, function(element, i) { 
        acc.push(f(element, i)); 
    }); 
    return acc; 
}


// A - 1

var people = [ 
    {name: {first: 'Grace', middle: 'B.', last: 'Hopper'}, age: 85}, 
    {name: {first: 'Adele', last: 'Goldstine'}, age: 43}, 
    {name: {first: 'Ada', last: 'Lovelace'}, age: 36}, 
    {name: {first: 'Hedy', middle: 'E.', last: 'Lamarr'}, age: 85}, 
    {name: {first: 'Ruchi', last: 'Sanghvi'}, age: 34} 
]; 

function ages(people) { 
    return map(people, function(person) { 
        return person.age;
    }); 
}

function firstNames(people) { 
    return map(people, function(person) { 
        return person.name.first;
    }); 
}

function lastNames(people) { 
    return map(people, function(person) { 
        return person.name.last;
    }); 
}

function fullNames(people) { 
    return map(people, function(person) { 
        return person.name.first + ' ' + person.name.last;
    }); 
}

// A - 2

function abs(x){
    if (x >= 0) { 
        return x; 
    } 
    return -x;
}

var exp = [1, -2, 37, -100, -8, 5];

// Method using ES6: 

map(exp, x => (x>0) ? x : -x);

// A - 3

function max(array){
    var highest = array[0];
    each(array, function(n){
        highest = n > highest ? n : highest;
    });
    return highest;
}

function maximums(array){
    return map(array,function(arr){
        return max(arr);
    })
}

// More Practice

// A - 1

function exponentials(numbers) { 
    return map(numbers,function(n) {
        return Math.pow(n,n);
    }) 
} 

// A - 2

function reverse(str){
    var result = '';
    for(var i = str.length-1; i >= 0; i--){
        result += str[i];
    }
    return result;
}

//  Integrated in JS and does the same as reverse() above
// 'string'.split('').reverse(). join('') 

function reverseWords(str) {
    return map(str.split(' '), function(word){
        return reverse(word);
    }).join(' ');
}

// Integrated in JS and does the same as reverseWords() above
//'string'.split(' ').map(word => word.split('').reverse().join('')).join(' ')
 

// A - 3

function pluck(array, key) {
    return map(array,function(val, prop) {
        // console.table(val);
        return val[key];
    });
}


function parseCSV(str){
    return map(str.split('/n'),function(elem){
        var arr = elem.split(',')
        if (arr.length === 3 ){
            return {
                name: {
                    first: arr[0],
                    last: arr[1]
                },
                age: arr[2]
            }
        } else {
            return {
                name: {
                    first: arr[0],
                    middle: arr[1],
                    last: arr[2]
                },
                age: arr[3]
            }
        }

    });
}



