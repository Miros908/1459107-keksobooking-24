const getRandomIntInclusive = function(min, max) {
if(min>max || min==max){
  console.log('в заданом интервале нет целых чисел');
}else{
  min = Math.ceil(min);//округляем на случай если min<1
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

}

getRandomIntInclusive(5,10);


function getRandomArbitrary(min, max) {

  if(min>max || min==max){
    console.log('в заданом интервале нет целых чисел');
  }else{
  const RandomNumber=(Math.random() * (max - min) + min);
  return RandomNumber.toFixed(1);
  }
}



