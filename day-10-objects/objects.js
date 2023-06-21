// 1. Write a function that takes an object as input and 
//returns a new object with the keys and values swapped.

function keysAndSwappedValues(object) {
    const swappedObject = {};
    for (const key in object) {
      swappedObject[object[key]] = key;
    }
    return swappedObject;
  }

  const object = {
    name: 'Clarah',
    age: 27,
    city: 'Auko'
  };
  
  const swappedObject = keysAndSwappedValues(object);
  console.log(swappedObject);
    


// 2. Write a function that takes an object and a key as input 
//and deletes the property with the specified key from the object.

function deletePropertyWithSpecifiedKey(objts, key) {
    delete objts[key];
  }

  
const objts = {
    make: 'Adidas',
    model: 'pro',
    year: 2023
  };
  
  deletePropertyWithSpecifiedKey(objts, 'model');
  console.log(objts);
  
    

