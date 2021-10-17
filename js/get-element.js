import{result} from './get-array.js';


var template = document.querySelector('#card').content;
var element = template.querySelector('.popup')


var announcement=function(info){
var newElement = element.cloneNode(true)

var tittle= newElement.querySelector('.popup__title')
tittle.textContent=info.offer.title

var address = newElement.querySelector('.popup__text--address')
address.textContent =info.offer.address

var price = newElement.querySelector('.popup__text--price')
price.textContent=info.offer.price+'₽/ночь'

var type =  newElement.querySelector('.popup__type')
if(info.offer.type==='bungalow'){
  type.textContent='Бунгало'
 }

 if(info.offer.type==='flat'){
   type.textContent='Квартира'
  }
  if(info.offer.type==='house'){
   type.textContent='Дом'
  }
  if(info.offer.type==='palace'){
   type.textContent='Дворец'
  }
  if(info.offer.type==='hotel'){
   type.textContent='Отель'
  }
 var guest= newElement.querySelector('.popup__text--capacity')
 guest.textContent=info.offer.rooms+' команты для '+info.offer.guests+' гостей'

 var time = newElement.querySelector('.popup__text--time')
 time.textContent='Заезд после '+info.offer.checkin+' выезд до '+info.offer.checkout

var features=newElement.querySelector('.popup__features')
features.innerHTML=info.offer.features

var description= newElement.querySelector('.popup__description')

description.textContent=info.offer.description

var photos= newElement.querySelector('.popup__photos')
var img=photos.querySelector('.popup__photo')
photos.innerHTML='';
for(let i=0;i<info.offer.photos.length;i++){
var cloneimg=img.cloneNode(true)
cloneimg.src=info.offer.photos[i]
photos.appendChild(cloneimg)

}

var avatar= newElement.querySelector('.popup__avatar')
avatar.src=info.author.avatar

var container =document.querySelector('#map-canvas')

container.append(newElement)

}


var ads=announcement(result[1])

export{ads}





