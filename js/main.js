import{minsymbols} from './form.js';//Минимальное количество симоволов для обьявления
import{priceForType} from'./setting.js';//цена в зависисмости от типа жилья
import{getPlaceholder} from './form.js';//изменения плейсхолдера
import{getMinprice} from './form.js';//изменение минимальной цены
import{settings} from './setting.js';//настройки заказчика
import { GetRoom } from './form.js';//количество человек в зависимости от комнат
import { getActiveForm } from './get-map.js';
import { getMarker } from './get-map.js';



const forms=document.querySelector('.ad-form');
const formfilter=document.querySelector('.map__filters');
const title=forms.querySelector('.titles');
const type=forms.querySelector('#type');
const price=forms.querySelector('.prices');
const room=forms.querySelector('#room_number');
const guest=forms.querySelector('#capacity');
const timeout=forms.querySelector('#timeout');
const timein=forms.querySelector('#timein');
const time=forms.querySelector('.ad-form__element--time');
const maps=L.map('map-canvas');
const tokioCenter={
  lat: 35.678046,
  lng: 139.76723,
};
const adress= document.querySelector('#address');
const template = document.querySelector('#card').content;
const element = template.querySelector('.popup');
const sizeIcon=[52, 52];
const iconAnchorSize=[26, 52];
const sizeIconStandart=[40, 40];




getActiveForm(forms,formfilter,maps,tokioCenter);

minsymbols(title);

type.addEventListener('change',()=> {
  getPlaceholder(priceForType,type,price);
  getMinprice(price,priceForType,type);


});


GetRoom(room,guest,settings);
room.addEventListener('change',()=> {
  GetRoom(room,guest,settings);
});


time.addEventListener('change',(evt)=> {
  timeout.value=evt.target.value;
  timein.value=evt.target.value;

});

const getAds= function(){
fetch('https://24.javascript.pages.academy/keksobooking/data',
{
  method: 'GET',
  credentials: 'same-origin',

})

  .then((response) => response.json())
  .then((data) => {

    getMarker(maps,adress,tokioCenter,element,sizeIcon,sizeIconStandart,iconAnchorSize,data);
  })

}

getAds()

