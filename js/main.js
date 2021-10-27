const forms=document.querySelector('.ad-form');
const title=forms.querySelector('.titles');
const type=forms.querySelector('#type');
const price=forms.querySelector('.prices');
const room=forms.querySelector('#room_number');
const guest=forms.querySelector('#capacity');
const timeout=forms.querySelector('#timeout');
const timein=forms.querySelector('#timein');
const time=forms.querySelector('.ad-form__element--time');


import{minsymbols} from './form.js';//Минимальное количество симоволов для обьявления
import{priceForType} from'./setting.js';//цена в зависисмости от типа жилья
import{getPlaceholder} from './form.js';//изменения плейсхолдера
import{getMinprice} from './form.js';//изменение минимальной цены
import{settings} from './setting.js';//настройки заказчика
import { GetRoom } from './form.js';//количество человек в зависимости от комнат
import{disabledpage} from './disabled-page.js';
import{activepage} from './disabled-page.js';
import { mainPinIcon } from './get-map.js';
import { mainPinStandart } from './get-map.js';
import { marker } from './get-map.js';
import{map} from './get-map.js'



minsymbols(title);

type.addEventListener('change',()=> {
  getPlaceholder(priceForType,type,price);
  getMinprice(price,priceForType,type);


});


room.addEventListener('change',()=> {
  GetRoom(room,guest,settings);
});

time.addEventListener('change',(evt)=> {
  timeout.value=evt.target.value;
  timein.value=evt.target.value;

});
