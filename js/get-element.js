import{result} from './get-array.js';


const template = document.querySelector('#card').content;
const element = template.querySelector('.popup');


const announcement=function(info){
  const newElement = element.cloneNode(true);

  const tittle= newElement.querySelector('.popup__title');
  tittle.textContent=info.offer.title;

  const address = newElement.querySelector('.popup__text--address');
  address.textContent =info.offer.address;

  const price = newElement.querySelector('.popup__text--price');
  price.textContent=`${info.offer.price}₽/ночь`;

  const type =  newElement.querySelector('.popup__type');
  if(info.offer.type==='bungalow'){
    type.textContent='Бунгало';
  }

  if(info.offer.type==='flat'){
    type.textContent='Квартира';
  }
  if(info.offer.type==='house'){
    type.textContent='Дом';
  }
  if(info.offer.type==='palace'){
    type.textContent='Дворец';
  }
  if(info.offer.type==='hotel'){
    type.textContent='Отель';
  }
  const guest= newElement.querySelector('.popup__text--capacity');
  guest.textContent=`${info.offer.rooms} команты для ${info.offer.guests} гостей`;

  const time = newElement.querySelector('.popup__text--time');
  time.textContent=`Заезд после ${info.offer.checkin} выезд до ${info.offer.checkout}`;

  const features=newElement.querySelector('.popup__features');
  features.innerHTML=''
  for(let i = 0;i<info.offer.features.length;i++){
   var featur=document.createElement('li')
   featur.classList.add('popup__feature')
   featur.classList.add('popup__feature'+'--'+ info.offer.features[i])
   features.appendChild(featur)

  }

  const description= newElement.querySelector('.popup__description');

  description.textContent=info.offer.description;

  const photos= newElement.querySelector('.popup__photos');
  const img=photos.querySelector('.popup__photo');
  photos.innerHTML='';
  for(let i=0;i<info.offer.photos.length;i++){
    const cloneimg=img.cloneNode(true);
    cloneimg.src=info.offer.photos[i];
    photos.appendChild(cloneimg);

  }

  const avatar= newElement.querySelector('.popup__avatar');
  avatar.src=info.author.avatar;

  const container =document.querySelector('#map-canvas');

  container.append(newElement);

};


const ads=announcement(result[1]);

export{ads};


