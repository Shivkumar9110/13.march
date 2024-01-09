// example, if the input array is [5, 2, 7, 1, 9], the function should return an object { max: 9, min: 1 }


function fun(...i){
  let array=i;
return console.log(`max:${Math.max(...array)},min:${Math.min(...array)}`)

}
fun(5,2,7,1,9)


