import{getRandomIntInclusive,getRandomArbitrary} from './random-number.js';
import { photos } from './setting.js';
import { type } from './setting.js';
import { checkin } from './setting.js';
import { features } from './setting.js';


const getAvatar=function(){
  const xot=getRandomIntInclusive(1,10);
  let avatar = '';

  if(xot>=10){
    avatar={avatar: `img/avatars/user${   xot }.png`};
  }else{
    avatar={avatar: `${'img/avatars/user' + '0'}${ xot }.png`};
  }
  return avatar;};

const getLocation=function(){
  const lats=getRandomArbitrary(35.65000,35.70000,5);
  const leng=getRandomArbitrary(139.70000,139.80000,5);

  return{
    lat:lats,
    lng:leng,
  };
};



const newArray = function(featur){
  const lenght=featur.length-1;

  return featur.slice(getRandomIntInclusive(0,lenght));


};



const getPhotosArray=function(photo){
  const w = photo.length-1;

  return photo.slice(getRandomIntInclusive(0, w));
};

const getOffer=function(){
  const location=getLocation();



  return{
    title:'Заголовок обьявления',
    address:`${  location.lat  }, ${  location.lng}`,
    price:5000,
    type:type[getRandomIntInclusive(0,type.length)],
    rooms:5,
    guests:8,
    checkin:checkin[getRandomIntInclusive(0,checkin.length-1)],
    checkout:checkin[getRandomIntInclusive(0,checkin.length-1)],
    features:newArray(features),
    description:'Комната для отдыха недорого',
    photos:getPhotosArray(photos),
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


export{result,getArray};
