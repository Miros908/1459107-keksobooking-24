const getRandomIntInclusive = function(min, max) {
  if(min>max || min === max){
    throw('в заданом интервале нет целых чисел');
  }else{
    min = Math.ceil(min);//округляем на случай если min<1
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

};


function getRandomArbitrary(min, max,dec) {

  if(min>max || min === max){
    throw('в заданом интервале нет целых чисел');
  }else{
    const RandomNumber=(Math.random() * (max - min) + min);
    return Number(RandomNumber.toFixed(dec));

  }

}


const getAvatar=function(){
  const xot=getRandomIntInclusive(1,10);
  return  {avatar: `img/avatars/user${xot}.png`};
};

const getLocation=function(){
  const lats=getRandomArbitrary(35.65000,35.70000,5);
  const leng=getRandomArbitrary(139.70000,139.80000,5);

  return{
    lat:lats,
    lng:leng,
  };
};

const features =[
  'wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner',
];

const newArray = function(){
  const array=features.slice(getRandomIntInclusive(0,features.lenght-1));
  return{
    array,
  };
};

const photos=[
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg.',
];

const getPhotosArray=function(){
  const photosArray=photos.slice(getRandomIntInclusive(0,photos.lenght-1));
  return{
    photosArray,
  };
};

const getOffer=function(){
  const location=getLocation();
  const type=[
    'palace','flat','house','bungalow','hotel',
  ];
  const checkin=[
    '12:00','13:00','14:00',
  ];


  return{
    title:'Заголовок обьявления',
    address:`${  location.lat  }, ${  location.lng}`,
    price:5000,
    type:type[getRandomIntInclusive(0,type.length)],
    rooms:5,
    guests:8,
    checkin:checkin[getRandomIntInclusive(0,checkin.length-1)],
    checkout:checkin[getRandomIntInclusive(0,checkin.length-1)],
    features:newArray(),
    description:'Комната для отдыха недорого',
    photos:getPhotosArray(),
  };

};


const getArray=function(){
  return{
    author:getAvatar(),
    offer:getOffer(),
    location:getLocation(),
  };
};


const result = Array.from({length:10},getArray);

