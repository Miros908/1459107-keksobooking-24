import{minsymbols} from './form.js';//Минимальное количество симоволов для обьявления
import{priceForType} from'./setting.js';//цена в зависисмости от типа жилья
import{getPlaceholder} from './form.js';//изменения плейсхолдера
import{getMinprice} from './form.js';//изменение минимальной цены
import{settings} from './setting.js';//настройки заказчика
import { GetRoom } from './form.js';//количество человек в зависимости от комнат
import { getActiveForm } from './get-map.js';
import { getAds } from './get-data.js';
import { postAds } from './get-data.js';

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
const formsucces=document.querySelector('#success').content;
const succes=formsucces.querySelector('.success')
const body=document.querySelector('body')
const errormessage=document.querySelector('#errordata').content
const message=errormessage.querySelector('.errors')

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


getAds(maps,adress,tokioCenter,element,sizeIcon,sizeIconStandart,iconAnchorSize,body,message);
postAds(forms,body,succes)

succes.addEventListener('click',function(){
succes.remove()
})

