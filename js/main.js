import {
  minsymbols
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
  GetRoom
} from './form.js';
import {
  getActiveForm
} from './get-map.js';
import { forminizialization } from './form-inizialization.js';


import{getAds} from './get-data.js';
import { sendForm } from './get-data.js';

import { center } from './setting.js';

import { marker } from './create-marker.js';
import { mainPinStandart } from './create-marker.js';

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
const firsttype=forms.querySelector('.bungalo');
const firtstime=forms.querySelector('.twelve');
const firsttimein=forms.querySelector('.twelvs');
const oneroom=forms.querySelector('.oneroom');
const oneguest=forms.querySelector('.oneguest');


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
const desc=forms.querySelector('#title');
const description=forms.querySelector('#description');
const features=forms.querySelectorAll('.features__checkbox');
const reset=forms.querySelector('.ad-form__reset');


getActiveForm(forms, formfilter, maps, center);

minsymbols(title);

type.addEventListener('change', () => {
  getPlaceholder(priceForType, type, price);
  getMinprice(price, priceForType, type);
});

price.addEventListener('input',()=> {
  getMinprice(price, priceForType, type);
});


GetRoom(room, guest, settings);
room.addEventListener('change', () => {
  GetRoom(room, guest, settings);
});


time.addEventListener('change', (evt) => {
  timeout.value = evt.target.value;
  timein.value = evt.target.value;

});

getAds(maps,adress,element,marker,mainPinStandart,body,message);
sendForm(forms,body,succes,error,price,formfilter,marker,center,maps,adress,priceForType,type);

window.addEventListener('keydown',(evt)=> {
  if(evt.keyCode===27){
    succes.remove();
    error.remove();


  }
});
succes.addEventListener('click', () => {
  succes.remove();
});


errorbutton.addEventListener('click',()=> {
  error.remove();
});


reset.addEventListener('click',()=> {
  forminizialization(desc,firsttype,oneroom,oneguest,firtstime,firsttimein,description,features,formfilter,price);
});

const sort=function compare(a, b) {
  if (a<b) {
    return -1;
  }
  if (a>b) {
    return 1;
  }
  if(a===b){
   return 0;
  }
}
const number=[5,2,3,1,6];
number.sort()
console.log(number);
