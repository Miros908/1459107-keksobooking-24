import {
  GetMinSymbols
} from './form.js';
import {
  priceForType
} from './setting.js';
import {
  getPlaceholder
} from './form.js';
import {
  getMinprice
} from './form.js';
import {
  settings
} from './setting.js';
import {
  setAvailableRoom
} from './form.js';
import {
  getActiveForm
} from './get-map.js';
import {  GetFormInizialization } from './form-inizialization.js';


import{getData} from './get-data.js';
import { sendForm } from './get-data.js';

import { center } from './setting.js';

import { marker } from './create-marker.js';
import { mainPinStandart } from './create-marker.js';
import { getMarker } from './get-map.js';

import{GetPredicate} from './filter.js';
const forms = document.querySelector('.ad-form');
const formfilter = document.querySelector('.map__filters');
const title = forms.querySelector('.titles');
const type = forms.querySelector('#type');
const price = forms.querySelector('.prices');
const room = forms.querySelector('#room_number');
const guest = forms.querySelector('#capacity');
const timeout = forms.querySelector('#timeout');
const timein = forms.querySelector('#timein');
const time = forms.querySelector('.ad-form__element--time');
const maps = L.map('map-canvas');


const adress = document.querySelector('#address');
const template = document.querySelector('#card').content;
const element = template.querySelector('.popup');


const formsucces = document.querySelector('#success').content;
const succes = formsucces.querySelector('.success');
const body = document.querySelector('body');
const errormessage = document.querySelector('#errordata').content;
const message = errormessage.querySelector('.errors');
const errortemplate=document.querySelector('#error').content;
const error=errortemplate.querySelector('.error');
const errorbutton=error.querySelector('.error__button');

const reset=forms.querySelector('.ad-form__reset');
const types=document.querySelector('#housing-type');
const rooms=document.querySelector('#housing-rooms');
const guests=document.querySelector('#housing-guests');
const houseprice=document.querySelector('#housing-price');


getActiveForm(forms, formfilter, maps, center);

GetMinSymbols(title);


type.addEventListener('click',()=>{
  getPlaceholder(priceForType, type, price);
  getMinprice(price, priceForType, type);
});


price.addEventListener('input',()=> {
  getMinprice(price, priceForType, type);
  if (price.value<0) {price.value = '';} // minimum is 1
});


setAvailableRoom(room, guest, settings);
room.addEventListener('change', () => {
  setAvailableRoom(room, guest, settings);
});


time.addEventListener('change', (evt) => {
  timeout.value = evt.target.value;
  timein.value = evt.target.value;

});

getData().then((response) => response.json()).then((data) => {getMarker(maps,adress,element,data,marker,mainPinStandart,GetPredicate(types.value,rooms.value,guests.value,houseprice.value));}).catch(()=>{body.appendChild(message);});


function handler(evt) {
  if(evt.keyCode===27){
    succes.remove();
    error.remove();
    window.removeEventListener('keydown', handler);

  }
}


succes.addEventListener('click', () => {

  succes.remove();


},
);


errorbutton.addEventListener('click',()=> {
  error.remove();
});


reset.addEventListener('click',()=> {
  GetFormInizialization(forms,formfilter,marker,center,maps,adress);
  getData().then((response) => response.json()).then((data) => {getMarker(maps,adress,element,data,marker,mainPinStandart,GetPredicate(types.value,rooms.value,guests.value,houseprice.value));});
});


formfilter.addEventListener('change',()=> { getData().then((response) => response.json()).then((data) => {getMarker(maps,adress,element,data,marker,mainPinStandart,GetPredicate(types.value,rooms.value,guests.value,houseprice.value));});});


forms.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const formData = new FormData(evt.target);
  sendForm(formData).then(()=>{body.appendChild(succes);}).then(()=>{ GetFormInizialization(forms,formfilter,marker,center,maps,adress);}).then(()=>{getData().then((response) => response.json()).then((data) => {getMarker(maps,adress,element,data,marker,mainPinStandart,GetPredicate(types.value,rooms.value,guests.value,houseprice.value));});}).then(()=>{window.addEventListener('keydown',handler);}).catch(()=>{body.appendChild(error);});
},
);
