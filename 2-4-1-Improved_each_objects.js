// Complete 4 

// Basic Requirement

// A - 0

var obj = {
    a:1,
    b:2,
    c:3
};

function each(coll, func) { 
       if (Array.isArray(coll)) { 
             for (var i = 0; i < coll.length; i++) { 
                   func(coll[i], i); 
             } 
       } else { 
             for (var key in coll) { 
                   func(coll[key], key); 
             } 
       } 
 }


// A - 1

function values(obj) {
    var result = [];
    each(obj,function(val,key) {
        result.push(val);
    });
   return result;
}

function keys(obj) {
    var result = [];
    each(obj,function(val,key) {
        result.push(key);
    });
   return result;
}

// A - 2

function keysLongerThan(obj, num){
    var result = {};
    each(obj,function(val, key) {
        if (key.length > num) {
            result[key] = val;
        }
    });
    return result;
}

// A - 3

function incrementValues(obj){
    var result = {};
    each(obj,function(val, key) {
        if(typeof val === 'number'){
            result[key] = ++val;
        }
    });
    return result;
}


// A - 4

//First we have to 
function objectToArrayOrArrayToObject(coll){
    var result;
    if(Array.isArray(coll)){
        result = [];
        each(coll,function(val, i) {
            if (Array.isArray(val)) {
                result.push(objectToArrayOrArrayToObject(arrToObj(val)))
            } else if (typeof val === "object"){
                result.push(objectToArrayOrArrayToObject(objToArr(val)))
            } else {
                result.push(val);
            }
        return result;
        })
    }else if(typeof coll === 'object'){
        result = {};
        each(coll,function(val,key){
            if (Array.isArray(val)) {
                return objectToArrayOrArrayToObject(arrToObj(val))
            } else if (typeof val === "object"){
                return objectToArrayOrArrayToObject(objToArr(val))
            } else {
                return val;
            }
        })

    }
    return result;
}

var ex = {
    ages: 
        [   
            23, 
            44, 
            {
                min: 1, 
                max: 2
            }
        ], 
    people: 
        {
            height: 'tall', 
            eye_color: 'brown'
        }
    };



function objToArr(obj){
    var result = [];
    each(obj,function(val,i){
        result.push(val);
    });
    return result;
}

function arrToObj(arr){
    var result = {};
    each(arr,function(val,i){
        result[i] = val;
    });
    return result;
}
