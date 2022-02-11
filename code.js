


//////////   Home Work 6  Part 1 Start ////////////////
function findOdd(number) {
    if (number % 10 == 0) {
        return true
    }
    if ((number % 10) % 2  == 0) {
       return false
    }
    return  findOdd((number - (number % 10)) / 10)
}



console.log(findOdd(929999111334))

//////////   Home Work 6  Part 1 End ////////////////




//////////   Home Work 6  Part 2 Start ////////////////


  function findMinPositiveNum(arr, val = -1) {
    if (arr[0] >= 0 && val == -1) {
      val = arr[0]
    }
    if (arr.length == 0) {
      return val
    }
    if (arr[0] >= 0 && arr[0] < val) {
      val = arr[0]
    }
    return findMinPositiveNum(arr.slice(1), val);
  }


  console.log(findMinPositiveNum([56,-9,87,-23,0,-105,55,1]))
  console.log(findMinPositiveNum([45,-9,15,5,45,-78]))
  console.log(findMinPositiveNum([-5,-9,-111,-1000,-7]))

//////////   Home Work 6  Part 2 End ////////////////




//////////   Home Work 6  Part 3 Start ////////////////


function findAscanding(arr, i = 0) {
    if (i == arr.length) {
      return -1;
    }
    if (arr[i] > arr[i + 1]) {
      return i + 1;
    }
    return findAscanding(arr, i + 1);
  }

  console.log(findAscanding([-9,-4,-4,-3,12,4,5]))
  console.log(findAscanding([2,12,15,48,64]))

//////////   Home Work 6  Part 3 End ////////////////




//////////   Home Work 6  Part 4 Start ////////////////

  function remFrstElement(arr, i = 1, nweArr = [] ) {
    if (arr.length == 0 ) {
        return nweArr
    }
    if (arr.length > 0 && arr[i] !== undefined ) {
       nweArr.push(arr[i])

    }
    if (arr.length == i ) {
        return nweArr
    }
    return remFrstElement(arr, i + 1, nweArr)
  }


 console.log(remFrstElement([6,78,'n',0,1]))
 console.log(remFrstElement([5]))
 console.log(remFrstElement([]))


  



//////////   Home Work 6  Part 5 Start ////////////////


function flatten(arr) {
  let flattenArr = [];
  arr.forEach(el => {
    if(Array.isArray(el)){
      const result = flatten(el);
      result.forEach(el => flattenArr.push(el));
    } else {
      flattenArr.push(el);
    }
  });
  return flattenArr;
}

console.log(flatten([1,[3,4,[1,2]],10]));

//////////   Home Work 6  Part 5 End ////////////////






//////////   Home Work 6  Part 6 Start ////////////////






const shift = ['a','b','c','d','e','f','g','h'] 
myNumber = 3
myNumberTwo = -2
// ['d','e','f','g','h','a','b','c'] 



function shiftArray ( arr, number, count = 0) {
  let unshiftCount = arr.length -1
   if(number < 0) {
    arr.unshift(arr[unshiftCount])
    arr.pop()
    return shiftArray(arr,  number + 1)
   }
  

  if (count == arr.length - number ) {
    return arr
  } else {
    arr.unshift(arr[unshiftCount])
    arr.pop()
  }
  

  return shiftArray (arr, count + 1, number)
}
 

//console.log(shiftArray(shift,myNumber))
//console.log(shiftArray(shift,myNumberTwo))





//////////   Home Work 6  Part 6 End ////////////////



//////////   Home Work 6  Part 7 Start ////////////////

function countNumber (number) {
  const myNumberArr = number.toString().split("")
  let sum = 0
  if(myNumberArr.length > 0) {
    for(let i = 0; i< myNumberArr.length; i++) {
      sum +=  parseInt(myNumberArr[i])
    }
    if ( sum > 10) {
      return countNumber(sum)
    }
  }
  return sum  
}


console.log(countNumber (14))
console.log(countNumber (2))
console.log(countNumber (999999999999))






//////////   Home Work 6  Part 7 End ////////////////






//////////   Home Work 6  Part 8 Start ////////////////



const user = {
  id:1, 
  name:"nikolay",
  profession: "It",
  next :{
    id:2,
    name:"GG"
  }
}



function clone(target) {
  if (typeof target === 'object') {
      let cloneTarget = {};
      for (const key in target) {
          cloneTarget[key] = clone(target[key]);
      }
      return cloneTarget;
  } else {
      return target;
  }
};

console.log(clone(user))




//////////   Home Work 6  Part 9 Start ////////////////


const debounce = (func, delay) => {
    let debounceTimer
    return function() {
        const context = this
        const args = arguments
            clearTimeout(debounceTimer)
                debounceTimer = setTimeout(() => func.apply(context, args), delay)
    }
} 
document.getElementById("debounce").addEventListener('click', debounce(function() {
        alert("Hello\nNo matter how many times you" +
            "click the debounce button, I get " +
            "executed once every 3 seconds!!")
                        }, 3000));




//////////   Home Work 6  Part 9 End ////////////////



//////////   Home Work 6  Part 10 Start ////////////////

const throttle = (fn, delay) => {
  let last = 0
  return (...args) => {
    const now = new Date().getTime()
    if(now - last < delay) {
      return
    } 
    last = now
    return fn(...args)
  }
}



document.getElementById("trottle").addEventListener("click", throttle((e) => {
  console.log('you clicked me')

}, 3000 ));




//////////   Home Work 6  Part 10 End ////////////////



//https://www.youtube.com/watch?v=9NPPsP-4LBg