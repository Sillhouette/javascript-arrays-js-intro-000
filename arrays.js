var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];


  function addElementToBeginningOfArray(array, element){
    return [element, ...array];
  }

  function destructivelyAddElementToBeginningOfArray(array, element){
    array.unshift(element);
<<<<<<< HEAD
    return array;
  }
=======
    console.log(array);
  }

>>>>>>> 1d7ca0807a394ea1eecc5cffa5bc8314b9b0b580
  function addElementToEndOfArray(array, element){
    return [...array, element];
  }

  function destructivelyAddElementToEndOfArray(array, element){
    array.push(element);
<<<<<<< HEAD
    return array;
  }

  function accessElementInArray(array, index){
    return array[index];
  }

  function destructivelyRemoveElementFromBeginningOfArray(array){
    array.shift();
    return array;
  }

  function removeElementFromBeginningOfArray(array){
    return array.slice(1);
  }

  function destructivelyRemoveElementFromEndOfArray(array){
    array.pop();
    return array;
  }

  function removeElementFromEndOfArray(array){
    return array.slice(0, array.length - 1);
=======
    console.log(array);
>>>>>>> 1d7ca0807a394ea1eecc5cffa5bc8314b9b0b580
  }
