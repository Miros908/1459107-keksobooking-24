const getRandomIntInclusive = function(min, max) {
  if(min>max || min === max){
    throw('в заданом интервале нет целых чисел');
  }else{
    min = Math.ceil(min);//округляем на случай если min<1
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

};

getRandomIntInclusive();


function getRandomArbitrary(min, max) {

  if(min>max || min === max){
    throw('в заданом интервале нет целых чисел');
  }else{
    const RandomNumber=(Math.random() * (max - min) + min);
    return RandomNumber.toFixed(1);

  }

}


getRandomArbitrary();


